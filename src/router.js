const express = require("express");

const wilderController = require("./controllers/wilder.controller");

const router = express.Router();

router.get("/wilder", wilderController.read);
router.post("/wilder", wilderController.create);
router.put("/wilder/:id", wilderController.update);
router.delete("/wilder/:id", wilderController.destroy);

module.exports = router;
