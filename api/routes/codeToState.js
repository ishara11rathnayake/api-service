const express = require("express");
const router = express.Router();

const request = require("request");

router.get("/", (req, res, next) => {
  const code = req.query.code;
  request.get(
    `http://data-service.default.svc.cluster.local/codeToState?code=${code}`,
    (error, response, body) => {
      if (error) {
        return console.dir(error);
      } else {
        res.status(200).json({
          state: JSON.parse(response.body).state
        });
      }
    }
  );
});

module.exports = router;
