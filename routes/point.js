const express = require("express");
const router = express.Router();
const {  
    getAllPoint,
    createPoint,
    getSinglePoint,
    updatePoint,
} = require("../controllers/point")

router.get("/", getAllPoint);
router.post("/", createPoint);
router.get("/:id", getSinglePoint);
router.patch("/:id", updatePoint);

module.exports = router;