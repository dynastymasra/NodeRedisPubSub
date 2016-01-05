var kue = require('kue');
var jobs = kue.createQueue();

var a = jobs.create('chat', {
    send: 'send message from redis with kue js'
}).save();
