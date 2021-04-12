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
 import { Footer } from '../Shared/Footer';
 import { Header } from '../Shared/Header';
 import { NavBar } from '../Shared/NavBar';
 import axios from 'axios';
 import config from '../Config'
 import { Scrollbars } from 'react-custom-scrollbars';

 export class MasterData extends Component
 {
     constructor(props) {
         super(props);
 
         this.state = {
            branches: [],
            departments: [],
            jobTitles: [],
            leaveTypes: [],
            claims: [],
            workSchedules: [],
            users: [],
            settings: []
        }
     }
 
 
     componentDidMount() {
        
        this.getAllBranches();
        this.getAllDepartments();
        this.getAllJobTitles();      
        this.getAllLeaveTypes();       
        
     }



    getAllBranches = () => {
        axios.get(config.serverUrl + "/api/branch/getall").then(response=> {
            this.setState({
                branches: response.data
            })
        });
    }


    getAllDepartments = () => {
        axios.get(config.serverUrl + "/api/department/getall").then(response=> {
            this.setState({
                departments: response.data
            })
        });
    }


    getAllJobTitles = () => {
        axios.get(config.serverUrl + "/api/jobtitle/getall").then(response=> {
            this.setState({
                jobTitles: response.data
            })
        });
    }



    getAllLeaveTypes = () => {
        axios.get(config.serverUrl + "/api/leavetype/getall").then(response=> {
            this.setState({
                leaveTypes: response.data
            })
        })
    }



    addBranch = () => {
        this.props.history.push("/add-branch");
    }

 
 
     render() {
 
         
         const heightStyle = {
             minHeight: '959.8px'
         }
 
         return(
 
             <div class="wrapper">
              
              <Header/>
              <NavBar/>
 
             
             <div class="content-wrapper" style={heightStyle}>
             
                 <section class="content-header">
                 <h1>
                     Master Data
                 </h1>
                 <ol class="breadcrumb">
                    <div class="btn-group">
                        <button class="btn btn-primary" type="button">Add Master Data</button>
                        <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
                            <span class="caret"></span>
                        
                        </button>
                        <ul class="dropdown-menu" role="menu">
                            <li><a href="#" onClick={this.addBranch}>Branch</a></li>
                            <li><a href="#">Department</a></li>
                            <li><a href="#">Job Title</a></li>
                        </ul>
                    </div>
                 </ol>
                 </section>
                 <br></br>
 
                 <section class="content">
 
                 <div class="row">
 
 
                    <div class="col-md-4">
 

                          <div class="nav-tabs-custom" >
                                <ul class="nav nav-tabs pull-right ui-sortable-handle">
                                <li class="active"><a href="#branch-tab" data-toggle="tab" aria-expanded="true">Branch</a></li>
                                <li class=""><a href="#department-tab" data-toggle="tab" aria-expanded="false">Department</a></li>
                                <li class=""><a href="#jobTitle-tab" data-toggle="tab" aria-expanded="false">Job Title</a></li>
                                <li class="pull-left header">Employee</li>
                            
                                </ul>
                                <div class="tab-content no-padding">

                                    <div class="chart tab-pane active" id="branch-tab">

                                        <Scrollbars style={{ height: 310 }}>
                                            <ul class="todo-list ui-sortable">
                                                {this.state.branches.map(jt=> 
                                                    <li>
                                                        <span class="text">{jt.branchName}</span>
                                                        <div class="tools">
                                                            <i class="fa fa-edit" style={{color:'black'}}></i>&nbsp;
                                                            <i class="fa fa-trash-o" style={{color:'black'}}></i>
                                                        </div>
                                                    </li>
                                                )}
                                            </ul>
                                        </Scrollbars>

                                    </div>


                                    <div class="chart tab-pane" id="department-tab">
                                   
                                        <Scrollbars style={{ height: 310 }}>
                                            <ul class="todo-list ui-sortable">
                                                {this.state.departments.map(d=> 
                                                    <li>
                                                        <span class="text">{d.departmentName}</span>
                                                        <div class="tools">
                                                            <i class="fa fa-edit" style={{color:'black'}}></i>&nbsp;
                                                            <i class="fa fa-trash-o" style={{color:'black'}}></i>
                                                        </div>
                                                    </li>
                                                )}
                                                
                                            </ul>
                                        </Scrollbars>

                                    </div>


                                    <div class="chart tab-pane" id="jobTitle-tab">
                                   
                                   <Scrollbars style={{ height: 310 }}>
                                       <ul class="todo-list ui-sortable">
                                           {this.state.jobTitles.map(j=> 
                                               <li>
                                                   <span class="text">{j.jobTitleName}</span>
                                                   <div class="tools">
                                                       <i class="fa fa-edit" style={{color:'black'}}></i>&nbsp;
                                                       <i class="fa fa-trash-o" style={{color:'black'}}></i>
                                                   </div>
                                               </li>
                                           )}
                                           
                                       </ul>
                                   </Scrollbars>

                               </div>
                                 
                                 </div>
                                </div>

                   
                     
                   </div>
 
                     <div class="col-md-4 col-sm-6 col-xs-12">
                        
                        


                        <div class="nav-tabs-custom" >
                                <ul class="nav nav-tabs pull-right ui-sortable-handle">
                                <li class="active"><a href="#leaveType-tab" data-toggle="tab" aria-expanded="true">Leave Type</a></li>
                                <li class=""><a href="#schedule-tab" data-toggle="tab" aria-expanded="false">Employee Leave</a></li>
                                
                                <li class="pull-left header">Leave</li>
                                    
                                </ul>
                                <div class="tab-content no-padding">

                                    <div class="chart tab-pane active" id="leaveType-tab">

                                    <Scrollbars style={{ height: 310 }}>
                                        <ul class="todo-list ui-sortable">
                                            {this.state.leaveTypes.map(lt=> 
                                                <li>
                                                    <span class="text">{lt.leaveTypeName}</span>
                                                    <div class="tools">
                                                        <i class="fa fa-edit" style={{color:'black'}}></i>&nbsp;
                                                        <i class="fa fa-trash-o" style={{color:'black'}}></i>
                                                    </div>
                                                </li>
                                            )}
                                            
                                        </ul>
                                    </Scrollbars>

                                    </div>


                                    <div class="chart tab-pane" id="schedule-tab">
                                        sales
                                    </div>
                                 </div>
                                </div>




 
                     </div>
 
 
 
 
 
                     <div class="col-md-4 col-sm-6 col-xs-12">
                      
                      
                        <div class="nav-tabs-custom" >
                                <ul class="nav nav-tabs pull-right ui-sortable-handle">
                                <li class="active"><a href="#leaveType-tab" data-toggle="tab" aria-expanded="true">Claim</a></li>
                                <li class=""><a href="#schedule-tab" data-toggle="tab" aria-expanded="false">Salary</a></li>
                                
                                <li class="pull-left header">Finance</li>
                                    
                                </ul>
                                <div class="tab-content no-padding">

                                    <div class="chart tab-pane active" id="leaveType-tab">

                                    <Scrollbars style={{ height: 310 }}>
                                        <ul class="todo-list ui-sortable">
                                            {this.state.claims.map(lt=> 
                                                <li>
                                                    <span>
                                                       <i class="fa fa-ellipsis-v"></i>
                                                    </span>
                                                    <span class="text"></span>
                                                    <div class="tools">
                                                        <i class="fa fa-edit"></i>
                                                        <i class="fa fa-trash-o"></i>
                                                    </div>
                                                </li>
                                            )}
                                            
                                        </ul>
                                    </Scrollbars>

                                    </div>


                                    <div class="chart tab-pane" id="schedule-tab">
                                        sales
                                    </div>
                                 </div>
                            </div>
                      
 
                     </div>
 
 
               
 
 
 
 
 
 
 
 
                 </div>
 

                <br/>


                <div class="row">
 
                    
                    <div class="col-md-4">



                        <div class="nav-tabs-custom" >
                                <ul class="nav nav-tabs pull-right ui-sortable-handle">
                                <li class="active"><a href="#schedule-tab" data-toggle="tab" aria-expanded="true">Work Schedule</a></li>
                                <li class="pull-left header">Attendance</li>
                            
                                </ul>
                                <div class="tab-content no-padding">

                                    <div class="chart tab-pane active" id="revenue-chart">

                                    <Scrollbars style={{ height: 310 }}>
                                        <ul class="todo-list ui-sortable">
                                            {this.state.workSchedules.map(jt=> 
                                                <li>
                                                    <span>
                                                        <i class="fa fa-ellipsis-v"></i>
                                                    </span>
                                                    <span class="text"></span>
                                                    <div class="tools">
                                                        <i class="fa fa-edit"></i>
                                                        <i class="fa fa-trash-o"></i>
                                                    </div>
                                                </li>
                                            )}

                                            
                                        </ul>
                                    </Scrollbars>

                                    </div>

                                </div>
                                </div>


                    
                    </div>

                    <div class="col-md-4 col-sm-6 col-xs-12">
                        
                        


                        <div class="nav-tabs-custom" >
                                <ul class="nav nav-tabs pull-right ui-sortable-handle">
                                <li class="active"><a href="#user-tab" data-toggle="tab" aria-expanded="true">User</a></li>
                                <li class=""><a href="#role-tab" data-toggle="tab" aria-expanded="false">Role</a></li>
                                <li class=""><a href="#roleAccess-tab" data-toggle="tab" aria-expanded="false">Role Access</a></li>
                                
                                
                                <li class="pull-left header">User</li>
                                    
                                </ul>
                                <div class="tab-content no-padding">

                                    <div class="chart tab-pane active" id="user-tab">

                                    <Scrollbars style={{ height: 310 }}>
                                        <ul class="todo-list ui-sortable">
                                            {this.state.users.map(lt=> 
                                                <li>
                                                    <span>
                                                        <i class="fa fa-ellipsis-v"></i>
                                                    </span>
                                                    <span class="text"></span>
                                                    <div class="tools">
                                                        <i class="fa fa-edit"></i>
                                                        <i class="fa fa-trash-o"></i>
                                                    </div>
                                                </li>
                                            )}
                                            
                                        </ul>
                                    </Scrollbars>

                                    </div>


                                    <div class="chart tab-pane" id="role-tab">
                                        sales
                                    </div>
                                </div>
                                </div>





                    </div>





                    <div class="col-md-4 col-sm-6 col-xs-12">
                    
                    
                        <div class="nav-tabs-custom" >
                                <ul class="nav nav-tabs pull-right ui-sortable-handle">
                                <li class="active"><a href="#setting-tab" data-toggle="tab" aria-expanded="true">Company</a></li>
                                <li class="pull-left header">Setting</li>
                                </ul>
                                
                                <div class="tab-content no-padding">

                                    <div class="chart tab-pane active" id="setting-tab">

                                    <Scrollbars style={{ height: 310 }}>
                                        <ul class="todo-list ui-sortable">
                                            {this.state.settings.map(lt=> 
                                                <li>
                                                    <span>
                                                        <i class="fa fa-ellipsis-v"></i>
                                                    </span>
                                                    <span class="text"></span>
                                                    <div class="tools">
                                                        <i class="fa fa-edit"></i>
                                                        <i class="fa fa-trash-o"></i>
                                                    </div>
                                                </li>
                                            )}
                                            
                                        </ul>
                                    </Scrollbars>

                                    </div>


                                    <div class="chart tab-pane" id="schedule-tab">
                                        sales
                                    </div>
                                </div>
                            </div>
                    

                    </div>











                    </div>



 
 
                 </section>
 
          
 
             </div>
             <Footer/>
 
             </div>
 
         )
     }
 
 }