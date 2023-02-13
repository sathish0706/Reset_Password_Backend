const express = require("express");
const { getUser } = require("../Controllers/user.controllers");

const router = express.Router();

// router.post("/post/user", postUser);

router.get("/user", getUser);

module.exports = router;
