"use strict";


/**
 * @typedef LandmarkType
 * @property {"airport"} airport
 * @property {"attraction"} attraction
 * @property {"campground"} campground
 * @property {"ferry-transport"} ferryTransport
 * @property {"ground-transport"} groundTransport
 * @property {"lodging"} lodging
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
        attraction: "attraction",
        campground: "campground",
        ferryTransport: "ferry-transport",
        groundTransport: "ground-transport",
        lodging: "lodging",
        pointOfInterest: "point-of-interest",
        routeStop: "route-stop",
        trailhead: "trailhead",
        visitorCenter: "visitor-center"
    }
});
