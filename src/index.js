import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class EmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8100/employees')
      .then(res => {
        this.setState({
          employees: res.data,
        });
      })
  }

  render() {
    return (
      <div>
        <h2>Member Details...</h2>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Location</th>
              <th>Referrer</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map(emp => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.phone}</td>
                <td>{emp.location}</td>
                <td>{emp.referrer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

ReactDOM.render(
  <EmployeeComponent />,
  document.getElementById("root")
);