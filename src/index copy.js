import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

class Employee extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      updatedSalary: null,
    };
  }

  getUpdatedSalary = (salary) => {
    this.setState({
      updatedSalary: salary,
    })
  }

  render() {
    return <div>
      <h1>Employee Component...</h1>
      <p>
        <label>Id : <b>{this.props.Id}</b></label>
      </p>
      <p>
        <label>Name : <b>{this.props.Name}</b></label>
      </p>
      <p>
        <label>Location : <b>{this.props.Location}</b></label>
      </p>
      <p>
        <label>Total Salary : <b>{this.props.Salary}</b></label>
      </p>
      <p>
        <label>Updated Salary : <b>{this.state.updatedSalary}</b></label>
      </p>
      <Salary
        BasicSalary={this.props.BasicSalary}
        HRA={this.props.HRA}
        SpecialAllowance={this.props.SpecialAllowance}
        onSalaryChanged={this.getUpdatedSalary}
      />
    </div>
  }
}

class Salary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basic: this.props.BasicSalary,
      hra: this.props.HRA,
      sa: this.props.SpecialAllowance,
    };
  }

  updateSalary = () => {
    let salary = parseInt(this.refs.BasicSalary.value) +
      parseInt(this.refs.HRA.value) +
      parseInt(this.refs.SpecialAllowance.value);
    this.props.onSalaryChanged(salary);
  }

  render() {
    return <div>
      <h1>Salary Details...</h1>
      <p>
        <label>Basic Salary : </label>
        <input type="text" defaultValue={this.state.basic} ref="BasicSalary" />
      </p>
      <p>
        <label>HRA : </label>
        <input type="text" defaultValue={this.state.hra} ref="HRA" />
      </p>
      <p>
        <label>Special Allowance : </label>
        <input type="text" defaultValue={this.state.sa} ref="SpecialAllowance" />
      </p>
      <button onClick={this.updateSalary}>Update</button>
    </div>
  }
}

const e = <Employee
  Id="101"
  Name="Jenny"
  Location="Texas"
  Salary="50000"
  BasicSalary="25000"
  HRA="10000"
  SpecialAllowance="15000"
/>

ReactDOM.render(
  e,
  document.getElementById("root")
);