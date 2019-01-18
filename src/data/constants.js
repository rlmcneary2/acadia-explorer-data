"use strict";


/**
 * @typedef LandmarkType
 * @property {"point-of-interest"} pointOfInterest
 * @property {"trailhead"} trailhead
 * @property {"visitor-center"} visitorCenter
 */


/**
 * @typedef constants
 * @property {LandmarkType} landmarkType
 */


/** @type {constants} */
module.exports = Object.freeze({
    /**
     * Allowed landmark types.
     * @readonly
     */
    landmarkType: {
        pointOfInterest: "point-of-interest",
        trailhead: "trailhead",
        visitorCenter: "visitor-center"
    }
});
