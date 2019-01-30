"use strict";


/**
 * @typedef {import("./constants").PageElement} PageElement
 */


/**
 * @typedef Route
 * @property {string} description
 * @property {number} id
 * @property {string} name
 * @property {string} [notice]
 * @property {PageElement[]} [page] An array with information that can be displayed as HTML.
 * @property {ScheduledStops[]} scheduledStops
 */

/**
 * @typedef ScheduledStops
 * @property {object} dates
 * @property {string} dates.begin
 * @property {string} dates.end
 * @property {object} hours
 * @property {string} hours.first
 * @property {string} hours.last
 * @property {number[]} ids
 */


/** @type {Route[]} */
module.exports = [
    {
        description: "Serves campgrounds and attractions along Route 3.",
        id: 1,
        name: "Oceanarium",
        scheduledStops:[
            {
                dates: {
                    begin: "2018-06-23",
                    end: "2018-08-28"
                },
                hours: {
                    first: "07:14:00",
                    last: "22:30:00"
                },
                ids: [7, 6, 5, 4, 3, 1, 3, 4, 5, 6, 7]
            },
            {
                dates: {
                    begin: "2018-08-29",
                    end: "2018-10-08"
                },
                hours: {
                    first: "08:14:00",
                    last: "20:00:00"
                },
                ids: [7, 6, 5, 4, 3, 1, 3, 4, 5, 6, 7]
            }
        ]
    },

    {
        description: "Serves hotels and attractions along Eden Street in Bar Harbor.",
        id: 2,
        name: "Eden Street",
        scheduledStops:[
            {
                dates: {
                    begin: "2018-06-23",
                    end: "2018-08-28"
                },
                hours: {
                    first: "06:30:00",
                    last: "22:00:00"
                },
                ids: [1, 3, 15, 14, 17, 18, 71, 19, 1]
            },
            {
                dates: {
                    begin: "2018-08-29",
                    end: "2018-10-08"
                },
                hours: {
                    first: "07:00:00",
                    last: "19:30:00"
                },
                ids: [1, 3, 15, 14, 17, 18, 71, 19, 1]
            }
        ]
    },

    {
        description: "RTE_SAND_BEACH_DESC",
        id: 3,
        name: "Sand Beach",
        page: [
            { p: "RTE_SAND_BEACH_DESC" },
            { p: "RTE_SAND_BEACH_DESC_2" }
        ],
        scheduledStops:[
            {
                dates: {
                    "begin": "2018-06-23",
                    "end": "2018-08-28"
                },
                hours: {
                    first: "08:00:00",
                    last: "19:20:00"
                },
                ids: [1, 21, 22, 23, 24, 21, 1]
            },
            {
                dates: {
                    begin: "2018-08-29",
                    end: "2018-10-08"
                },
                hours: {
                    first: "09:00:00",
                    last: "18:20:00"
                },
                ids: [1, 21, 22, 23, 24, 21, 1]
            }
        ]
    },

    {
        description: "Serves all of Ocean Drive, Seal Harbor, and Jordan Pond.",
        id: 4,
        name: "Loop Road",
        scheduledStops:[
            {
                dates: {
                    begin: "2018-06-23",
                    end: "2018-08-28"
                },
                hours: {
                    first: "08:45:00",
                    last: "16:45:00"
                },
                ids: [3, 20, 21, 22, 30, 29, 28, 3]
            },
            {
                dates: {
                    begin: "2018-08-29",
                    end: "2018-10-08"
                },
                hours: {
                    first: "08:45:00",
                    last: "15:45:00"
                },
                ids: [3, 20, 21, 22, 30, 29, 28, 3]
            }
        ]
    },

    {
        description: "Jordan Pond road to Northeast Harbor.",
        id: 5,
        name: "Jordan Pond",
        scheduledStops:[
            {
                dates: {
                    begin: "2018-06-23",
                    end: "2018-08-28"
                },
                hours: {
                    first: "09:15:00",
                    last: "16:45:00"
                },
                ids: [1, 3, 28, 29, 31, 52, 38, 31, 29, 28, 3, 1]
            },
            {
                dates: {
                    begin: "2018-08-29",
                    end: "2018-10-08"
                },
                hours: {
                    first: "17:15:00",
                    last: "17:15:00"
                },
                ids: [1, 28, 29, 31, 52, 38, 31, 29, 28, 3, 1]
            },
            {
                dates: {
                    begin: "2018-08-29",
                    end: "2018-10-08"
                },
                hours: {
                    first: "18:15:00",
                    last: "18:15:00"
                },
                ids: [1, 28, 29, 31, 52, 38, 31, 29, 1]
            },
            {
                dates: {
                    begin: "2018-08-29",
                    end: "2018-10-08"
                },
                hours: {
                    first: "19:45:00",
                    last: "19:45:00"
                },
                ids: [1, 29, 31, 52, 38, 31, 29, 1]
            },
            {
                dates: {
                    begin: "2018-08-29",
                    end: "2018-10-08"
                },
                hours: {
                    first: "21:15:00",
                    last: "21:15:00"
                },
                ids: [1, 29, 31, 52]
            }
        ]
    },

    {
        description: "Includes Eagle Lake, Hadlock ponds and Northeast Harbor",
        id: 6,
        name: "Brown Mountain",
        scheduledStops:[
            {
                dates: {
                    begin: "2018-06-23",
                    end: "2018-08-28"
                },
                hours: {
                    first: "08:30:00",
                    last: "09:45:00"
                },
                ids: [1, 34, 35, 77, 53, 38, 53, 77, 35, 34, 1]
            },
            {
                dates: {
                    begin: "2018-06-23",
                    end: "2018-08-28"
                },
                hours: {
                    first: "11:00:00",
                    last: "11:00:00"
                },
                ids: [1, 34, 35, 77, 53, 38]
            },
            {
                dates: {
                    begin: "2018-06-23",
                    end: "2018-08-28"
                },
                hours: {
                    first: "13:00:00",
                    last: "15:30:00"
                },
                ids: [1, 34, 35, 77, 53, 38, 53, 77, 35, 34, 1]
            },
        ]
    },

    {
        description: "West side of Mount Desert Island along Somes Sound including Southwest Harbor and Bass Harbor.",
        id: 7,
        name: "Southwest Harbor",
        notice: "Scheduled stops vary by time of year and day. Please check a local schedule to confirm the stops that are currently in service.",
        scheduledStops:[
            {
                dates: {
                    begin: "2018-06-23",
                    end: "2018-08-28"
                },
                hours: {
                    first: "08:10:00",
                    last: "21:00:00"
                },
                ids: [1, 35, 62, 39, 40, 41, 43, 44, 88, 46, 47, 55, 48, 50, 48, 55, 47, 46, 88, 44, 43, 41, 40, 39, 62, 35, 1]
            },
            {
                dates: {
                    begin: "2018-08-29",
                    end: "2018-10-08"
                },
                hours: {
                    first: "08:10:00",
                    last: "20:00:00"
                },
                ids: [1, 35, 62, 39, 40, 41, 43, 44, 88, 46, 47, 55, 48, 50, 48, 55, 47, 46, 88, 44, 43, 41, 40, 39, 62, 35, 1]
            }
        ]
    },

    {
        description: "Circulates around the Schoodic penninsula. Travel between Schoodic and Mount Desert Island is possible by ferry or car.",
        id: 8,
        name: "Schoodic",
        scheduledStops:[
            {
                dates: {
                    begin: "2018-05-24",
                    end: "2018-10-08"
                },
                hours: {
                    first: "08:40:00",
                    last: "08:40:00"
                },
                ids: [79, 57, 56]
            },
            {
                dates: {
                    begin: "2018-05-24",
                    end: "2018-10-08"
                },
                hours: {
                    first: "09:00:00",
                    last: "15:30:00"
                },
                ids: [56, 79, 59, 60, 61, 79, 57, 56]
            },
            {
                dates: {
                    begin: "2018-05-24",
                    end: "2018-10-08"
                },
                hours: {
                    first: "16:30:00",
                    last: "16:30:00"
                },
                ids: [56, 79]
            }
        ]
    },

    {
        description: "Serves campgrounds and attractions in the northern part of Mount Desert Island.",
        id: 9,
        name: "Trenton",
        scheduledStops:[
            {
                dates: {
                    begin: "2018-06-23",
                    end: "2018-08-28"
                },
                hours: {
                    first: "07:40:00",
                    last: "17:55:00"
                },
                ids: [74, 11, 10, 9, 8, 69, 35, 1, 35, 69, 8, 9, 11, 10, 74]
            },
            {
                dates: {
                    begin: "2018-08-29",
                    end: "2018-10-08"
                },
                hours: {
                    first: "08:55:00",
                    last: "17:55:00"
                },
                ids: [74, 11, 10, 9, 8, 69, 35, 1, 35, 69, 8, 9, 11, 10, 74]
            }
        ]
    },

    {
        description: "Traverses the interior of Mount Desert Island between Bar Harbor and Blackwoods Campground.",
        id: 10,
        name: "Blackwoods",
        scheduledStops:[
            {
                dates: {
                    begin: "2018-06-23",
                    end: "2018-10-08"
                },
                hours: {
                    first: "08:10:00",
                    last: "10:10:00"
                },
                ids: [1, 21, 27, 21, 1]
            },
            {
                dates: {
                    begin: "2018-06-23",
                    end: "2018-10-08"
                },
                hours: {
                    first: "11:10:00",
                    last: "17:10:00"
                },
                ids: [1, 21, 27, 24, 21, 1]
            },
            {
                dates: {
                    begin: "2018-06-23",
                    end: "2018-10-08"
                },
                hours: {
                    first: "18:10:00",
                    last: "19:45:00"
                },
                ids: [1, 27, 1]
            },
            {
                dates: {
                    begin: "2018-06-23",
                    end: "2018-08-28"
                },
                hours: {
                    first: "20:30:00",
                    last: "21:15:00"
                },
                ids: [1, 27, 1]
            },
        ]
    }
];
