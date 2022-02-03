var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");

var { requests } = require("../services/requests");
// console.log(url, method, headers, body);

router.get("/", function (req, res, next) {
  res.send("user-profile get ... ");
});

const fetchData = async (req, res) => {
  let {
    operationName = "getUserProfile", // with default
    username = "akshayvarmamit", // with default
  } = req.body;

  let { url, method, headers, body } = JSON.parse(
    JSON.stringify(requests.getUserProfile)
  );

  headers.referer = headers.referer.replace("{USER_NAME}", username);
  body.variables.username = body.variables.username.replace(
    "{USER_NAME}",
    username
  );

  // console.log(username);
  // console.log(headers);
  // console.log(body);

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
  // console.log("101", response);
  // console.log(await response.text()); // parses JSON response into native JavaScript objects
  // console.log(resp); // parses JSON response into native JavaScript objects
  // console.log("102");
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
  // console.log(a);

  res.send(a);
});

module.exports = router;
