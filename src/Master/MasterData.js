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
 import { AddBranch } from './AddBranch';
 import { SalaryComponentAdd } from './SalaryComponentAdd';
 import { SalaryComponentEdit } from './SalaryComponentEdit';
import { LeaveTypeAdd } from './LeaveTypeAdd';
import { LeaveTypeEdit } from './LeaveTypeEdit';



 export class MasterData extends Component
 {
     constructor(props) {
         super(props);
         
         this.state = {
            branches: [],
            departments: [],
            jobTitles: [],
            leaveTypes: [],
            salaryComponents: [],
            claims: [],
            workSchedules: [],
            users: [],
            settings: [],

            id: '',
            componentName: '',
            componentType: '',
            occurance: '',
            amount: '',

            leaveTypeName: '',
            daysGiven: '',
            isDeduction: '',
            note: '',

        }
     }
 
 
     componentDidMount() {
        
        this.getAllBranches();
        this.getAllDepartments();
        this.getAllJobTitles();      
        this.getAllLeaveTypes();   
        this.getAllSalaryComponents();    
        this.getAllWorkSchedules();
     }

     onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
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

    getAllSalaryComponents = () => {
        axios.get(config.serverUrl + "/api/salarycomponent/getall").then(response=> {
            this.setState({
                salaryComponents: response.data
            })
        })
    }


    getAllWorkSchedules = () => {
        axios.get(config.serverUrl + "/api/workschedule/getall").then(response=> {
            this.setState({
                workSchedules: response.data
            })
        })
    }





    addBranch = () => {
        this.props.history.push("/add-branch");
    }

    editBranch = (id) => {
        this.props.history.push("/edit-branch/" + id);
    }

    addDepartment = () => {
        this.props.history.push("/add-department");
    }

    editDepartment = (id) => {
        this.props.history.push("/edit-department/" + id);
    }

    addJobTitle = () => {
        this.props.history.push("/add-jobtitle");
    }

    editJobTitle = (id) => {
        this.props.history.push("/edit-jobtitle/" + id);
    }

    addWorkSchedule = () => {
        this.props.history.push("/add-workschedule");
    }

    editWorkSchedule = (id) => {
        this.props.history.push("/edit-workschedule/" + id);
    }


   
    //Salary Component

    saveSalaryComponent = () => {

        let salaryComponenet = {
            componentName: this.state.componentName,
            componentType: this.state.componentType,
            occurance: this.state.occurance,
            amount: parseFloat(this.state.amount)
        }

        console.log("amount=" + salaryComponenet.amount)


        axios.post(config.serverUrl + "/api/salarycomponent/save", salaryComponenet).then(response=> {
            this.closeSalaryComponent();
            this.getAllSalaryComponents();
        })

    }


    editSalaryComponent = (id) => {

        axios.get(config.serverUrl + "/api/salarycomponent/getbyid/" + id).then(response=> {
            this.setState({
                id: response.data.id,
                componentName: response.data.componentName,
                componentType: response.data.componentType,
                occurance: response.data.occurance,
                amount: parseFloat(response.data.amount)
            })
        })
    }



    updateSalaryComponent = () => {

        let salaryComponenet = {
            id: this.state.id,
            componentName: this.state.componentName,
            componentType: this.state.componentType,
            occurance: this.state.occurance,
            amount: this.state.amount
        }

        axios.put(config.serverUrl + "/api/salarycomponent/update", salaryComponenet).then(response=> {
            this.closeSalaryComponent();
            this.getAllSalaryComponents();
        })

    }

   
    deleteSalaryComponent = (id) => {

        axios.delete(config.serverUrl + "/api/salarycomponent/delete/" + id).then(response=> {
            this.getAllSalaryComponents();
         })
      }
 

      getSalaryComponentId = (id) => {
         this.setState({
             id: id,
         })
     }

     closeSalaryComponent = ()=> {
         this.setState({
            id: '',
            componentName: '',
            componentType: '',
            occurance: '',
            amount: ''
         })
     }



    //Leave Type

    saveLeaveType = () => {

        let leaveType = {
            leaveTypeName: this.state.leaveTypeName,
            daysGiven: this.state.daysGiven,
            isDeduction: this.state.isDeduction,
            note: this.state.note,
        }

        axios.post(config.serverUrl + "/api/leavetype/save", leaveType).then(response=> {
            this.clearLeaveType();
            this.getAllLeaveTypes();
        })

    }


    editLeaveType = (id) => {

        axios.get(config.serverUrl + "/api/leavetype/getbyid/" + id).then(response=> {
            this.setState({
                id: response.data.id,
                leaveTypeName: response.data.leaveTypeName,
                daysGiven: response.data.daysGiven,
                isDeduction: response.data.isDeduction,
                note: response.data.note
            })

            console.log("name=" + this.state.leaveTypeName)
        })
    }



    updateLeaveType = () => {

        let leaveType = {
            id: this.state.id,
            leaveTypeName: this.state.leaveTypeName,
            daysGiven: this.state.daysGiven,
            isDeduction: this.state.isDeduction,
            note: this.state.note,
        }

        axios.put(config.serverUrl + "/api/leavetype/update", leaveType).then(response=> {
            this.clearLeaveType();
            this.getAllLeaveTypes();
        })

    }

   
    deleteLeaveType = (id) => {

        axios.delete(config.serverUrl + "/api/leavetype/delete/" + id).then(response=> {
            this.getAllLeaveTypes();
         })
      }
 

      getLeaveTypeId = (id) => {
         this.setState({
             id: id,
         })
     }

     clearLeaveType = ()=> {
         this.setState({
            id: '',
            leaveTypeName: '',
            daysGiven: '',
            isDeduction: '',
            note: ''
         })
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
                            <li><a href="#" data-toggle="modal" data-target="#addBranch">Branch</a></li>
                            <li><a href="#" onClick={this.addDepartment}>Department</a></li>
                            <li><a href="#" onClick={this.addJobTitle}>Job Title</a></li>
                            <li><a href="#" data-toggle="modal" data-target="#addLeaveType">Leave Type</a></li>
                            <li><a href="#" data-toggle="modal" data-target="#addSalaryComponent">Salary Component</a></li>
                            
                            <li><a href="#" onClick={this.addWorkSchedule}>Work Schedule</a></li>

                        </ul>
                    </div>
                 </ol>
                 </section>
                 <br></br>
 
                 <section class="content">


                 <div id="deleteLeavType" class="modal fade">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 class="modal-title">Delete Leave Type</h4>
                            </div>
                            <div class="modal-body">
                                Are you sure want to delete this leave type?
                            </div>
                            
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-danger" onClick={()=>this.deleteLeaveType(this.state.id)} 
                                        data-dismiss="modal">Yes</button>
                            </div>
                        </div>
                    </div>
                </div>


                 <div id="deleteSalaryComponent" class="modal fade">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 class="modal-title">Delete Salary Component</h4>
                            </div>
                            <div class="modal-body">
                                Are you sure want to delete this salary component?
                            </div>
                            
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default pull-left"  data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-danger" onClick={()=>this.deleteSalaryComponent(this.state.id)} 
                                        data-dismiss="modal">Yes</button>
                            </div>
                        </div>
                    </div>
                </div>



                     <AddBranch
                       onValueChange = {this.onValueChange}
                     />

                     <LeaveTypeAdd
                        leaveTypeName = {this.state.leaveTypeName}
                        daysGiven = {this.state.daysGiven}
                        isDeduction = {this.state.isDeduction}
                        note = {this.state.note}
                        clearLeaveType = {this.clearLeaveType}
                        saveLeaveType = {this.saveLeaveType}
                        onValueChange = {this.onValueChange}
                     />

                     <LeaveTypeEdit
                        leaveTypeName = {this.state.leaveTypeName}
                        daysGiven = {this.state.daysGiven}
                        isDeduction = {this.state.isDeduction}
                        note = {this.state.note}
                        clearLeaveType = {this.clearLeaveType}
                        updateLeaveType = {this.updateLeaveType}
                        onValueChange = {this.onValueChange}
                     />



                    <SalaryComponentAdd
                       componentName = {this.state.componentName}
                       componentType = {this.state.componentType}
                       occurance = {this.state.occurance}
                       amount = {this.state.amount}
                       saveSalaryComponent = {this.saveSalaryComponent}
                       onValueChange = {this.onValueChange}
                       closeSalaryComponent = {this.closeSalaryComponent}
                     />

                     <SalaryComponentEdit
                       componentName = {this.state.componentName}
                       componentType = {this.state.componentType}
                       occurance = {this.state.occurance}
                       amount = {this.state.amount}
                       updateSalaryComponent = {this.updateSalaryComponent}
                       onValueChange = {this.onValueChange}
                       closeSalaryComponent = {this.closeSalaryComponent}
                     />

 
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
                                                            <i class="fa fa-edit" style={{color:'black'}} onClick={()=>this.editBranch(jt.id)}></i>&nbsp;
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
                                                            <i class="fa fa-edit" style={{color:'black'}} onClick={()=>this.editDepartment(d.id)}></i>&nbsp;
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
                                                       <i class="fa fa-edit" style={{color:'black'}} onClick={()=>this.editJobTitle(j.id)}></i>&nbsp;
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
                                                        <i class="fa fa-edit" style={{color:'black'}}
                                                            onClick={()=>this.editLeaveType(lt.id)} 
                                                            data-toggle="modal" data-target="#editLeaveType"></i>&nbsp;
                                                            
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
                                <li class="active"><a href="#lsalaryComponent-tab" data-toggle="tab" aria-expanded="true">Salary Component</a></li>
                                <li class=""><a href="#claim-tab" data-toggle="tab" aria-expanded="false">Claim</a></li>
                                
                                <li class="pull-left header">Finance</li>
                                    
                                </ul>
                                <div class="tab-content no-padding">

                                    <div class="chart tab-pane active" id="salaryComponent-tab">

                                    <Scrollbars style={{ height: 310 }}>
                                        <ul class="todo-list ui-sortable">
                                            {this.state.salaryComponents.map(sc=> 
                                                <li>
                                                    <span class="text">{sc.componentName}</span>
                                                    <div class="tools">
                                                    <i class="fa fa-edit" style={{color:'black'}} 
                                                        onClick={()=>this.editSalaryComponent(sc.id)} 
                                                        data-toggle="modal" data-target="#editSalaryComponent"></i>&nbsp;
                                                    
                                                    <i class="fa fa-trash-o" 
                                                        onClick={()=>this.getSalaryComponentId(sc.id)}
                                                        data-toggle="modal" data-target="#deleteSalaryComponent"
                                                        style={{color:'black'}}></i>
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
                                            {this.state.workSchedules.map(ws=> 
                                                <li>
                                                    <span class="text">{ws.scheduleName} ( {ws.scheduleIn} - {ws.scheduleOut} )</span>
                                                    <div class="tools">
                                                        <i class="fa fa-edit" style={{color:'black'}} onClick={()=>this.editWorkSchedule(ws.id)}></i>&nbsp;
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