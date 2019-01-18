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
 * @property {number} [stopId] The API assigned stop ID (StopId).
 * @property {number[]} [routeIds] This landmark is accessible from these routes (only needed if there is no stopId).
 */


/**
 * @type {Landmark[]}
 */
module.exports = [
    {
        description: "The roadside trailhead for Champlain Mountain's north trail.",
        geoPointUid: "LMK_CHAMPLAIN_NORTH_RIDGE",
        landmarkType: constants.landmarkType.trailhead,
        name: "Champlain North Ridge Trailhead",
        routeIds: [3,4]
    },
    {
        description: "This is the desc.",
        geoPointUid: "LMK_SAND_BEACH",
        landmarkType: constants.landmarkType.pointOfInterest,
        name: "Sand Beach",
        stopId: 22
    },
    {
        description: "This is the desc. for thunder hole",
        geoPointUid: "LMK_THUNDER_HOLE",
        landmarkType: constants.landmarkType.pointOfInterest,
        name: "Thunder Hole",
        stopId: 23
    },
];
