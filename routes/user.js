const express = require("express");
const router = express.Router();

const {
  getUserById,
  createUser,
  getUser,
  getAllUser,
  updateUser,
  removeUser
} = require("../controllers/user");
const { isSignedIn, isAdmin, isAuthenticated } = require("../controllers/auth");

//params
router.param("userId", getUserById);

//actual routers goes here

//create
router.post(
  "/user/create",
  createUser
);

//read
router.get("/user/:userId", getUser);

//update
router.put(
  "/user/:userId",
  updateUser
);

//delete

router.delete(
  "/user/:userId",
  removeUser
);

module.exports = router;
