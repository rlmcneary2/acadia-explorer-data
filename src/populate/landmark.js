"use strict";


const path = require("path");
const geoPointsData = require("../data/geoPoints");
const landmarksData = require("../data/landmarks");
const writeFile = require("../writeFile");
const routesData = require("../data/routes");


/** 
 * @typedef {import("../data/geoPoints").GeoPoint} GeoPoint
 * @typedef {import("../data/landmarks").Landmark} Landmark
 */


/** 
 * @typedef DataLandmark
 * @property {string} description
 * @property {string} geoPointUid
 * @property {LandmarkType} landmarkType
 * @property {string} name
 * @property {object} location
 * @property {number} [location.elevation]
 * @property {number} location.latitutde
 * @property {number} location.longitude
 */


/**
 * Add definitions to the DB.
 * @param {string} output The directory where output should be written.
 * @param {boolean} [isDebug] If true this function is being invoked in debug mode.
 * @returns {Promise<void>}
 */
module.exports = async (output, isDebug) => {
    console.log(`${path.parse(__filename).name} start`);

    /** @type {DataLandmark[]} */
    const landmarks = [];
    /** @type {DataLandmark} */
    let dataLandmark;
    for (const landmark of landmarksData) {
        dataLandmark = createOutputLandmark(landmark);
        landmarks.push(dataLandmark);
    }

    const routes = [];
    /** @type {Landmark} */
    let stop;
    let nextStop;
    for (const route of routesData) {
        const { scheduledStops, ...nextRoute } = route;

        nextRoute.scheduledStops = [];

        // These are scheduled stops defined by the Island Explorer tables that
        // can be found online or in the Acadia Weekly.
        for (const scheduledStop of scheduledStops) {
            const { ids: stopIds, ...nextScheduledStop } = scheduledStop;

            nextScheduledStop.stops = [];

            for (const id of stopIds) {
                nextStop = { id };

                stop = landmarksData.find(x => x.stopId === id);

                if (stop) {
                    const { description, name } = stop;
                    nextStop = { ...nextStop, description, name };
                } else {
                    throw Error(`Stop ${id} for route ${route.name}(${route.id}) was not found in landmarksData.`);
                }

                nextScheduledStop.stops.push(nextStop);
            }

            nextRoute.scheduledStops.push(nextScheduledStop);
        }

        // These are landmarks that are accessible from this route.
        nextRoute.landmarks = [];
        for (const landmark of landmarksData) {
            if (!landmark.routeIds || !landmark.routeIds.includes(route.id)) {
                continue;
            }

            dataLandmark = createOutputLandmark(landmark);
            nextRoute.landmarks.push(dataLandmark);
        }

        routes.push(nextRoute);
    }

    await writeFile(path.join(output, "data.json"), { landmarks, routes }, isDebug);

    console.log(`${path.parse(__filename).name} end`);
};

/**
 * @param {Landmark} landmark
 * @returns {DataLandmark}
 */
function createOutputLandmark(landmark) {
    /** @type {DataLandmark} */
    const { geoPointUid, routeIds, stopId, ...nextLandmark } = landmark; // eslint-disable-line no-unused-vars

    // Add the geo location information to the landmark.
    const gp = geoPointsData.find(y => y.uid === landmark.geoPointUid);
    if (!gp) {
        throw Error(`Landmark ${landmark.name} has an error with geoPointUid ${landmark.geoPointUid}`);
    }

    const { elevation, latitutde, longitude } = gp;
    nextLandmark.location = { elevation, latitutde, longitude };

    return nextLandmark;
}
