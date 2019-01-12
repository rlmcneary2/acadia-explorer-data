"use strict";


const path = require("path");
const geoPointsData = require("../data/geoPoints");
const landmarksData = require("../data/landmarks");
const writeFile = require("../writeFile");
// const routesData = require("../data/routes");
// const stopsData = require("../data/stops");


/** 
 * @typedef {import("../data/geoPoints").GeoPoint} GeoPoint
 */




/**
 * Add definitions to the DB.
 * @returns {Promise<Landmark>}
 */
module.exports = async output => {
    console.log(`${path.parse(__filename).name} start`);

    /** @type {any[]} */
    let landmarks = [];
    /** @type {GeoPoint[]} */
    let gp;
    for (const landmark of landmarksData) {
        gp = geoPointsData.filter(y => y.uid === landmark.geoPointUid);
        if (!gp || gp.length !== 1) {
            throw Error(`Landmark ${landmark.uid} has an error with geoPointUid ${landmark.geoPointUid}`);
        }

        const { elevation, latitutde, longitude } = gp[0];
        const next = { ...landmark, ...{ location: { elevation, latitutde, longitude } } };

        landmarks.push(next);
    }

    await writeFile(path.join(output, "landmarks.json"), landmarks);

    console.log(`${path.parse(__filename).name} end`);
};
