import React from 'react'

const StudentDetails = ({student:{ name, subjects } }) => {
    const totalMarks = subjects.reduce((sum, { score }) => sum + score, 0);

    const getGrade = (grade) => {
        if (grade > 180) return "A";
        if (grade > 150) return "B";
        return "C";
    };
  return (
    <div>
        <h3>StudentDetails</h3>
        <p>Name: {name}</p>
        <ul>
            {
                subjects.map(({ subject, score }, index) => {
                return (
                    <li key={index}>
                        {subject}: {score}
                    </li>
                );
                })
            }
        </ul>
      <p>Total Marks: {totalMarks}</p>
      <p>Grade: {getGrade(totalMarks)}</p>
    </div>
  )
}

export default StudentDetails