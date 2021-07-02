const Attendance = require("../models/attendance");

exports.getAttendanceById = (req, res, next, id) => {
  Attendance.findById(id).exec((err, att) => {
    if (err) {
      return res.status(400).json({
        error: "Attendance not found in DB"
      });
    }
    req.attendance = att;
    next();
  });
};

exports.createAttendance = (req, res) => {
  const attendance = new Attendance(req.body);
  attendance.save((err, attendance) => {
    if (err) {
      return res.status(400).json({
        error: "NOT able to save attendance in DB"
      });
    }
    res.json({ attendance });
  });
};

exports.getAttendance = (req, res) => {
  return res.json(req.attendance);
};

exports.getAllAttendance = (req, res) => {
  Attendance.find().exec((err, attendence) => {
    if (err) {
      return res.status(400).json({
        error: "NO categories found"
      });
    }
    res.json(attendence);
  });
};

exports.updateAttendance = (req, res) => {
  const attendance = req.attendance;
  attendance.name = req.body.name;
  attendance.company = req.body.company;

  attendance.save((err, updatedAttendance) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to update attendance"
      });
    }
    res.json(updatedAttendance);
  });
};

exports.removeAttendance = (req, res) => {
  const attendance = req.attendance;

  attendance.remove((err, attendance) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to delete this attendance"
      });
    }
    res.json({
      message: "Successfull deleted"
    });
  });
};
