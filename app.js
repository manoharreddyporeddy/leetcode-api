var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require('cors')

var userProfileRouter = require("./routes/user-profile");

var app = express();

app.use(cors())
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/user-profile", userProfileRouter);

var listener = app.listen(3001, function () {
    console.log("Listening on port " + listener.address().port);
});
