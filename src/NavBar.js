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
import React, {Component} from 'react';
import {Link,NavLink} from 'react-router-dom';

export class NavBar extends Component {

  

  statusClick =(status)=> {
    alert(status);
  }


    render() {



        return(

            <aside class="main-sidebar">
            <section class="sidebar">


            
              <ul class="sidebar-menu" data-widget="tree">
            
           
                <li class="header">MAIN NAVIGATION</li>
             
                <li>
                  <Link to="/dashboard">
                      <i class="fa fa-desktop"></i>
                      <span>Dashboard</span>
                  </Link>
                </li>

                <li>
                  <Link to="/dashboard">
                      <i class="fa fa-desktop"></i>
                      <span>Master Data</span>
                  </Link>
                </li>

                <li>
                  <Link to="/employee">
                    <i class="fa fa-user"></i>
                    <span>Employee</span>
                  </Link>
                </li>

                <li>
                  <Link to="/attendance">
                    <i class="fa fa-clock-o"></i>
                    <span>Attendance</span>
                  </Link>
                </li>

                <li>
                  <Link to="/leave">
                    <i class="fa fa-plane"></i>
                    <span>Leave</span>
                  </Link>
                </li>

                <li>
                  <Link to="/overtime">
                    <i class="fa fa-hourglass-o"></i>
                    <span>Overtime</span>
                  </Link>
                </li>

                <li>
                  <Link to="/claim">
                    <i class="fa fa-dollar"></i>
                    <span>Claim</span>
                  </Link>
                </li>

                <li>
                  <Link to="/payroll">
                    <i class="fa fa-file-o"></i>
                    <span>Payroll</span>
                  </Link>
                </li>

                <li>
                  <Link to="/calendar">
                    <i class="fa fa-calendar-o"></i>
                    <span>Calendar</span>
                   
                  </Link>
                </li>    

                 <li>
                  <Link to="/file">
                    <i class="fa fa-files-o"></i>
                    <span>Files</span>
                   
                  </Link>
                </li>                   
           

       
              </ul>
            </section>
          </aside>

        )
    }
}