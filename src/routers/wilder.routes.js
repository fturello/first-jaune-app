const express = require("express");

const wilderController = require("../controllers/wilder.controller");

const router = express.Router();

router.get("/", wilderController.read);
router.post("/", wilderController.create);
router.put("/:id", wilderController.update);
router.delete("/:id", wilderController.destroy);

module.exports = router;
