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
        description: "LMK_ACADIA_GATEWAY_CENTER_DESC",
        geoPointUid: "LMK_ACADIA_GATEWAY_CENTER",
        landmarkType: constants.landmarkType.groundTransport,
        name: "LMK_ACADIA_GATEWAY_CENTER_STOP",
        stopId: 74
    },
    {
        description: "LMK_BAR_HARBOR_AIRPORT_DESC",
        geoPointUid: "LMK_BAR_HARBOR_AIRPORT",
        landmarkType: constants.landmarkType.airport,
        name: "LMK_BAR_HARBOR_AIRPORT_STOP",
        stopId: 10
    },
    {
        description: "LMK_BAR_HARBOR_CAMPGROUND_STOP",
        geoPointUid: "LMK_BAR_HARBOR_CAMPGROUND",
        landmarkType: constants.landmarkType.campground,
        name: "LMK_BAR_HARBOR_CAMPGROUND_STOP",
        stopId: 4
    },
    {
        description: "LMK_BAR_HARBOR_KOA_CAMPGROUND_STOP",
        geoPointUid: "LMK_BAR_HARBOR_KOA_CAMPGROUND",
        landmarkType: constants.landmarkType.campground,
        name: "LMK_BAR_HARBOR_KOA_CAMPGROUND_STOP",
        stopId: 9
    },
    {
        description: "LMK_BASS_HARBOR_CAMPGROUND_STOP",
        geoPointUid: "LMK_BASS_HARBOR_CAMPGROUND",
        landmarkType: constants.landmarkType.campground,
        name: "LMK_BASS_HARBOR_CAMPGROUND_STOP",
        stopId: 47
    },
    {
        description: "LMK_BASS_HARBOR_FERRY_TERMINAL_STOP",
        geoPointUid: "LMK_BASS_HARBOR_FERRY_TERMINAL",
        landmarkType: constants.landmarkType.ferryTransport,
        name: "LMK_BASS_HARBOR_FERRY_TERMINAL_STOP",
        stopId: 55
    },
    {
        description: "LMK_BERNARD_STOP",
        geoPointUid: "LMK_BERNARD",
        landmarkType: constants.landmarkType.pointOfInterest,
        name: "LMK_BERNARD_STOP",
        stopId: 50
    },
    {
        description: "LMK_BLACKWOODS_CAMPGROUND_STOP",
        geoPointUid: "LMK_BLACKWOODS_CAMPGROUND",
        landmarkType: constants.landmarkType.campground,
        name: "LMK_BLACKWOODS_CAMPGROUND_STOP",
        stopId: 27
    },
    {
        description: "LMK_BIRCH_HARBOR_STOP",
        geoPointUid: "LMK_BIRCH_HARBOR",
        landmarkType: constants.landmarkType.pointOfInterest,
        name: "LMK_BIRCH_HARBOR_STOP",
        stopId: 60
    },
    {
        description: "LMK_BROWN_MOUNTAIN_GATEHOUSE_DESC",
        geoPointUid: "LMK_BROWN_MOUNTAIN_GATEHOUSE",
        landmarkType: constants.landmarkType.pointOfInterest,
        name: "LMK_BROWN_MOUNTAIN_GATEHOUSE_STOP",
        stopId: 53
    },
    {
        description: "LMK_BUBBLE_POND_DESC",
        geoPointUid: "LMK_BUBBLE_POND_STOP",
        landmarkType: constants.landmarkType.routeStop,
        name: "LMK_BUBBLE_POND_STOP",
        stopId: 28
    },
    {
        description: "LMK_CADILLAC_NORTH_RIDGE_STOP",
        geoPointUid: "LMK_CADILLAC_NORTH_RIDGE",
        landmarkType: constants.landmarkType.trailhead,
        name: "LMK_CADILLAC_NORTH_RIDGE_STOP",
        stopId: 83
    },
    {
        description: "LMK_CLARK_POINT_STOP",
        geoPointUid: "LMK_CLARK_POINT",
        landmarkType: constants.landmarkType.routeStop,
        name: "LMK_CLARK_POINT_STOP",
        stopId: 43
    },
    {
        description: "LMK_EAGLE_LAKE_DESC",
        geoPointUid: "LMK_EAGLE_LAKE",
        landmarkType: constants.landmarkType.routeStop,
        name: "LMK_EAGLE_LAKE_STOP",
        stopId: 34
    },
    {
        description: "LMK_ECHO_LAKE_DESC",
        geoPointUid: "LMK_ECHO_LAKE",
        landmarkType: constants.landmarkType.pointOfInterest,
        name: "LMK_ECHO_LAKE_STOP",
        stopId: 40
    },
    {
        description: "LMK_WH_FERRY_TERMINAL_DESC",
        geoPointUid: "LMK_WH_FERRY_TERMINAL",
        landmarkType: constants.landmarkType.ferryTransport,
        name: "LMK_WH_FERRY_TERMINAL_STOP",
        stopId: 56
    },
    {
        description: "LMK_HADLEY_POINT_STOP",
        geoPointUid: "LMK_HADLEY_POINT",
        landmarkType: constants.landmarkType.routeStop,
        name: "LMK_HADLEY_POINT_STOP",
        stopId: 5
    },
    {
        description: "LMK_HULLS_COVE_VISITOR_CENTER_DESC",
        geoPointUid: "LMK_HULLS_COVE_VISITOR_CENTER",
        landmarkType: constants.landmarkType.visitorCenter,
        name: "LMK_HULLS_COVE_VISITOR_CENTER_STOP",
        stopId: 3
    },
    {
        description: "LMK_JORDAN_POND_DESC",
        geoPointUid: "LMK_JORDAN_POND",
        landmarkType: constants.landmarkType.pointOfInterest,
        name: "LMK_JORDAN_POND_STOP",
        stopId: 29
    },
    {
        description: "LMK_MANSET_DOCK_STOP",
        geoPointUid: "LMK_MANSET_DOCK",
        landmarkType: constants.landmarkType.routeStop,
        name: "LMK_MANSET_DOCK_STOP",
        stopId: 88
    },
    {
        description: "LMK_MID_HIGH_SCHOOL_DESC",
        geoPointUid: "LMK_MID_HIGH_SCHOOL",
        landmarkType: constants.landmarkType.routeStop,
        name: "LMK_MID_HIGH_SCHOOL_STOP",
        stopId: 35
    },
    {
        description: "LMK_MT_DESERT_NARROWS_CAMPGROUND_STOP",
        geoPointUid: "LMK_MT_DESERT_NARROWS_CAMPGROUND",
        landmarkType: constants.landmarkType.campground,
        name: "LMK_MT_DESERT_NARROWS_CAMPGROUND_STOP",
        stopId: 6
    },
    {
        description: "LMK_NARROWS_TOO_CAMPGROUND_STOP",
        geoPointUid: "LMK_NARROWS_TOO_CAMPGROUND",
        landmarkType: constants.landmarkType.campground,
        name: "LMK_NARROWS_TOO_CAMPGROUND_STOP",
        stopId: 11
    },
    {
        description: "",
        geoPointUid: "",
        landmarkType: constants.landmarkType.visitorCenter,
        name: "",
        stopId: 
    },


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
