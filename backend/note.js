const express = require("express");
const router = express.Router();

let notes = require("./notes");
router.get("/list", async (req, res) => {
    try {
      res.status(200).json({
        data: notes
      });
    } catch (err) {
      res.status(400).json({
        message: "Some error occured",
        err
      });
    }
  });

  router.get("/list/:id", async (req, res) => {
    let { id } = req.params;
    id = Number(id);
    try {
      let note = notes.find(note => note._id === id);
      res.status(200).json({
        data: note
      });
    } catch (err) {
      res.status(400).json({
        message: "Some error occured",
        err
      });
    }
  });

  module.exports = router;