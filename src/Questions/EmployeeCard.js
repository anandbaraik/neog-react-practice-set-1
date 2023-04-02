export function EmployeeCard({employees}) {
    console.log(employees);
    return(
        <div>
            <h3>Employee Card</h3>
            <ul style={{listStyle: "none"}}>
                {
                    employees.map(({designation, id, name, workExperience}) => {
                        return (
                            <li key={id}>
                                Name : {name} |
                                <span style={{ color: "green" }}>
                                    &nbsp;Designation : {designation}
                                </span> |
                                <span style={{ color: "blue" }}>
                                &nbsp;Experience : {workExperience}
                                </span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}