const students = require('../data/students.json');

const getStudents = () => {
  return students;
};

module.exports = { getStudents };
