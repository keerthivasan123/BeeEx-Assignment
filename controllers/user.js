const User = require("../models/user");

exports.getUserById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err) {
      return res.status(400).json({
        error: "User not found in DB"
      });
    }
    req.user = user;
    next();
  });
};

exports.createUser = (req, res) => {
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        error: "NOT able to save user in DB"
      });
    }
    res.json({ user });
  });
};

exports.getUser = (req, res) => {
  return res.json(req.user);
};

exports.getAllUser = (req, res) => {
  User.find().exec((err, users) => {
    if (err) {
      return res.status(400).json({
        error: "NO categories found"
      });
    }
    res.json(users);
  });
};

exports.updateUser = (req, res) => {
  const user = req.user;
  user.name = req.body.name;

  user.save((err, updatedUser) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to update user"
      });
    }
    res.json(updatedUser);
  });
};

exports.removeUser = (req, res) => {
  const user = req.user;

  user.remove((err, user) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to delete this user"
      });
    }
    res.json({
      message: "Successfull deleted"
    });
  });
};
