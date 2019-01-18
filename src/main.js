"use strict";


const fs = require("fs");
const path = require("path");


async function start(isDebug) {
    console.log("Start");

    const outputPath = path.join(path.dirname(__dirname), "dist");
    const populatePath = path.join(__dirname, "populate");
    let files = await readdir(populatePath);
    await process(outputPath, files.map(x => path.join(populatePath, x)), 0, isDebug);

    console.log("End");
}


start(true);


/**
 * @param {string} output The directory where output files should be written. 
 * @param {string[]} files 
 * @param {number} index
 * @param {boolean} isDebug
 * @returns {Promise<void>}
 */
async function process(output, files, index, isDebug) {
    if (!files || !files.length) {
        return;
    }

    if (files.length <= index) {
        return;
    }

    const filename = files[index];
    await require(filename)(output, isDebug);

    if (files.length <= index + 1) {
        return;
    }

    return process(output, files, index + 1, isDebug);
}

/**
 * Read the contents of a directory.
 * @param {PathLike} path 
 * @returns {Promise<string[]>}
 */
async function readdir(path) {
    return new Promise ((resolve, reject) => {
        fs.readdir(path, (err, files) => {
            if (err) {
                reject (err);
                return;
            }

            resolve (files);
        });
    });
}
