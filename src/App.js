
/*--------------------------------------------------
 *
 *  Workday - HRIS and Payroll System
 * 
 *  Version : 1.0
 *  Author  : Ariyanto
 *  E-mail  : neonerdy@gmail.com
 * 
 *  © 2021, All Right Reserved  
 * 
 *--------------------------------------------------
 */

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Login } from './Login';
import { Dashboard } from './Dashboard/Dashboard';
import { MasterData } from './Master/MasterData';
import { Employee } from './Employee/Employee';
import { EmployeeAdd } from './Employee/EmployeeAdd';
import { EmployeeEdit } from './Employee/EmployeeEdit';
import { EmployeeDetail } from './Employee/EmployeeDetail';
import { Leave } from './Leave/Leave';
import { LeaveAdd } from './Leave/LeaveAdd';
import { LeaveEdit } from './Leave/LeaveEdit';
import { Attendance } from './Attendance/Attendance';
import { AttendanceAdd } from './Attendance/AttendanceAdd';
import { AttendanceEdit } from './Attendance/AttendanceEdit';

import { BranchAdd } from './Master/BranchAdd';
import { BranchEdit} from './Master/BranchEdit';
import { DepartmentAdd } from './Master/DepartmentAdd';
import { DepartmentEdit } from './Master/DepartmentEdit';



class App extends Component {
  render() {
    return (
      <div>
            
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/master-data" component={MasterData}/>

          <Route exact path="/add-branch" component={BranchAdd}/>
          <Route exact path="/edit-branch/:id" component={BranchEdit}/>
          <Route exact path="/add-department" component={DepartmentAdd}/>
          <Route exact path="/edit-department/:id" component={DepartmentEdit}/>
          
          <Route exact path="/employee" component={Employee}/>
          <Route exact path="/attendance" component={Attendance}/>
          <Route exact path="/add-attendance" component={AttendanceAdd}/>
          <Route exact path="/edit-attendance/:id" component={AttendanceEdit}/>
          <Route exact path="/leave" component={Leave}/>
          <Route exact path="/add-leave" component={LeaveAdd}/>
          <Route exact path="/edit-leave/:id" component={LeaveEdit}/>
          <Route exact path="/add-employee" component={EmployeeAdd}/>
          <Route exact path="/edit-employee/:id" component={EmployeeEdit}/>
          <Route exact path="/employee-detail/:id" component={EmployeeDetail}/>
         
      </div>
    );
  }
}

export default App;
