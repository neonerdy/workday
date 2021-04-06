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
import { Header } from './Header';
import { NavBar } from './NavBar';
import { Footer } from './Footer';

import axios from 'axios';
import config from './Config';
import moment from 'moment';


export class EmployeeDetail extends Component
{
    constructor(props) {
        super(props);

        this.state = {
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
            email: ''
        }
    }


    componentDidMount() {

        let id = this.props.match.params.id;
        this.getEmployeeById(id);
     
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
                                                    <li><a href="#!" >Probation</a></li>
                                                    <li><a href="#!" >Permanent</a></li>
                                                    <li><a href="#!" >Contract</a></li>
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
                                            <li class=""><a href="#tab_salary" data-toggle="tab" aria-expanded="true" style={fontStyle}>Salary</a></li>
                                        </ul>
                                        <div class="tab-content">
                        
                                            <div class="tab-pane active" id="tab_comment">

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