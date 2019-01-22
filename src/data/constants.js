"use strict";


/**
 * @typedef LandmarkType
 * @property {"airport"} airport
 * @property {"campground"} campground
 * @property {"ferry-transport"} ferryTransport
 * @property {"ground-transport"} groundTransport
 * @property {"point-of-interest"} pointOfInterest
 * @property {"route-stop"} routeStop
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
        airport: "airport",
        campground: "campground",
        ferryTransport: "ferry-transport",
        groundTransport: "ground-transport",
        pointOfInterest: "point-of-interest",
        routeStop: "route-stop",
        trailhead: "trailhead",
        visitorCenter: "visitor-center"
    }
});
