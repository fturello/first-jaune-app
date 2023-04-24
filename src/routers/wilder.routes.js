const express = require("express");

const wilderController = require("../controllers/wilder.controller");

const router = express.Router();

router.post("/", wilderController.create);
router.get("/", wilderController.read);
router.put("/:id", wilderController.update);
router.delete("/:id", wilderController.destroy);

module.exports = router;
