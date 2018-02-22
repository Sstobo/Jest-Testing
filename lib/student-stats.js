const fetch = require('node-fetch');

module.exports = {
  async getPassingStudentsOverAge(age) {
    // const getPassingStudentsOverAge = (age) => {
    fetch(' http://localhost:3000/students')
      .then(res => res.json())
      .then((body) => {
        const oldStudents = body.filter(student =>
          student.age > age &&
						student.project1 === 'pass' &&
						student.project2 === 'pass' &&
						student.project3 === 'pass' &&
						student.project4 === 'pass');
        return oldStudents;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
