var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");

var { requests } = require("../services/requests");

router.get("/", function (req, res, next) {
  res.send("contest-rating get ... ");
});

const fetchData = async (req, res) => {
  let {
    operationName = "getContestRankingData", // with default
    username = "akshayvarmamit", // with default
  } = req.body;

  // let {
  //     operationName = "getUserProfile", // with default
  //     username = "", // with default
  // } = req.body

  let { url, method, headers, body } = JSON.parse(
    JSON.stringify(requests.getContestRankingData)
  );

  headers.referer = headers.referer.replace("{USER_NAME}", username);
  body.variables.username = body.variables.username.replace(
    "{USER_NAME}",
    username
  );

  const response = await fetch(
    url, //
    {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      // mode: 'cors', // no-cors, *cors, same-origin
      // mode: 'no-cors', // no-cors, *cors, same-origin
      // mode: 'same-origin', // no-cors, *cors, same-origin
      // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: 'same-origin', // include, *same-origin, omit
      headers: headers,
      // {
      //   'Content-Type': 'application/json'
      //   // 'Content-Type': 'application/x-www-form-urlencoded',
      // },
      // redirect: 'follow', // manual, *follow, error
      // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // body: JSON.stringify(data) // body data type must match "Content-Type" header
      body: JSON.stringify(body), // body data type must match "Content-Type" header
    }
  );

  let resp = await response.json();
  return resp;
};

router.post("/", async function (req, res, next) {
  // let fromUI = {
  //     // url: req.url,
  //     // method: req.method,
  //     // headers: req.headers,
  //     body: req.body,
  // };

  let a = await fetchData(req, res);

  res.send(a);
});

module.exports = router;
