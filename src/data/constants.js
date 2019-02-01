"use strict";


/**
 * @typedef LandmarkFeature
 * @property {"climb"} climb
 * @property {"hike"} hike
 * @property {"park"} park
 * @property {"restroom"} restroom
 * @property {"walk"} walk
 */


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
 * @property {LandmarkFeature} landmarkFeature
 * @property {LandmarkType} landmarkType
 */


/**
 * @typedef PageElement
 * @property {string} [h1] A header.
 * @property {PageElement[]} [ul] A list of elements.
 * @property {string} [p] A paragraph of text.
 * @property {string} [tip] A paragraph of text to be displayed as a helpful tip.
 * @property {string} [li] A list item.
 */


/** @type {constants} */
module.exports = Object.freeze({
    /**
     * @readonly
     * @type {LandmarkFeature}
     */
    landmarkFeature: {
        climb: "climb",
        hike: "hike",
        park: "park",
        restroom: "restroom",
        walk: "walk"
    },

    /**
     * @readonly
     * @type {LandmarkType}
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
