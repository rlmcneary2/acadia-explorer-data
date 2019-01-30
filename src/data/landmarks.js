"use strict";


const constants = require("./constants");


/**
 * @typedef {import("./constants").LandmarkType} LandmarkType
 * @typedef {import("./constants").PageElement} PageElement
 */


/**
 * @typedef Landmark
 * @property {string} [description] A long potentially multi-sentence description.
 * @property {string} geoPointUid
 * @property {LandmarkType} landmarkType
 * @property {string} name
 * @property {PageElement[]} [page] An array with information that can be displayed as HTML.
 * @property {string} [descriptionShort] A short description.
 * @property {number} [stopId] The API assigned stop ID (StopId).
 * @property {number[]} [routeIds] This landmark is accessible from these routes (only needed if there is no stopId).
 */


/**
 * @type {Landmark[]}
 */
module.exports = [
    {
        geoPointUid: "LMK_ACADIA_INN",
        landmarkType: constants.landmarkType.lodging,
        name: "Acadia Inn",
        stopId: 17
    },
    {
        description: "LMK_ACADIA_GATEWAY_CENTER_DESC",
        geoPointUid: "LMK_ACADIA_GATEWAY_CENTER",
        landmarkType: constants.landmarkType.groundTransport,
        name: "Acadia Gateway Center",
        stopId: 74
    },
    {
        geoPointUid: "LMK_ATLANTIC_EYRIE_LODGE",
        landmarkType: constants.landmarkType.lodging,
        name: "Atlantic Eyrie Lodge",
        stopId: 18
    },
    {
        geoPointUid: "LMK_ATLANTIC_OCEANSIDE_HOTEL",
        landmarkType: constants.landmarkType.lodging,
        name: "Atlantic Oceanside Hotel",
        stopId: 14
    },
    {
        geoPointUid: "LMK_BAR_HARBOR_AIRPORT",
        landmarkType: constants.landmarkType.airport,
        name: "Bar Harbor Airport",
        stopId: 10
    },
    {
        geoPointUid: "LMK_BAR_HARBOR_CAMPGROUND",
        landmarkType: constants.landmarkType.campground,
        name: "Bar Harbor Campground",
        stopId: 4
    },
    {
        geoPointUid: "LMK_BAR_HARBOR_KOA_CAMPGROUND",
        landmarkType: constants.landmarkType.campground,
        name: "Bar Harbor KOA Campground",
        stopId: 9
    },
    {
        geoPointUid: "LMK_BAR_HARBOR_REGENCY",
        landmarkType: constants.landmarkType.lodging,
        name: "Bar Harbor Regency",
        stopId: 15
    },
    {
        geoPointUid: "LMK_BASS_HARBOR_CAMPGROUND",
        landmarkType: constants.landmarkType.campground,
        name: "Bass Harbor Campground",
        stopId: 47
    },
    {
        geoPointUid: "LMK_BASS_HARBOR_FERRY_TERMINAL",
        landmarkType: constants.landmarkType.ferryTransport,
        name: "Bass Harbor Ferry Terminal",
        stopId: 55
    },
    {
        geoPointUid: "LMK_BERNARD",
        landmarkType: constants.landmarkType.pointOfInterest,
        name: "Bernard",
        stopId: 50
    },
    {
        geoPointUid: "LMK_BLACKWOODS_CAMPGROUND",
        landmarkType: constants.landmarkType.campground,
        name: "Blackwoods Campground",
        stopId: 27
    },
    {
        geoPointUid: "LMK_BIRCH_HARBOR",
        landmarkType: constants.landmarkType.pointOfInterest,
        name: "Birch Harbor",
        stopId: 60
    },
    {
        description: "LMK_BROWN_MOUNTAIN_GATEHOUSE_DESC",
        geoPointUid: "LMK_BROWN_MOUNTAIN_GATEHOUSE",
        landmarkType: constants.landmarkType.pointOfInterest,
        name: "Brown Mountain Gatehouse",
        stopId: 53
    },
    {
        description: "LMK_BUBBLE_POND_DESC",
        geoPointUid: "LMK_BUBBLE_POND",
        landmarkType: constants.landmarkType.routeStop,
        name: "Bubble Pond",
        stopId: 28
    },
    {
        /* outbound */
        geoPointUid: "LMK_CADILLAC_NORTH_RIDGE",
        landmarkType: constants.landmarkType.trailhead,
        name: "Cadillac North Ridge",
        stopId: 20
    },
    {
        /* inbound */
        geoPointUid: "LMK_CADILLAC_NORTH_RIDGE",
        landmarkType: constants.landmarkType.trailhead,
        name: "Cadillac North Ridge",
        stopId: 83
    },
    {
        geoPointUid: "LMK_CLARK_POINT",
        landmarkType: constants.landmarkType.routeStop,
        name: "Clark Point",
        stopId: 43
    },
    {
        description: "LMK_EAGLE_LAKE_DESC",
        geoPointUid: "LMK_EAGLE_LAKE",
        landmarkType: constants.landmarkType.routeStop,
        name: "Eagle Lake",
        stopId: 34
    },
    {
        description: "LMK_ECHO_LAKE_DESC",
        geoPointUid: "LMK_ECHO_LAKE",
        landmarkType: constants.landmarkType.pointOfInterest,
        name: "Echo Lake",
        stopId: 40
    },
    {
        description: "LMK_WH_FERRY_TERMINAL_DESC",
        geoPointUid: "LMK_WH_FERRY_TERMINAL",
        landmarkType: constants.landmarkType.ferryTransport,
        name: "Winter Harbor Ferry Terminal",
        stopId: 56
    },
    {
        geoPointUid: "LMK_HADLEY_POINT",
        landmarkType: constants.landmarkType.routeStop,
        name: "Hadley Point",
        stopId: 5
    },
    {
        geoPointUid: "LMK_HAMPTON_INN_BAR_HARBOR",
        landmarkType: constants.landmarkType.lodging,
        name: "Hampton Inn Bar Harbor",
        stopId: 71
    },
    {
        description: "LMK_HULLS_COVE_VISITOR_CENTER_DESC",
        geoPointUid: "LMK_HULLS_COVE_VISITOR_CENTER",
        landmarkType: constants.landmarkType.visitorCenter,
        name: "Hulls Cove Vistor Center",
        stopId: 3
    },
    {
        description: "LMK_JORDAN_POND_DESC",
        geoPointUid: "LMK_JORDAN_POND",
        landmarkType: constants.landmarkType.pointOfInterest,
        name: "Jordan Pond",
        stopId: 29
    },
    {
        geoPointUid: "LMK_MANSET_DOCK",
        landmarkType: constants.landmarkType.routeStop,
        name: "Manset Dock",
        stopId: 88
    },
    {
        description: "LMK_MID_HIGH_SCHOOL_DESC",
        geoPointUid: "LMK_MID_HIGH_SCHOOL",
        landmarkType: constants.landmarkType.routeStop,
        name: "MDI High School",
        stopId: 35
    },
    {
        geoPointUid: "LMK_MT_DESERT_CAMPGROUND",
        landmarkType: constants.landmarkType.campground,
        name: "Mount Desert Campground",
        stopId: 62
    },
    {
        geoPointUid: "LMK_MT_DESERT_NARROWS_CAMPGROUND",
        landmarkType: constants.landmarkType.campground,
        name: "Mount Desert Narrows Campground",
        stopId: 6
    },
    {
        geoPointUid: "LMK_NARROWS_TOO_CAMPGROUND",
        landmarkType: constants.landmarkType.campground,
        name: "Narrows Too Campground",
        stopId: 11
    },
    {
        geoPointUid: "LMK_NORTHEAST_HARBOR",
        landmarkType: constants.landmarkType.routeStop,
        name: "Northeast Harbor Main Street",
        stopId: 52
    },
    {
        description: "LMK_NORTHEAST_HARBOR_PIER_DESC",
        geoPointUid: "LMK_NORTHEAST_HARBOR_PIER",
        landmarkType: constants.landmarkType.ferryTransport,
        name: "Northeast Harbor Pier",
        stopId: 38
    },
    {
        geoPointUid: "LMK_OCEANARIUM",
        landmarkType: constants.landmarkType.attraction,
        name: "Oceanarium",
        stopId: 7
    },
    {
        geoPointUid: "LMK_OTTER_CLIFFS",
        landmarkType: constants.landmarkType.pointOfInterest,
        name: "Otter Cliffs",
        stopId: 24
    },
    {
        description: "LMK_PARKMAN_MOUNTAIN_DESC",
        geoPointUid: "LMK_PARKMAN_MOUNTAIN",
        landmarkType: constants.landmarkType.routeStop,
        name: "Parkman Mountain",
        stopId: 77
    },
    {
        geoPointUid: "LMK_PROSPECT_HARBOR",
        landmarkType: constants.landmarkType.routeStop,
        name: "Prospect Harbor",
        stopId: 61
    },
    {
        description: "LMK_SAND_BEACH_DESC",
        geoPointUid: "LMK_SAND_BEACH",
        landmarkType: constants.landmarkType.pointOfInterest,
        name: "Sand Beach",
        stopId: 22
    },
    {
        description: "LMK_SCHOODIC_POINT_DESC",
        geoPointUid: "LMK_SCHOODIC_POINT",
        landmarkType: constants.landmarkType.routeStop,
        name: "Schoodic Point",
        stopId: 59
    },
    {
        geoPointUid: "LMK_SCHOODIC_WOODS_CAMPROUND",
        landmarkType: constants.landmarkType.campground,
        name: "Schoodic Woods Campground",
        stopId: 79
    },
    {
        geoPointUid: "LMK_SEAL_HARBOR",
        landmarkType: constants.landmarkType.routeStop,
        name: "Seal Harbor",
        stopId: 31
    },
    {
        geoPointUid: "LMK_SEAWALL_CAMPGROUND",
        landmarkType: constants.landmarkType.campground,
        name: "Seawall Campground",
        stopId: 46
    },
    {
        description: "LMK_SIEUR_DE_MONTS_DESC",
        geoPointUid: "LMK_SIEUR_DE_MONTS",
        landmarkType: constants.landmarkType.visitorCenter,
        name: "Sieur De Monts",
        stopId: 21
    },
    {
        geoPointUid: "LMK_SMUGGLERS_DEN_CAMPGROUND",
        landmarkType: constants.landmarkType.campground,
        name: "Smugglers' Den Campground",
        stopId: 41
    },
    {
        description: "LMK_SOMESVILLE_DESC",
        geoPointUid: "LMK_SOMESVILLE",
        landmarkType: constants.landmarkType.routeStop,
        name: "Somesville",
        stopId: 39
    },
    {
        geoPointUid: "LMK_SOUTHWEST_HARBOR",
        landmarkType: constants.landmarkType.routeStop,
        name: "Southwest Harbor",
        stopId: 44
    },
    {
        geoPointUid: "LMK_THUNDER_HOLE",
        landmarkType: constants.landmarkType.pointOfInterest,
        name: "Thunder Hole",
        stopId: 23
    },
    {
        geoPointUid: "LMK_TREMONT_SCHOOL",
        landmarkType: constants.landmarkType.routeStop,
        name: "Tremont School",
        stopId: 48
    },
    {
        geoPointUid: "LMK_TOWN_HILL",
        landmarkType: constants.landmarkType.routeStop,
        name: "Town Hill",
        stopId: 69
    },
    {
        description: "LMK_VILLAGE_GREEN_DESC",
        geoPointUid: "LMK_VILLAGE_GREEN",
        landmarkType: constants.landmarkType.pointOfInterest,
        name: "Village Green",
        stopId: 1
    },
    {
        geoPointUid: "LMK_WILDWOOD_STABLES",
        landmarkType: constants.landmarkType.routeStop,
        name: "Wildwood Stables",
        stopId: 30
    },
    {
        geoPointUid: "LMK_WINTER_HARBOR",
        landmarkType: constants.landmarkType.routeStop,
        name: "Winter Harbor",
        stopId: 57
    },
    {
        geoPointUid: "LMK_WONDER_VIEW_INN",
        landmarkType: constants.landmarkType.lodging,
        name: "Wonder View Inn",
        stopId: 19
    },
    {
        geoPointUid: "LMK_WOODLANDS_KOA_CAMPGROUND",
        landmarkType: constants.landmarkType.campground,
        name: "Woodlands KOA Campground",
        stopId: 8
    },
    {
        description: "N.R.T. description.",
        descriptionShort: "N.R.T. short desc.",
        geoPointUid: "LMK_CHAMPLAIN_NORTH_RIDGE",
        landmarkType: constants.landmarkType.trailhead,
        name: "Champlain North Ridge Trailhead",
        routeIds: [3,4]
    },
    {
        geoPointUid: "LMK_SAND_BEACH",
        landmarkType: constants.landmarkType.pointOfInterest,
        name: "Sand Beach",
        stopId: 22
    },
    {
        geoPointUid: "LMK_THUNDER_HOLE",
        landmarkType: constants.landmarkType.pointOfInterest,
        name: "Thunder Hole",
        stopId: 23
    },
];
