"use strict";


const fs = require("fs");


/**
 * Write data to a file.
 * @param {string} file The full path including file name where output should be written.
 * @param {object || any[]} data This will be JSON.stringified.
 * @param {boolean} [isDebug] If true this function is being invoked in debug mode.
 * @returns {Promise<void>}
 */
module.exports = (file, data, isDebug) => {

    return new Promise((resolve, reject) => {

        const args = isDebug ? [data, null, 2] : [data];

        fs.writeFile(file, JSON.stringify(...args), err => {
            if (err) {
                reject(err);
                return;
            }

            resolve();
        });

    });

};
