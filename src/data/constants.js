"use strict";


/**
 * @typedef LandmarkType
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
        trailhead: "trailhead",
        visitorCenter: "visitor-center"
    }
});
