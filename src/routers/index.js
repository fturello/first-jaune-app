const express = require("express");

const wilderRoutes = require("./wilder.routes");

const router = express.Router();

router.use("/wilder", wilderRoutes);

module.exports = router;
