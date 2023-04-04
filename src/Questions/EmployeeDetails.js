import React from 'react'

const employees = [
    {
      name: "Jack Smith",
      level: 2,
      dept: "Tech",
      designation: "Manager",
      salary: 24000,
    },
    {
      name: "Mary Robbins",
      level: 3,
      dept: "Fin",
      designation: "Manager",
      salary: 28000,
    },
    {
      name: "Steve Williams",
      level: 4,
      dept: "Ops",
      designation: "President",
      salary: 35000,
    },
    {
      name: "Bob Andrews",
      level: 1,
      dept: "Fin",
      designation: "Trainee",
      salary: 16500,
    },
    {
      name: "Dave Martin",
      level: 2,
      dept: "Fin",
      designation: "Manager",
      salary: 21700,
    },
    {
      name: "Julia Clarke",
      level: 3,
      dept: "Ops",
      designation: "Manager",
      salary: 26900,
    },
    {
      name: "Kathy Jones",
      level: 4,
      dept: "Tech",
      designation: "President",
      salary: 42500,
    },
    {
      name: "Tom Bresnan",
      level: 2,
      dept: "Tech",
      designation: "Manager",
      salary: 22200,
    },
  ];

const totalSalary = employees.reduce((sum, { salary }) => sum + salary, 0);

const EmployeeDetails = () => {
  return (
    <div>
        <h2>Employee Details</h2>
        <ul>
            {
                employees.map(({name, level, dept, designation, salary}) => {
                    return (
                        <li key={name} style={{
                            backgroundColor: `${(level == 2) && 'orange'}`,
                            border: `${(designation == 'President') && '2px solid green'}`,
                            padding: "1rem",
                            margin: "0.8rem"
                        }}>
                         name: {name}, level: {level}, dept: {dept}, designation: {designation}, salary: {salary}
                        </li>
                    )
                })
            }
        </ul>
        <h4>Total Salary Expense: {totalSalary}</h4>
    </div>
  )
}

export default EmployeeDetails