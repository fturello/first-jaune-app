const express = require("express");

const wilderController = require("./controllers/wilder");

const router = express.Router();

router.get("/wilder", wilderController.read);
router.post("/wilder", wilderController.create);

module.exports = router;
