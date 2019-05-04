const express = require("express");
const router = express.Router();

const request = require("request");

router.get("/", (req, res, next) => {
  const state = req.query.state;
  request.get(
    `http://data-service.default.svc.cluster.local/stateToCode?state=${state}`,
    (error, response, body) => {
      if (error) {
        return console.dir(error);
      } else {
        res.status(200).json({
          code: JSON.parse(response.body).code
        });
      }
    }
  );
});

module.exports = router;
