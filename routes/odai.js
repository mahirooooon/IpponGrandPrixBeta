const express = require("express");
const router = express.Router();
const {  
    getAllOdai,
    createOdai,
    getSingleOdai,
    updateOdai,
    deleteOdai
} = require("../controllers/odai")

router.get("/", getAllOdai);
router.post("/", createOdai);
router.get("/:QNo", getSingleOdai);
router.patch("/:QNo", updateOdai);
router.delete("/:QNo", deleteOdai);

module.exports = router;