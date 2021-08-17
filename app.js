var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require('cors')

var contestRatingRouter = require("./routes/contest-rating");
var userProfileRouter =  require("./routes/user-profile");
var recentPostsRouter = require("./routes/recent-posts");
var recentSubmissionRouter = require("./routes/recent-submission");

var app = express();

app.use(cors())
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/contest-rating", contestRatingRouter);
app.use("/user-profile", userProfileRouter);
app.use("/recent-posts", recentPostsRouter);
app.use("/recent-submission", recentSubmissionRouter);

var listener = app.listen(3001, function () {
    console.log("Listening on port " + listener.address().port);
});
