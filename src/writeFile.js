"use strict";


const fs = require("fs");


module.exports = (file, data) => {

    return new Promise((resolve, reject) => {

        fs.writeFile(file, JSON.stringify(data), err => {
            if (err) {
                reject(err);
                return;
            }

            resolve();
        });

    });

};
