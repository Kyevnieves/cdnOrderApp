const express = require("express");
const router = express.Router();
const { upload } = require("../lib/multer");
router.get("/", (req, res) => {
  console.log(upload);
});

router.post("/guardar/imagen", upload, (req, res) => {
  const fileName = req.file.filename;
  res.send(`${fileName}`);
});

module.exports = router;
