const express = require('express');
const router = express.Router();
const { getStudents } = require('../services/student.service');

router.get('/students', (req, res) => {
  const students = getStudents();

  return res.status(200).json(students);
});

module.exports = router;
