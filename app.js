var kue = require('kue');

kue.createQueue({
   redis: {
      port: 6379,
      host: 'localhost'
   }
});

kue.app.listen(3000);
