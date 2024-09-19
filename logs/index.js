const logEvents = require('./logEvent');
const EventEmitter = require('events');

//initialize object
const myEmitter = new EventEmitter();

//add listener for the log event
myEmitter.on('log', (msg) => logEvents(msg));

setTimeout(() => {
    //emit event
    myEmitter.emit('log', 'Log event emitted!')
}, 2000)