/*--------------------------------------------------
 *
 *  Task Master
 * 
 *  Task Manager For Software Development
 * 
 *  Version : 1.0
 *  Author  : Ariyanto
 *  E-mail  : neonerdy@gmail.com
 * 
 *  © 2019, Under Apache Licence  
 * 
 *--------------------------------------------------
 */

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Login } from './Login';
import { Dashboard } from './Dashboard';
import { Employee } from './Employee';
import { AddEmployee } from './AddEmployee';
import { EmployeeDetail } from './EmployeeDetail';
import { Leave } from './Leave';
import { Atendance, Attendance } from './Attendance';


class App extends Component {
  render() {
    return (
      <div>
            
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/employee" component={Employee}/>
          <Route exact path="/attendance" component={Attendance}/>
          <Route exact path="/leave" component={Leave}/>
          <Route exact path="/add-employee" component={AddEmployee}/>
          <Route exact path="/employee-detail/:id" component={EmployeeDetail}/>
         
      </div>
    );
  }
}

export default App;
