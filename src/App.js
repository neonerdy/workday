
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
import { Dashboard } from './Dashboard';
import { Employee } from './Employee';
import { EmployeeAdd } from './EmployeeAdd';
import { EmployeeEdit } from './EmployeeEdit';
import { EmployeeDetail } from './EmployeeDetail';
import { Leave } from './Leave';
import { LeaveAdd } from './LeaveAdd';
import { LeaveEdit } from './LeaveEdit';
import { Attendance } from './Attendance';
import { AttendanceAdd } from './AttendanceAdd';
import { AttendanceEdit } from './AttendanceEdit';




class App extends Component {
  render() {
    return (
      <div>
            
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/dashboard" component={Dashboard}/>
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
