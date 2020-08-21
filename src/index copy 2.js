import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function Employee(props) {
  return <div style={{ border: "3px solid blue" }}>
    <p>
      <label>Employee ID : <b>{props.data.Id}</b></label>
    </p>
    <p>
      <label>Employee Name : <b>{props.data.Name}</b></label>
    </p>
    <p>
      <label>Employee Location : <b>{props.data.Location}</b></label>
    </p>
    <p>
      <label>Employee Salary : <b>{props.data.Salary}</b></label>
    </p>
  </div>
}

function DisplayEmployees(props) {
  const empList = props.employeeList;

  const listElements = empList.map((emp) =>
    <Employee key={emp.Id} data={emp} />
  );

  return (
    <div>
      {listElements}
    </div>
  );
}

const employees = [
  { Id: 101, Name: "Jenny", Location: "Dallas", Salary: 12000 },
  { Id: 102, Name: "Joanne", Location: "Houston", Salary: 1400 },
  { Id: 103, Name: "Jill", Location: "Austin", Salary: 12000 },
  { Id: 104, Name: "Jane", Location: "Austin", Salary: 13000 },
  { Id: 105, Name: "Jeena", Location: "Dallas", Salary: 15000 },
];

const employeeContext = React.createContext({
  data: {},
  changeEmployeeInfo: () => { },
});

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data: {
//         Id: 101,
//         Name: "Jenny",
//         Location: "Texas",
//         Salary: 15000,
//       },
//       changeEmployeeInfo: this.updateEmployeeDetails,
//     };
//   }

//   updateEmployeeDetails = () => {
//     this.setState({ data: { Id: 102 } });
//   };

//   render() {
//     console.log('state>>>', this.state)
//     return <div>
//       <h1>App Component...</h1>
//       <p>
//         <label>Employee ID : <b>{this.state.data.Id}</b></label>
//       </p>
//       <employeeContext.Provider value={this.state}>
//         <Employee />
//       </employeeContext.Provider>
//     </div>
//   }
// }

// class Employee extends Component {
//   static contextType = employeeContext;

//   render() {
//     return <div>
//       <h2>Employee Component...</h2>
//       <p>
//         <label>Employee ID : <b>{this.context.data.Id}</b></label>
//       </p>
//       <button onClick={this.context.changeEmployeeInfo}>Update</button>
//       <Salary />
//     </div >
//   }
// }

// class Salary extends Component {
//   static contextType = employeeContext;
//   render() {
//     return <div>
//       <h2>Salary Details...</h2>
//       <p>
//         <label>Employee ID : <b>{this.context.data.Id}</b></label>
//       </p>
//     </div>
//   }
// }

ReactDOM.render(
  <DisplayEmployees employeeList={employees} />,
  document.getElementById("root")
);