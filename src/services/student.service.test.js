const { getStudents } = require('./student.service');

describe('get students', () => {
  it('Should return 5 students', () => {
    const students = getStudents();

    expect(students).toHaveLength(5);
  });

  it('Should return a student named "Eusebio Ajax"', () => {
    const students = getStudents();

    expect(students).toEqual(
      expect.arrayContaining([expect.objectContaining({ name: 'Eusebio Aja' })])
    );
  });
});
