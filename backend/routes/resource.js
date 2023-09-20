const model = require("../mongo/resource");
const resource = model.ResourceRepository;

const express = require("express");
const Router = require("router");
const { mongo } = require("mongoose");
const router = Router();

router.post("/resourceRepository", async (req, res) => {
  try {
    const { r_id, subject, r_name, r_data } = req.body;

    const newResource = new resource({
      r_id,
      subject,
      r_name,
      r_data,
    });
    const doc = await newResource.save();
    console.log(doc);
    return res.status(200).json({
      success: true,
      message: "entery created",
      doc: doc,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message + "not",
    });
  }
});

//to get all resorce repository
router.get("/getAllResourceRepository", async (req, res) => {
  try {
    const allresource = await resource.find({});
    res.send({ data: allresource });
  } catch (err) {
    console.log(err);
  }
});

exports.router = router;
