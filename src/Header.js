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
import {Link} from 'react-router-dom';
import axios from 'axios';
import config from './Config';
import moment from 'moment';


export class Header extends Component {


    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            histories: [],
            activeProjectId: ''
        }
    }

    componentDidMount() {
 
    }


   



        
    

    render() {

        let url = "/task-detail/";
    
        return(

        <header class="main-header">

            <a class="logo">
            <span class="logo-mini">WD</span>
            <span class="logo-lg"><b>Work</b>DAY</span>
            </a>

            <nav class="navbar navbar-static-top">

                <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
                <span class="sr-only">Toggle navigation</span>
            </a>

           <div class="navbar-custom-menu">
            
             <ul class="nav navbar-nav">
                        

                    <li class="dropdown messages-menu">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                        <i class="fa fa-bell-o"></i>
                        <span class="label label-danger">{this.state.histories.length}</span>
                        </a>
                        <ul class="dropdown-menu">
                        <li class="header">You have {this.state.histories.length} notifications</li>
                        <li>
                            <ul class="menu">
                                {this.state.histories.map(h=> 
                                <li>
                                    <a href="#">
                                    <div class="pull-left">
                                        {this.renderPhoto(h.userPhoto)}
                                    </div>
                                    <h4>
                                        {h.tracker}
                                        <small><i class="fa fa-clock-o"></i>&nbsp;{this.renderDate(h.date)}</small>
                                    </h4>
                                    <p>{h.user} {h.activityLog}</p>
                                    </a>
                                </li>
                                )}
                                
                           
                            </ul>
                        </li>
                        </ul>
                    </li>


                    <li class="dropdown tasks-menu">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                        <i class="fa fa-envelope-o"></i>
                        <span class="label label-success">{this.state.tasks.length}</span>
                        </a>
                        <ul class="dropdown-menu">
                        <li class="header">You have {this.state.tasks.length} tasks waiting</li>
                        <li>
                            <ul class="menu">
                            
                            {this.state.tasks.map(t=> 
                                <li>
                                    <a href="#">
                                    <h3>
                                        {this.renderMyTaskTitle(t)}
                                        <small class="pull-right">{Math.ceil((t.totalTimeSpentInHour/t.estimationInHour) * 100)}%</small>
                                    </h3>
                                    <div class="progress xs">
                                        {this.renderMyTaskProgress(t)}
                                    </div>
                                    </a>

                                </li>
                            )}

                          </ul>
                        </li>
                       
                        </ul>
                    </li>


                    <li class="dropdown user user-menu">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <img src="lib/dist/img/ari.jpg" class="user-image"/>
                                <span class="hidden-xs">Ariyanto</span>
                            </a>
                            <ul class="dropdown-menu">
                            <li class="user-header" style={{backgroundColor:'#dd4b39'}}>
                                
                                <p>
                                Ariyanto - Finance
                                <small>ariyanto@gmail.com</small>
                                </p>
                            </li>
                            
                            <li class="user-footer">
                              
                                <div class="pull-left">
                                    <a href="#" class="btn btn-default btn-flat" data-toggle="modal" data-target="#editPhoto">Change Photo</a>
                                </div>
                              
                                <div class="pull-right">
                                    <a href="#" onClick= {this.logout} class="btn btn-default btn-flat">Sign out</a>
                                </div>
                            </li>
                            </ul>
                        </li>

                        <li>
                        <a href="#" data-toggle="modal" data-target="#updateSetting"><i class="fa fa-gears"></i></a>
                    </li>


            
                </ul>
            
            </div>



    </nav>

</header>



         

      
        )
    }

}