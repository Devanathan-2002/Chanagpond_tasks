import React, { Component } from 'react';

class EmpDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [
                { empid: 1, empname: 'John Doe', emppost: 'Manager', empsal: 50000, empcontact: '123-456-7890', empaddress: '123 Main St, City' },
                { empid: 2, empname: 'Jane Smith', emppost: 'Developer', empsal: 40000, empcontact: '234-567-8901', empaddress: '456 Oak St, City' },
                { empid: 3, empname: 'Mark Taylor', emppost: 'Designer', empsal: 35000, empcontact: '345-678-9012', empaddress: '789 Pine St, City' },
                { empid: 4, empname: 'Emily Davis', emppost: 'HR', empsal: 45000, empcontact: '456-789-0123', empaddress: '101 Maple St, City' },
                { empid: 5, empname: 'Michael Brown', emppost: 'Developer', empsal: 42000, empcontact: '567-890-1234', empaddress: '202 Birch St, City' },
                { empid: 6, empname: 'Sarah Wilson', emppost: 'QA', empsal: 38000, empcontact: '678-901-2345', empaddress: '303 Cedar St, City' },
                { empid: 7, empname: 'David Lee', emppost: 'Manager', empsal: 50000, empcontact: '789-012-3456', empaddress: '404 Elm St, City' },
                { empid: 8, empname: 'Laura Martinez', emppost: 'Developer', empsal: 43000, empcontact: '890-123-4567', empaddress: '505 Pine St, City' },
                { empid: 9, empname: 'James White', emppost: 'Designer', empsal: 36000, empcontact: '901-234-5678', empaddress: '606 Oak St, City' },
                { empid: 10, empname: 'Olivia Harris', emppost: 'HR', empsal: 46000, empcontact: '012-345-6789', empaddress: '707 Cedar St, City' }
            ]
        };
    }

    render() {
        return (
            <div>
                <h2>Employee Details</h2>
                <table border="1" style={{ width: '100%', marginTop: '20px', textAlign: 'left' }}>
                    <thead>
                        <tr>
                            <th>Employee ID</th>
                            <th>Employee Name</th>
                            <th>Post</th>
                            <th>Salary</th>
                            <th>Contact</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map((employee) => (
                            <tr key={employee.empid}>
                                <td>{employee.empid}</td>
                                <td>{employee.empname}</td>
                                <td>{employee.emppost}</td>
                                <td>{employee.empsal}</td>
                                <td>{employee.empcontact}</td>
                                <td>{employee.empaddress}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default EmpDetails;



