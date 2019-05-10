const express = require("express");
const path = require("path");
const multer = require('multer');
const uuid = require('uuid/v4');
const morgan = require('morgan');

// app
const app = express();

// Settings 
app.set('port', process.env.PORT || 5000);

// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// static files
// app.use(express.static(path.join(__dirname, 'client/build')));

// routes
app.use("/api/cero", require('./routes/api/cero'));
app.use("/api/tasks", require('./routes/api/tasks'));
app.use("/api/tramways", require('./routes/api/tramways'));
app.use("/update/cero", require('./routes/update/cero'));
app.use("/update/tasks", require('./routes/update/tasks'));
app.use("/update/tramways", require('./routes/update/tramways'));


// Handles any requests that don't match the ones above
// app.get('*', (req,res) =>{
// 	res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });

// server
const server = app.listen(app.get('port'), function() {
  console.log(`Listening http://localhost:${server.address().port}`);
});