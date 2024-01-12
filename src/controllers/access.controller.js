"use strict";
const AccessService = require("../services/access.service");

const {OK, CREATED} = require("../core/success.response")
class AccessController {
  signUp = async (req, res, next) => {
    new CREATED({
        message: "Register successfully",
        metadata: await AccessService.signUp(req.body),
        option: {
            limit: 10
        }
    }).send(res)
    // return res.status(201).json(await AccessService.signUp(req.body));
  };
}

module.exports = new AccessController();
