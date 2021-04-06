
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
import { EmployeeDetail } from './EmployeeDetail';
import { Leave } from './Leave';
import { Attendance } from './Attendance';


class App extends Component {
  render() {
    return (
      <div>
            
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/employee" component={Employee}/>
          <Route exact path="/attendance" component={Attendance}/>
          <Route exact path="/leave" component={Leave}/>
          <Route exact path="/add-employee" component={EmployeeAdd}/>
          <Route exact path="/employee-detail/:id" component={EmployeeDetail}/>
         
      </div>
    );
  }
}

export default App;
