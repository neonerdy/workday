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
import { People } from './People';
import { AddPeople } from './AddPeople';
import { AddTask } from './AddTask';





class App extends Component {
  render() {
    return (
      <div>
          
            
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/people" component={People}/>
          <Route exact path="/add-people" component={AddTask}/>
          
          
          
         
      </div>
    );
  }
}

export default App;
