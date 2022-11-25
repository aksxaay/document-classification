const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const checkAuth = require("../../middleware/check-auth");
const postSchema = require("../../model/Post");
const multer = require("multer");
const axios = require('axios');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "E:/Dissonance/dissonance-hackathon2/react-app/public/userImage");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
var upload = multer({ storage: storage });

function apiResponse(results) {
  return JSON.stringify({ status: 200, error: null, response: results });
}

function fileNameFromPath(currentPath) {
  var filename = currentPath.substring(url.lastIndexOf('\\') + 1);
  return filename;
}
router.post("/", upload.single("image"), (req, res, next) => {
  try {
    const image = req.file;
    const dateTime = new Date().toUTCString();
    const post = new postSchema({
      userID: req.body.userID,
      datetime: String(dateTime),
      image: req.file.filename,
      email: req.body.name,
    });
    post
      .save()
      .then(res => {
        res.send(apiResponse({ message: "File uploaded successfully.", image }))
      }
      )
      .catch((error) => res.send("nivjjnb"));
  } catch {
    res.status(200).json({
      message: "bj",
    });
  }
});
router.post("/userinfo", checkAuth, (req, res, next) => {
  try {
    userid = req.body.userId;
    console.log(userid);
    postSchema
      .find({ userID: userid })
      //   .populate("userID")
      .exec()
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(400).json(err));
  } catch (error) {
    res.status(400).json({ Error: "Invalid Credentials" });
  }
});

router.get("/superadmin", (req, res, next) => {
  try {
    // userid = req.body.userId;
    // console.log(userid);
    postSchema
      .find()
      //   .populate("userID")
      .exec()
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(400).json(err));
  } catch (error) {
    res.status(400).json({ Error: "Invalid Credentials" });
  }
});
// router.post("/updatebyId/:postId", async (req, res, next) => {
//   try {
//     const postId = req.params.postId;
//     const fn = (obj) =>
//       Object.fromEntries(
//         Object.entries(obj).filter(([, v]) => v !== null) || v !== "undifined"
//       );
//     const filterdata = fn(req.body);
//     const updatedPost = await postSchema.findByIdAndUpdate(
//       { _id: postId },
//       filterdata
//     );
//     res.status(200).json({
//       message: "Post Updated Successfully",
//       postId: updatedPost,
//     });
//   } catch (error) {
//     res.status(400).json({
//       Error: "Something Went Wrong",
//     });
//   }
// // });
// router.post("/deletepost", checkAuth, (req, res, next) => {
//   try {
//     postid = req.body.postId;
//     postSchema
//       .remove({ _id: postid })
//       .exec()
//       .then((result) => res.status(204).json(result))
//       .catch((err) => res.status(400).json("Something went Wrong"));
//   } catch (err) {
//     res.status(400).json({
//       message: "Something went wrong",
//     });
//   }
// });

module.exports = router;
