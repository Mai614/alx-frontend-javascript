const getStudentIdsSum = (students) => {
  const all = students
    .map((student) => student.id)
    .reduce((studentPrev, studentCurrent) => studentPrev + studentCurrent, 0);

  return all;
};

export default getStudentIdsSum;
