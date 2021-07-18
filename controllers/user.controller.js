const { response, request } = require('express');

const getUsers = (req = request, res = response) => {
  res.json({
    type: `This is a HTTP ${req.method} request - controller`,
  });
};
const postUser = (req, res) => {
  res.json({
    type: `This is a HTTP ${req.method} request - controller`,
  });
};
const putUser = (req, res) => {
  res.json({
    type: `This is a HTTP ${req.method} request - controller`,
  });
};
const deleteUser = (req, res) => {
  res.json({
    type: `This is a HTTP ${req.method} request - controller`,
  });
};

module.exports = {
  getUsers,
  postUser,
  putUser,
  deleteUser,
};
