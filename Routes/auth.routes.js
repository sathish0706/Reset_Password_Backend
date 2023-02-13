const express = require("express");

const {
  register,
  signin,
  forgotPassword,
  resetPassword,
} = require("../Controllers/auth.controllers");

const route = express.Router();

route.post("/register", register);

route.post("/signin", signin);

route.post("/forgotPassword", forgotPassword);

route.post("/resetPassword", resetPassword);

module.exports = route;
