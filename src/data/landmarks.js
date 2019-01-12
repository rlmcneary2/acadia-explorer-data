"use strict";


const constants = require("./constants");


/**
 * @typedef {import("./constants").LandmarkType} LandmarkType
 */


/**
 * @typedef Landmark
 * @property {string} description
 * @property {string} geoPointUid
 * @property {LandmarkType} landmarkType
 * @property {string} name
 * @property {number[]} [routes] The API assigned route ID.
 * @property {number} [stop] The API assigned stop ID (StopId).
 * @property {string} uid
 */


/**
 * @type {Landmark[]}
 */
module.exports = [
    {
        description: "The trailhead for Champlain Mountain's north trail.",
        geoPointUid: "",
        landmarkType: constants.landmarkType.trailhead,
        name: "",
        routes: [3, 4]
    },
    {
        description: "This is the desc.",
        geoPointUid: "LMK_SAND_BEACH",
        landmarkType: constants.landmarkType.trailhead,
        name: "Sand Beach",
        routes: [3, 4],
        stop: 22
    },
    {
        description: "This is the desc. for thunder hole",
        geoPointUid: "LMK_THUNDER_HOLE",
        landmarkType: constants.landmarkType.visitorCenter,
        name: "Thunder Hole",
        routes: [3, 4],
        stop: 23
    },
];
