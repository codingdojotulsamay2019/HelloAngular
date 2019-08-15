const express = require('express')
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.static( __dirname + '/HelloAngular/dist/HelloAngular' ));

require('./server/config/mongoose');
require('./server/config/routes')(app);


app.listen(8000), () => console.log('listening on port 8000');
