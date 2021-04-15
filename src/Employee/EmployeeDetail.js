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
import { Header } from '../Shared/Header';
import { NavBar } from '../Shared/NavBar';
import { Footer } from '../Shared/Footer';

import axios from 'axios';
import config from '../Config';
import moment from 'moment';
import { FamilyAdd } from './FamilyAdd';
import { FamilyEdit } from './FamilyEdit';



export class EmployeeDetail extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            employeeFamilies: [],
            id: '',
            employeeCode: '',
            employeeName: '',
            departmentName: '',
            jobTitleName: '',
            joinDate: '',
            employmentStatus: '',
            birthPlace: '',
            birthDate: '',
            religion: '',
            BloodType: '',
            maritalStatus: '',
            address: '',
            phone: '',
            email: '',
            employeeFamilyId: '',
            employeeId: '',
            familyName: '',
            familyRelationship: '',
            familyAddress: '',
            familyPhone: '' 

           
        }
    }


    componentDidMount() {

        let id = this.props.match.params.id;
        this.getEmployeeById(id);
        this.getEmployeeFamilies(id);
     
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    getEmployeeById = (id) => {
        axios.get(config.serverUrl + "/api/employee/getbyid/" + id).then(response=> {
            this.setState({
                id: response.data.id,
                employeeCode: response.data.employeeCode,
                employeeName: response.data.employeeName,
                departmentName: response.data.department.departmentName,
                jobTitleName: response.data.jobTitle.jobTitleName,
                joinDate: response.data.jobTitle.joinDate,
                employmentStatus: response.data.employmentStatus,
                birthDate: response.data.birthDate,
                birthPlace: response.data.birthPlace,
                religion: response.data.religion,
                bloodType: response.data.bloodType,
                maritalStatus: response.data.maritalStatus,
                address: response.data.address,
                phone: response.data.phone,
                email: response.data.email,
            })
      })
        
    }

    addEmployee =()=> {
        this.props.history.push("/add-employee");
    }

    editEmployee = (id) => {
        this.props.history.push("/edit-employee/" + id);
    }


    refreshEmployee = (id) => {

    }


    deleteEmployee = (id) => {
        axios.delete(config.serverUrl + "/api/employee/delete/" + id).then(response=> {
            this.closeBtn.current.click();
            this.props.history.push("/employee");
        })
    }

    updateStatus = (id, status) => {
        axios.get(config.serverUrl + "/api/employee/updatestatus/" + id + "/" + status).then(response=> {
            this.getEmployeeById(id);
        })
     }


     getEmployeeFamilies = (id) => {
        axios.get(config.serverUrl + "/api/employeefamily/getbyemployeeid/" + id).then(response=> {
            this.setState({ 
                employeeFamilies: response.data
            })
        })
    }


     saveFamily = () => {

        let employeeFamily = {
            employeeId: this.state.id,
            familyName: this.state.familyName,
            familyRelationship: this.state.familyRelationship,
            familyAddress: this.state.familyAddress,
            familyPhone: this.state.familyPhone    
        }

        console.log(employeeFamily);
       
        axios.post(config.serverUrl + "/api/employeefamily/save", employeeFamily).then(response=> {
            this.getEmployeeFamilies(this.state.id);
        })
       
     }


     editFamily = (id) =>{

        axios.get(config.serverUrl + "/api/employeefamily/getbyid/" + id).then(response=> {
            this.setState({
                employeeFamilyId: response.data.employeeFamilyId,
                employeeId: response.data.employeeId,
                familyName: response.data.familyName,
                familyRelationship: response.data.familyRelationship,
                familyAddress: response.data.familyAddress,
                familyPhone: response.data.familyPhone 
            })
        })

     }


     updateFamily = () => {

        let employeeFamily = {
            employeeFamilyId: this.state.employeeFamilyId,
            employeeId: this.state.id,
            familyName: this.state.familyName,
            familyRelationship: this.state.familyRelationship,
            familyAddress: this.state.familyAddress,
            familyPhone: this.state.familyPhone    
        }

        axios.put(config.serverUrl + "/api/employeefamily/update", employeeFamily).then(response=> {
           this.getEmployeeFamilies(this.state.id);
        })

     }


     deleteFamily = (id) => {

       axios.delete(config.serverUrl + "/api/employeefamily/delete/" + id).then(response=> {
           this.getEmployeeFamilies(this.state.id);
        })
     }

     getFamilyId = (id) => {
        this.setState({
            employeeFamilyId: id,
        })
    }




    openNewTab = (fileName)=> {
        window.open(fileName, '_blank');
    }


    renderStatus = (status) => {
        if (status == "Probation") {
            return(
                <i class="fa fa-circle-o text-red"></i>
            )
        }else if (status == "Contract") {
            return(
                <i class="fa fa-circle-o text-orange"></i>
            )
        } else if (status == "Permanent") {
            return(
                <i class="fa fa-circle-o text-green"></i>
            )
        }
      
    }


    renderNik = (employmentStatus, employeeCode) => {
        if (employmentStatus == 'Permanent') {
            return(
                <span class="label label-success"><b>{employeeCode}</b></span>
            )
        } else if (employmentStatus == 'Probation') {
            return(
                <span class="label label-danger"><b>{employeeCode}</b></span>
            )
        } else if (employmentStatus == "Contract") {
            return(
                <span class="label label-warning"><b>{employeeCode}</b></span>
            )
        }
        
    }



    

    render() {

        const heightStyle = {
            minHeight: '959.8px'
        }

        const buttonStyle = {
            height: '34px'
        }

        const fontStyle = {
            fontWeight: 'normal'
        }

        const popupStyle = {
            width: '800px'
        }

        const attachmentStyle = {
            width: '470px'
        }

        const modalStyle = {
            width: '500px'
        }

        const barStyle = {
            display: 'none',
        }

        let errStyle = {
            color: 'darkred'
        }

        return(
            <div class="wrapper">
                <Header 

                />
               <NavBar/>
              
                <div class="content-wrapper" style={heightStyle}>
                
                    <section class="content-header">
                    <br/>
                    <h1>
                        Employee Detail
                    </h1>
                    <ol class="breadcrumb">
                        <button class="btn btn-primary" onClick={this.addEmployee}>Add New Employee</button>
                    </ol>
                    </section>
                  
                    <section class="content">


                        <div id="deleteEmployee" class="modal fade">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                                        <h4 class="modal-title">Delete Employee</h4>
                                    </div>
                                    <div class="modal-body">
                                        Are you sure want to delete this employee?
                                    </div>
                                    
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-default pull-left"  data-dismiss="modal" ref={this.closeBtn}>Close</button>
                                        <button type="button" class="btn btn-danger" onClick={()=>this.deleteEmployee(this.state.id)}>Yes</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        {/* DELETE EMPLOYEE FAMILY */}

                        <div id="deleteFamily" class="modal fade">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                                        <h4 class="modal-title">Delete Family</h4>
                                    </div>
                                    <div class="modal-body">
                                        Are you sure want to delete this family?
                                    </div>
                                    
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-default pull-left"  data-dismiss="modal" ref={this.closeBtn}>Close</button>
                                        <button type="button" class="btn btn-danger" onClick={()=>this.deleteFamily(this.state.employeeFamilyId)}  data-dismiss="modal">Yes</button>
                                    </div>
                                </div>
                            </div>
                        </div>



                     {/* ADD EMPLOYEE FAMILY */}

                      <FamilyAdd
                        onValueChange = {this.onValueChange}
                        saveFamily = {this.saveFamily}
                      />


                      {/* EDIT EMPLOYEE FAMILY */}
                   
                      <FamilyEdit
                        employeeFamilyId = {this.state.employeeFamilyId}
                        employeeId = {this.state.employeeId}
                        familyName = {this.state.familyName}
                        familyRelationship = {this.state.familyRelationship}
                        familyAddress = {this.state.familyAddress}
                        familyPhone = {this.state.familyPhone}
                        onValueChange = {this.onValueChange}
                        updateFamily = {this.updateFamily}
                      />


                     {/* ADD EMPLOYEE EDUCATION */}

                     <div id="addEducation" class="modal fade" role="dialog">
                        <div class="modal-dialog" style={{width: '400px'}}>
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" onClick={this.closeWorkLog}>&times;</button>
                                    <h4 class="modal-title">Add Education</h4>
                                </div>
                                <div class="addEducation-ui">

                                        <div class="modal-body row">
                                            <input type="hidden" name="id" value=""/>
                                    
                                          
                                            <div class="col-md-12">
                                                    <div class="form-group">
                                                        <div class="form-group">
                                                            <label style={{fontWeight:'normal'}}>Grade</label> 
                                                            <select class="form-control" name="grade" onChange={this.onValueChange}>
                                                                <option value=""></option>
                                                                <option value="SD">SD</option>
                                                                <option value="SMP">SMP</option>
                                                                <option value="SMU">SMU</option>
                                                                <option value="SMK">SMK</option>
                                                                <option value="University">University</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <span></span>
                                            </div>

                                            <div class="col-md-12">
                                                    <div class="form-group">
                                                        <div class="form-group">
                                                            <label style={{fontWeight:'normal'}}>Institution Name</label> 
                                                            <input type="text" class="form-control" name="institutionName" style={{fontWeight:'normal'}}/>   
                                                        </div>
                                                    </div>
                                                    <span></span>
                                            </div>

                                            <div class="col-md-12">
                                                    <div class="form-group">
                                                        <div class="form-group">
                                                            <label style={{fontWeight:'normal'}}>Majors</label> 
                                                            <input type="text" class="form-control" name="majors" style={{fontWeight:'normal'}}/>   
                                                        </div>
                                                    </div>
                                                    <span></span>
                                            </div>


                                            <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label style={{fontWeight:'normal'}}>Start Year</label> 
                                                        <input type="text" class="form-control" name="startYear" style={{fontWeight:'normal'}}/>   
                                                    </div>
                                                    <span></span>
                                                </div>
                                    
                                            <div class="col-md-6">
                                                 <div class="form-group">
                                                    <label style={{fontWeight:'normal'}}>End Year</label> 
                                                    <input type="text" class="form-control" name="endYear" style={{fontWeight:'normal'}}/>   
                                                </div>
                                                <span></span> 
                                            </div>                                    
                                      

                                        </div>
                                    
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-default pull-left" data-dismiss="modal" onClick={this.closeWorkLog} ref={this.workLogCloseBtn}>Close</button>
                                            <button type="button" class="btn btn-primary" onClick={this.saveWorkLog}>Save Education</button>
                                        </div>
                             
                                </div>
                            </div>
                        </div>
                     </div>



                    {/* ADD EMPLOYEE COURSE */}

                    <div id="addCourse" class="modal fade" role="dialog">
                        <div class="modal-dialog" style={{width: '400px'}}>
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" onClick={this.closeWorkLog}>&times;</button>
                                    <h4 class="modal-title">Add Course</h4>
                                </div>
                                <div class="addCourse-ui">

                                        <div class="modal-body row">
                                            <input type="hidden" name="id" value=""/>
                                            
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <div class="form-group">
                                                        <label style={{fontWeight:'normal'}}>Course Name</label> 
                                                        <input type="text" class="form-control" name="institutionName" style={{fontWeight:'normal'}}/>   
                                                    </div>
                                                </div>
                                                <span></span>
                                            </div>

                                            <div class="col-md-12">
                                                    <div class="form-group">
                                                        <div class="form-group">
                                                            <label style={{fontWeight:'normal'}}>Provider</label> 
                                                            <input type="text" class="form-control" name="majors" style={{fontWeight:'normal'}}/>   
                                                        </div>
                                                    </div>
                                                    <span></span>
                                            </div>



                                            <div class="col-md-6">
                                                    
                                                <label style={{fontWeight:'normal'}}>Start Date</label>
                                                <span class="input-group-btn">
                                                    <div class="input-group date" data-provide="datepicker" data-date-autoclose="true" data-date-today-highlight="true">
                                                        <input type="text" name="startDate" class="form-control"  
                                                           />
                                                        <div class="input-group-addon">
                                                            <span class="fa fa-calendar"></span>
                                                        </div>
                                                    </div>
                                                </span>
                                                <span></span>

                                            </div>
                                    
                                            <div class="col-md-6">
                                                    
                                                <label style={{fontWeight:'normal'}}>End Date</label>
                                                <span class="input-group-btn">
                                                    <div class="input-group date" data-provide="datepicker" data-date-autoclose="true" data-date-today-highlight="true">
                                                        <input type="text" name="endDate" class="form-control"  
                                                            />
                                                        <div class="input-group-addon">
                                                            <span class="fa fa-calendar"></span>
                                                        </div>
                                                    </div>
                                                </span>
                                                <span></span>

                                            </div>      

                                            <div class="col-md-12">&nbsp;</div>

                                            <div class="col-md-12">
                                                    <div class="form-group">
                                                        <div class="form-group">
                                                            <label style={{fontWeight:'normal'}}>Certificate</label> 
                                                            <select class="form-control" name="certificate" onChange={this.onValueChange}>
                                                                <option value=""></option>
                                                                <option value="YES">YES</option>
                                                                <option value="NO">NO</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <span></span>
                                            </div>

                                      

                                        </div>
                                    
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-default pull-left" data-dismiss="modal" onClick={this.closeWorkLog} ref={this.workLogCloseBtn}>Close</button>
                                            <button type="button" class="btn btn-primary" onClick={this.saveWorkLog}>Save Course</button>
                                        </div>
                             
                                </div>
                            </div>
                        </div>
                     </div>
                     


                      {/* ADD EMPLOYEE SALARY COMPONENT */}

                    <div id="addSalaryComponent" class="modal fade" role="dialog">
                        <div class="modal-dialog" style={{width: '400px'}}>
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" onClick={this.closeWorkLog}>&times;</button>
                                    <h4 class="modal-title">Add Salary Component</h4>
                                </div>
                                <div class="addCourse-ui">

                                        <div class="modal-body row">
                                            <input type="hidden" name="id" value=""/>

                                            <div class="col-md-12">
                                                    <div class="form-group">
                                                        <div class="form-group">
                                                            <label style={{fontWeight:'normal'}}>Salary Component</label> 
                                                            <select class="form-control" name="salaryComponentId" onChange={this.onValueChange}>
                                                                <option value=""></option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <span></span>
                                            </div>

                                            
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <div class="form-group">
                                                        <label style={{fontWeight:'normal'}}>Amount</label> 
                                                        <input type="text" class="form-control" name="amount" style={{fontWeight:'normal'}}/>   
                                                    </div>
                                                </div>
                                                <span></span>
                                            </div>


                                        </div>
                                    
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-default pull-left" data-dismiss="modal" onClick={this.closeWorkLog} ref={this.workLogCloseBtn}>Close</button>
                                            <button type="button" class="btn btn-primary" onClick={this.saveWorkLog}>Save Salary Component</button>
                                        </div>
                             
                                </div>
                            </div>
                        </div>
                     </div>


                         {/* ADD EMPLOYEE INSURANCE */}

                         <div id="addInsurance" class="modal fade" role="dialog">
                        <div class="modal-dialog" style={{width: '400px'}}>
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" onClick={this.closeWorkLog}>&times;</button>
                                    <h4 class="modal-title">Add Insurance</h4>
                                </div>
                                <div class="addInsurance-ui">

                                        <div class="modal-body row">
                                            <input type="hidden" name="id" value=""/>
                                            
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <div class="form-group">
                                                        <label style={{fontWeight:'normal'}}>Insurance Name</label> 
                                                        <input type="text" class="form-control" name="institutionName" style={{fontWeight:'normal'}}/>   
                                                    </div>
                                                </div>
                                                <span></span>
                                            </div>

                                            <div class="col-md-12">
                                                    <div class="form-group">
                                                        <div class="form-group">
                                                            <label style={{fontWeight:'normal'}}>Insurance Number</label> 
                                                            <input type="text" class="form-control" name="majors" style={{fontWeight:'normal'}}/>   
                                                        </div>
                                                    </div>
                                                    <span></span>
                                            </div>



                                            <div class="col-md-6">
                                                    
                                                <label style={{fontWeight:'normal'}}>Effective Date</label>
                                                <span class="input-group-btn">
                                                    <div class="input-group date" data-provide="datepicker" data-date-autoclose="true" data-date-today-highlight="true">
                                                        <input type="text" name="startDate" class="form-control"  
                                                           />
                                                        <div class="input-group-addon">
                                                            <span class="fa fa-calendar"></span>
                                                        </div>
                                                    </div>
                                                </span>
                                                <span></span>

                                            </div>
                                    
                                            <div class="col-md-6">
                                                    
                                                <label style={{fontWeight:'normal'}}>End Date</label>
                                                <span class="input-group-btn">
                                                    <div class="input-group date" data-provide="datepicker" data-date-autoclose="true" data-date-today-highlight="true">
                                                        <input type="text" name="endDate" class="form-control"  
                                                            />
                                                        <div class="input-group-addon">
                                                            <span class="fa fa-calendar"></span>
                                                        </div>
                                                    </div>
                                                </span>
                                                <span></span>

                                            </div>      

                                            <div class="col-md-12">&nbsp;</div>


                                        </div>
                                    
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-default pull-left" data-dismiss="modal" onClick={this.closeWorkLog} ref={this.workLogCloseBtn}>Close</button>
                                            <button type="button" class="btn btn-primary" onClick={this.saveWorkLog}>Save Insurance</button>
                                        </div>
                             
                                </div>
                            </div>
                        </div>
                     </div>



                

                        <div class="row">
                        
                            <div class="col-md-12">
                                <div class="box box-default">
                                    <br/>
                                    <div class="box-header with-border">
                                   
                                         <h3 class="box-title">{this.renderNik(this.state.employmentStatus, this.state.employeeCode)}&nbsp;&nbsp;{this.state.employeeName}</h3>
                                   
                                     </div>

                                    <section class="content">


                                    <div class="pull-right">
                                      <button class="btn btn-default" type="button" onClick={()=>this.editEmployee(this.state.id)}><i class="fa fa-pencil-square-o"></i>
                                            &nbsp;Edit
                                        </button>
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-default" data-toggle="modal" data-target="#addAttachment">Attachment</button>
                                            <button type="button" class="btn btn-default" data-toggle="modal" data-target="#updateEstimation">Approval Line</button>
                                            <button type="button" class="btn btn-default" data-toggle="modal" data-target="#addWorkLog">Resignation</button>
                                        </div>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <div class="btn-group">
                                            <button class="btn btn-default" style={buttonStyle} type="button" onClick={()=>this.refreshEmployee(this.state.id)}><i class="fa fa-refresh"></i></button>    
                                            <button class="btn btn-default" style={buttonStyle} type="button" data-toggle="modal" data-target="#deleteTask">
                                                    <i class="fa fa-trash-o"></i>
                                            </button>
                                            
                                        </div>
                                        <div class="btn-group">
                                                <button class="btn btn-default" type="button">Update Status</button>
                                                <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" style={buttonStyle}>
                                                    <span class="caret"></span>
                                                
                                                </button>
                                                <ul class="dropdown-menu" role="menu">
                                                    <li><a href="#" onClick={()=>this.updateStatus(this.state.id, "Probation")} >Probation</a></li>
                                                    <li><a href="#" onClick={()=>this.updateStatus(this.state.id, "Permanent")}>Permanent</a></li>
                                                    <li><a href="#" onClick={()=>this.updateStatus(this.state.id, "Contract")}>Contract</a></li>
                                                </ul>
                                        </div>
                                    </div>

                                  
                                 <br/><br/>

                          
                            <section class="content">
             
                                <div class = "row">
                                    <div class="col-md-6">

                                      
                                        <div class="row">
                                            <div class="col-lg-3"><label style={fontStyle}>Department</label> </div>
                                            <div class="col-lg-6"><label style={fontStyle}>{this.state.departmentName}</label></div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-3"><label style={fontStyle}>Job Title</label> </div>
                                            <div class="col-lg-6"><label style={fontStyle}>{this.state.jobTitleName}</label></div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-3"><label style={fontStyle}>Join Date</label> </div>
                                            <div class="col-lg-6"><label style={fontStyle}> {moment(this.state.joinDate).format("MM/DD/YYYY")}</label></div>
                                        </div>
                                    
                                        <div class="row">
                                            <div class="col-lg-3"><label style={fontStyle}>Status</label> </div>
                                            <div class="col-lg-6"><label style={fontStyle}>{this.renderStatus(this.state.employmentStatus)} {this.state.employmentStatus}</label></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-3"><label style={fontStyle}>Birth Date</label> </div>
                                            <div class="col-lg-6"><label style={fontStyle}>{this.state.birthPlace}, {moment(this.state.birthDate).format("MM/DD/YYYY")}</label></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-3"><label style={fontStyle}>Religion</label> </div>
                                            <div class="col-lg-6"><label style={fontStyle}>{this.state.religion}</label></div>
                                        </div>
                                   
                                        <div class="row">
                                            <div class="col-lg-3"><label style={fontStyle}>Blood Type</label> </div>
                                            <div class="col-lg-6"><label style={fontStyle}>{this.state.bloodType}</label></div>
                                        </div>
                                    
                                        <div class="row">
                                            <div class="col-lg-3"><label style={fontStyle}>Marital Status</label> </div>
                                            <div class="col-lg-6"><label style={fontStyle}>{this.state.maritalStatus}</label></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-3"><label style={fontStyle}>Address</label> </div>
                                            <div class="col-lg-6"><label style={fontStyle}>{this.state.address}</label></div>
                                        </div>


                                        <div class="row">
                                            <div class="col-lg-3"><label style={fontStyle}>Phone</label> </div>
                                            <div class="col-lg-6"><label style={fontStyle}>{this.state.phone}</label></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-3"><label style={fontStyle}>E-mail</label> </div>
                                            <div class="col-lg-6"><label style={fontStyle}>{this.state.email}</label></div>
                                        </div>
                                        
                                        
                                    
                                        
                                    </div>
                                  
                                </div>


                         </section>

                       <br/><br/>

                                {/* Attachment */}

                                <div class="box-header with-border">
                                    <h3 class="box-title"><b>Attachments</b></h3>
                                    <div class="box-tools pull-right">
                                        <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                                        </button>
                                    </div>
                                </div>

                                <div class="box-body">
                                        
                                    <div class="row">
                                        <div class="col-md-12">
                                            <ul class="mailbox-attachments clearfix">
                                                
                                            </ul>
                                        </div>    
                                    </div>

                                </div>    


                              <br/><br/>


                                  <div class="box-header with-border" >
                                    <h3 class="box-title"><b>Others</b></h3>
                                    <div class="box-tools pull-right">
                                        <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                                        </button>
                                    </div>
                                </div>

                                <br/>


                                  <div class="nav-tabs-custom">
                                        <ul class="nav nav-tabs">
                                            <li class="active"><a href="#tab_family" data-toggle="tab" aria-expanded="true" style={fontStyle}>Family</a></li>
                                            <li class=""><a href="#tab_education" data-toggle="tab" aria-expanded="true" style={fontStyle}>Education</a></li>
                                            <li class=""><a href="#tab_course" data-toggle="tab" aria-expanded="true" style={fontStyle}>Course</a></li>
                                            <li class=""><a href="#tab_salaryComponent" data-toggle="tab" aria-expanded="true" style={fontStyle}>Salary Component</a></li>
                                            <li class=""><a href="#tab_insurance" data-toggle="tab" aria-expanded="true" style={fontStyle}>Insurance</a></li>
                                        </ul>
                                        <div class="tab-content">
                        
                                            <div class="tab-pane active" id="tab_family">
                                                   <a href="#" data-toggle="modal" data-target="#addFamily">+ Add Family</a>
                                                    <br/>
                                                    <div class="box-body">
                                                        <div class="row">
                                                    
                                                            <div class="col-md-12">
                                                              <ul class="todo-list ui-sortable">
                                                                {this.state.employeeFamilies.map(ef=> 
                                                                    <li>
                                                                        <span> {ef.familyName} ( {ef.familyRelationship} ) - {ef.familyAddress} - {ef.familyPhone}</span>
                                                                        <div class="tools">
                                                                            <i class="fa fa-edit" style={{color:'black'}} onClick={()=>this.editFamily(ef.employeeFamilyId)} data-toggle="modal" data-target="#editFamily"></i>&nbsp;
                                                                            <i class="fa fa-trash-o" style={{color:'black'}}  onClick={()=>this.getFamilyId(ef.employeeFamilyId)} data-toggle="modal" data-target="#deleteFamily"></i>
                                                                        </div>
                                                                    </li>
                                                                  )}
                                                            </ul>

                                                         </div>
                                                            
                                                        </div>
                                                    </div>

                                            </div>


                                            <div class="tab-pane" id="tab_education">

                                                <button type="button" class="btn btn-default" data-toggle="modal" 
                                                    data-target="#addEducation">+ Education</button>

                                                    <div class="box-body">
                                                        <div class="row">
                                                    
                                                        <div class="col-md-12">
                                                        </div>
                                                        </div>
                                                    </div>

                                            </div>


                                            <div class="tab-pane" id="tab_course">

                                                <button type="button" class="btn btn-default" data-toggle="modal" 
                                                    data-target="#addCourse">+ Course</button>

                                                    <div class="box-body">
                                                        <div class="row">
                                                    
                                                        <div class="col-md-12">
                                                        </div>
                                                        </div>
                                                    </div>

                                            </div>


                                            <div class="tab-pane" id="tab_salaryComponent">

                                                <button type="button" class="btn btn-default" data-toggle="modal" 
                                                    data-target="#addSalaryComponent">+ Salary Component</button>

                                                    <div class="box-body">
                                                        <div class="row">
                                                    
                                                        <div class="col-md-12">
                                                        </div>
                                                        </div>
                                                    </div>

                                             </div>



                                             <div class="tab-pane" id="tab_insurance">

                                            <button type="button" class="btn btn-default" data-toggle="modal" 
                                                data-target="#addInsurance">+ Insurance</button>

                                                <div class="box-body">
                                                    <div class="row">
                                                
                                                    <div class="col-md-12">
                                                    </div>
                                                    </div>
                                                </div>

                                            </div>


                               

                                        </div>
                                </div>



                                    </section>


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