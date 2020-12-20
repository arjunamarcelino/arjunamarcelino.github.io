import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
 

class Employee extends React.Component{
  constructor(props){
    super(props);
    this.state={
      updatedSalary:null
    };
  }

  getUpdatedSalary=(salary)=>{
    this.setState({updatedSalary:salary});
  }

  render(){
    return <div>
      <h2>Employee details ...</h2>
      <p>
        <label>Employee ID : <b>{this.props.Id}</b></label>
      </p>
      <p>
       <label>Nama : <b>{this.props.Name}</b></label>
      </p>
      <p>
       <label>Location : <b>{this.props.Location}</b></label>
      </p>
      <p>
       <label>Salary : <b>{this.props.Salary}</b></label>
      </p>
      <p>
       <label>Updayed Salary : <b>{this.state.updatedSalary}</b></label>
      </p>
      <Salary BasicSalary={this.props.BasicSalary} HRA={this.props.HRA}
        SpecialAllowance={this.props.SpecialAllowance} onSalaryChanged={this.getUpdatedSalary}></Salary>
    </div>
  }
}

class Salary extends React.Component{
  constructor(props){
    super(props);
    this.state={
      basic:this.props.BasicSalary,
      hra:this.props.HRA,
      sa:this.props.SpecialAllowance
    };
  }
  
  updateSalary=()=>{
    let salary= parseInt(this.refs.basic.value)+parseInt(this.refs.hra.value)+
                parseInt(this.refs.sa.value);

    this.props.onSalaryChanged(salary);
  }
  render(){
    return <div>
      <h2>Salary details ...</h2>
      <p>
        <label>Basic : <input type="text" ref ="basic" defaultValue={this.state.basic}></input></label>
      </p>
      <p>
       <label>HRA : <input type="text" ref ="hra" defaultValue={this.state.hra}></input></label>
      </p>
      <p>
       <label>Special Allowance : <input type="text" ref ="sa" defaultValue={this.state.sa}></input></label>
      </p>
      <button onClick={this.updateSalary}>Update</button>
    </div>
  }
}

const element=<Employee Id="101" Name="arjuna" Location="Jkt"
                        Salary="60000" BasicSalary="250000" HRA="1000"
                        SpecialAllowance="150000"></Employee>

ReactDOM.render(element,document.getElementById("root"));

// class CountChar extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       message:'',
//       counter:10
//     };
//   }

//   onMessageChange(text){
//     this.setState({
//       message:'Message has '+text.length+'number of Char'
//     });
//   }

//   render(){
//     return <div>
//       <h2>Welcome ye</h2>
//       <p>
//         <label>Enter message  : <input type="text" onChange={e=>this.onMessageChange(e.target.value)}></input></label>
//       </p>
//       <p>
//         <label>{this.state.message}</label>
//       </p>
//       <p>
//         <label>{this.state.counter}</label>
//       </p>
//     </div>
//   }
// }
// class Employee extends React.Component{
//   state={counter:0};
//   addEmployee=()=>{
//     this.setState({counter:this.state.counter+1});
//     // this.counter=this.counter+1;
//     // alert("nambah");
//     // alert('sudah diklik'+this.counter);
//   }
//   render(){
//     return <div>
//       <h2>Welcome to arjuna...</h2>
//       <p>
//         <button onClick={this.addEmployee}>Add arjuna</button>
//       </p>
//       <p>
//         <label>sudah ditekan :<b>{this.state.counter}</b> times</label>
//       </p>
//     </div>
//   }
// }

// const element=<CountChar></CountChar>
// ReactDOM.render(element,document.getElementById("root"));
// class Employee extends React.Component{
//   constructor(props){
//     super(props);
//     console.log(this.props);
//   }
//   render(){
//     return <div>
//       <h2>Employee details ...</h2>
//       <p>
//         <label>Employee ID : <b>{this.props.Id}</b></label>
//       </p>
//       <p>
//        <label>Nama : <b>{this.props.Name}</b></label>
//       </p>
//       <p>
//        <label>Location : <b>{this.props.Location}</b></label>
//       </p>
//       <p>
//        <label>Salary : <b>{this.props.Salary}</b></label>
//       </p>
//       <Department deptName={this.props.deptName}
//               headName = {this.props.headName}></Department>
//     </div>
//   }
// }

// class Department extends React.Component{
//   render(){
//     return <div>
//       <h2>Department Details...</h2>
//       <p>
//         <label>Dept Name is : <b>{this.props.deptName}</b></label>
//       </p>
//       <p>
//         <label>Dept Head is : <b>{this.props.headName}</b></label>
//       </p>
//     </div>;
//   }  
// }

// const element = <Employee Id ="101" Name="Pragim" Location="Jakarta"
//   Salary="12345" deptName="dac" headName="apa"></Employee>

//   ReactDOM.render(element,document.getElementById("root"));

// var DisplayEmployeeInfo=(employee)=>{
//   return <div>
//     <h1>Employee details...</h1>
//     <p>
//       <label>Id : <b>{employee.Id}</b></label>
//     </p>
//     <p>
//       <label>Nama : <b>{employee.Name}</b></label>
//     </p>
//     <p>
//       <label>Location : <b>{employee.Location}</b></label>
//     </p>
//     <p>
//       <label>Salary : <b>{employee.Salary}</b></label>
//     </p>
//     <Department deptName={employee.deptName} headName={employee.headName}></Department>
//   </div>;
// }

// const Department=(deptInfo)=>{
//   return <div><p>Dept Name is : <b>{deptInfo.deptName}</b></p>
//   <p>Dept Head is : <b>{deptInfo.headName}</b></p></div>;
// }

// const element=<DisplayEmployeeInfo Id ="101" Name="Pragim" Location="Jakarta"
//   Salary="12345" deptName="UI dev" headName="Pragim Tech"></DisplayEmployeeInfo>

//   ReactDOM.render(element,document.getElementById("root"));
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const element=React.createElement("h1",null,"Welcoome to arjuna...");

// ReactDOM.render(element,document/getElementById("root"));

// const element=React.createElement("div",{className:"testClass"},
// React.createElement("h1",null,"Aku arjuna"),
// React.createElement("h1",null,"kenalan yuk"));

// ReactDOM.render(element,document.getElementById("root"));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// const element=<h1 className="testClass">Welcome to Arjuna Website...</h1>

// ReactDOM.render(element,document.getElementById("root"));

// const newElement=<h1 className="testClass">Kenalan YUk!!!!!</h1>

// ReactDOM.render(newElement,document.getElementById("app"));

// const element =(
//   <div className="testClass">
//     <h1> Welcome to arjuna...</h1>
//     <h1> yuk kenalan ....</h1>
//   </div>
// )

// ReactDOM.render(element,document.getElementById("root"));
