'use strict'


const mongoose = require('mongoose')
const os = require('os');
const process = require('process')
const countConnect = () => {
    const numConnection = mongoose.connections.length
}
const _SECOND = 5000
//check overload

const checkOverLoad = () => {
    setInterval(() => {
        const numConnection = mongoose.connections.length
        const numCores = os.cpus().length;
        const memoryUsage = process.memoryUsage().rss;

        const maxConnection =  numCores * 5;
        if(numConnection > maxConnection) {
        }
    }, _SECOND) // Monitor every 5 second
}
module.exports = {
    countConnect,
    checkOverLoad
}