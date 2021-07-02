const express = require("express");
const router = express.Router();

const {
  getAttendanceById,
  createAttendance,
  getAttendance,
  getAllAttendance,
  updateAttendance,
  removeAttendance
} = require("../controllers/attendance");
const { isSignedIn, isAdmin, isAuthenticated } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

//params
router.param("userId", getUserById);
router.param("attendanceId", getAttendanceById);

//actual routers goes here

//create
router.post(
  "/attendance/create/:userId",
  isSignedIn,
  isAuthenticated,
  createAttendance
);

//read
router.get("/attendance/:attendanceId/:userId", 
  isSignedIn,
  isAuthenticated,
  isAdmin,
  getAttendance
);

router.get("/attendance/:userId", 
  isSignedIn,
  isAuthenticated,
  isAdmin,
  getAllAttendance
);

//update
router.put(
  "/attendance/:attendanceId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateAttendance
);

//delete

router.delete(
  "/attendance/:attendanceId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  removeAttendance
);

module.exports = router;
