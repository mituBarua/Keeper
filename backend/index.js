const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");

const port = process.env.PORT || 3001;
  
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const noteRouter = require("./routes/notes");
app.use("/notes", noteRouter);

app.listen(port, function() {
    console.log("Runnning on " + port);
  });

  module.exports = app;  