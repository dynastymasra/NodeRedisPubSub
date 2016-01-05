var kue = require('kue');
var jobs = kue.createQueue();

jobs.process('chat', function(job, done){
  console.log(job.data);
  done()
});
