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


import React, {Component} from 'react';
import './App.css';
import { Footer } from './Footer';
import { Header } from './Header';
import { NavBar } from './NavBar';

import axios from 'axios';
import config from './Config';

export class AddEmployee extends Component
{

    constructor(props) {
        super(props);

        var userJson = localStorage.getItem("user");
        var user = JSON.parse(userJson);

        this.state = {
            user: user, 
            activeProjectId: '',
            error: {},
            projects: [],
            category: '',
            peoples: [],
            projectId: '',
            title: '',
            priority: '',
            reporterId: '',
            assigneeId: '',
            module: '',
            platform: '',
            version: '',
            testerId: '',
            description: '',
            isSaving: false
        }
    }

    componentDidMount() {
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    
    getUserById =(id)=> {
        axios.get(config.serverUrl + "/api/people/getbyid/" + id).then(response=> {
            this.setState({
                activeProjectId: response.data.activeProjectId
            })
        });
    }


    getAllProjects = () => {
        axios.get(config.serverUrl + "/api/project/getall").then(response=> {
            this.setState({
                projects: response.data
            })
        })
    }

    getAllPeople = () => {
        axios.get(config.serverUrl + "/api/people/getall").then(response=> {
           this.setState({
            peoples: response.data
           })                        
        })

      
        
       
    }
    

    saveTask = () => {
        
        let isValid = this.validate();
        if (isValid)
        {
            let task = {
                projectId: this.state.activeProjectId,
                category: this.state.category,
                title: this.state.title,
                priority: this.state.priority,
                reporterId: this.state.reporterId,
                assigneeId: this.state.assigneeId,
                module: this.state.module,
                platform: this.state.platform,
                version: this.state.version,
                testerId: this.state.testerId,
                description: this.state.description
            }

            this.setState({
                isSaving: true
            })

            axios.post(config.serverUrl + "/api/task/save", task).then(response=> {
                this.setState({
                    isSaving: false
                })
                this.props.history.push("/task");
            })
        }
    }


    validate = () => {

        let isValid = true;
        let error = {};

        if (this.state.activeProjectId == '') {
            error.projectId = 'is required';
            isValid = false;
        }

        if (this.state.category == '') {
            error.category = 'is required';
            isValid = false;
        }
        if (this.state.title == '') {
            error.title = 'is required';
            isValid = false;
        }
        if (this.state.priority == '') {
            error.priority = 'is required';
            isValid = false;
        }
        if (this.state.reporterId == '') {
            error.reporterId = 'is required';
            isValid = false;
        }
        if (this.state.assigneeId == '') {
            error.assigneeId = 'is required';
            isValid = false;
        }
        if (this.state.testerId == '') {
            error.testerId = 'is required';
            isValid = false;
        }
               
      
        this.setState({
            error: error 
        })

        return isValid;
        
    }


    cancelAdd = () => {
        this.props.history.push("/task");
    }

    addProject = () => {
        this.props.history.push("/add-project");
    }

    addPeople = () => {
        this.props.history.push("/add-people");
    }


    render() {

        const heightStyle = {
            minHeight: '959.8px'
        }

        const selectStyle = {
            width: '100%'
        }

        let errStyle = {
            color: 'darkred'
        }

        let dateStyle = {
            width: '250px'
        }


        return(

            <div class="wrapper">

               <Header 
                    history={this.props.history} 
                    user={this.state.user}
                />
                <NavBar/>
              
                 <div class="content-wrapper" style={heightStyle}>
                    <section class="content-header">
                        <h1>
                            Add New Employee
                        </h1>
                    </section>
                    <br/>
                  
                
                     <section class="content">

                     
                         <div class="row">
                                  
                            <div class="col-md-12">
                                <div class="box box-default">
                                    <div class="box-header with-border">
                                    <div class="box-tools pull-right">
                                        {this.state.isSaving ? 
                                        <span><i className="fa fa-spinner fa-spin"></i>&nbsp;Saving ...</span>
                                        : null
                                        }
                                    </div>

                                    <div class="nav-tabs-custom">
                                        <ul class="nav nav-tabs">
                                        <li class="active"><a href="#tab_1" data-toggle="tab" aria-expanded="true">Personal</a></li>
                                        <li class=""><a href="#tab_2" data-toggle="tab" aria-expanded="false">Address</a></li>
                                        <li class=""><a href="#tab_3" data-toggle="tab" aria-expanded="false">Company</a></li>
                                        <li class=""><a href="#tab_4" data-toggle="tab" aria-expanded="false">Payroll</a></li>
                                        
                                        </ul>
                                        <div class="tab-content">
                                        <div class="tab-pane active" id="tab_1">
                                                
                                        <div class="form-horizontal">
  
                                        <div class="form-group">
                                            <label class="col-md-3 control-label">NIK</label>
                                            <div class="col-md-7 col-sm-12 required">
                                                <input class="form-control" type="text" name="employeeCode" onChange={this.onValueChange}/>
                                            </div>
                                            <div class="col-md-2 col-sm-1">
                                            <span style={errStyle}>{this.state.error.employeeCode}</span>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label class="col-md-3 control-label">Full Name</label>
                                            <div class="col-md-7 col-sm-12 required">
                                                <input class="form-control" type="text" name="employeeName" onChange={this.onValueChange}/>
                                            </div>
                                            <div class="col-md-2 col-sm-1">
                                            <span style={errStyle}>{this.state.error.employeeName}</span>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label class="col-md-3 control-label">Birt Date</label>
                                            <div class="col-md-7 col-sm-12 required">
                                                <input class="form-control" type="text" name="birthDate" onChange={this.onValueChange}/>
                                            </div>
                                            <div class="col-md-2 col-sm-1">
                                            <span style={errStyle}>{this.state.error.birthDate}</span>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label class="col-md-3 control-label">Birt Place</label>
                                            <div class="col-md-7 col-sm-12 required">
                                                <input class="form-control" type="text" name="birthPlace" onChange={this.onValueChange}/>
                                            </div>
                                            <div class="col-md-2 col-sm-1">
                                            <span style={errStyle}>{this.state.error.birthPlace}</span>
                                            </div>
                                        </div>
                                        
                                      <div class="form-group">
                                            <label class="col-md-3 control-label">Gender</label>
                                            <div class="col-md-7 col-sm-12 required">
                                                <select class="form-control" name="gender" onChange={this.onValueChange}>
                                                    <option>Select Gender</option>
                                                    <option value="male">Male</option>
                                                    <option value="Female">Female</option>
                                               </select>
                                            </div>
                                            &nbsp;&nbsp;&nbsp;&nbsp;<span style={errStyle}>{this.state.error.gender}</span>
                                        </div>

                                        <div class="form-group">
                                            <label class="col-md-3 control-label">Religion</label>
                                            <div class="col-md-7 col-sm-12 required">
                                                <select class="form-control" name="religion" onChange={this.onValueChange}>
                                                    <option>Select Religion</option>
                                                    <option value="male">Islam</option>
                                                    <option value="Female">Kristen</option>
                                                    <option value="Female">Budha</option>
                                                    <option value="Female">Hindu</option>
                                               </select>
                                            </div>
                                            &nbsp;&nbsp;&nbsp;&nbsp;<span style={errStyle}>{this.state.error.religion}</span>
                                        </div>


                                        <div class="form-group">
                                            <label class="col-md-3 control-label">Marital Status</label>
                                            <div class="col-md-7 col-sm-12 required">
                                                <select class="form-control" name="maritalStatus" onChange={this.onValueChange}>
                                                    <option>Select Marital Status</option>
                                                    <option value="single">Single</option>
                                                    <option value="maried">Maried</option>
                                               </select>
                                            </div>
                                            &nbsp;&nbsp;&nbsp;&nbsp;<span style={errStyle}>{this.state.error.maritalStatus}</span>
                                        </div>

                                  
                                      <div id="version" class="form-group">
                                            <label class="col-md-3 control-label">Number of Childs</label>
                                            <div class="col-md-7 col-sm-12">
                                                <input class="form-control" type="text" name="numberOfChilds" onChange={this.onValueChange}/>
                                            </div>
                                      </div>

                                      <div class="form-group">
                                            <label class="col-md-3 control-label">Blood Type</label>
                                            <div class="col-md-7 col-sm-12 required">
                                                <select class="form-control" name="bloodType" onChange={this.onValueChange}>
                                                    <option>Select Blood Type</option>
                                                    <option value="A">A</option>
                                                    <option value="B">B</option>
                                                    <option value="AB">AB</option>
                                                    <option value="O">O</option>
                                               </select>
                                            </div>
                                            &nbsp;&nbsp;&nbsp;&nbsp;<span style={errStyle}>{this.state.error.bloodType}</span>
                                        </div>

                                        <div class="form-group">
                                            <label class="col-md-3 control-label">Photo</label>
                                            <div class="col-md-7 col-sm-12 required">
                                                <input class="form-control" type="text" name="photo" onChange={this.onValueChange}/>
                                            </div>
                                            <div class="col-md-2 col-sm-1">
                                            <span style={errStyle}>{this.state.error.photo}</span>
                                            </div>
                                        </div>


                                      
                                      </div>

                                        </div>
                                        
                                        
                                        <div class="tab-pane" id="tab_2">
                                            
                                            <div class="form-horizontal">
                                                
                                                <div class="form-group">
                                                    <label class="col-md-3 control-label">Address</label>
                                                    <div class="col-md-7 col-sm-12 required">
                                                        <input class="form-control" type="text" name="address" onChange={this.onValueChange}/>
                                                    </div>
                                                    <div class="col-md-2 col-sm-1">
                                                    <span style={errStyle}>{this.state.error.address}</span>
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <label class="col-md-3 control-label">City</label>
                                                    <div class="col-md-7 col-sm-12 required">
                                                        <input class="form-control" type="text" name="city" onChange={this.onValueChange}/>
                                                    </div>
                                                    <div class="col-md-2 col-sm-1">
                                                    <span style={errStyle}>{this.state.error.city}</span>
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <label class="col-md-3 control-label">Province</label>
                                                    <div class="col-md-7 col-sm-12 required">
                                                        <input class="form-control" type="text" name="province" onChange={this.onValueChange}/>
                                                    </div>
                                                    <div class="col-md-2 col-sm-1">
                                                    <span style={errStyle}>{this.state.error.province}</span>
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <label class="col-md-3 control-label">Zip Code</label>
                                                    <div class="col-md-7 col-sm-12 required">
                                                        <input class="form-control" type="text" name="zipCode" onChange={this.onValueChange}/>
                                                    </div>
                                                    <div class="col-md-2 col-sm-1">
                                                    <span style={errStyle}>{this.state.error.zipCode}</span>
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <label class="col-md-3 control-label">Nationality</label>
                                                    <div class="col-md-7 col-sm-12 required">
                                                        <input class="form-control" type="text" name="nationality" onChange={this.onValueChange}/>
                                                    </div>
                                                    <div class="col-md-2 col-sm-1">
                                                    <span style={errStyle}>{this.state.error.nationality}</span>
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <label class="col-md-3 control-label">KTP Number</label>
                                                    <div class="col-md-7 col-sm-12 required">
                                                        <input class="form-control" type="text" name="ktp" onChange={this.onValueChange}/>
                                                    </div>
                                                    <div class="col-md-2 col-sm-1">
                                                    <span style={errStyle}>{this.state.error.ktp}</span>
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <label class="col-md-3 control-label">Phone</label>
                                                    <div class="col-md-7 col-sm-12 required">
                                                        <input class="form-control" type="text" name="phone" onChange={this.onValueChange}/>
                                                    </div>
                                                    <div class="col-md-2 col-sm-1">
                                                    <span style={errStyle}>{this.state.error.phone}</span>
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <label class="col-md-3 control-label">E-Mail</label>
                                                    <div class="col-md-7 col-sm-12 required">
                                                        <input class="form-control" type="text" name="phone" onChange={this.onValueChange}/>
                                                    </div>
                                                    <div class="col-md-2 col-sm-1">
                                                    <span style={errStyle}>{this.state.error.email}</span>
                                                    </div>
                                                </div>
                                                

                                            </div>         
                                        </div>




                                        <div class="tab-pane" id="tab_3">
                                            
                                           <div class="form-horizontal">
                                                   
                                                <div class="form-group">
                                                    <label class="col-md-3 control-label">Branch</label>
                                                    <div class="col-md-7 col-sm-12 required">
                                                        <select class="form-control" name="branchId" onChange={this.onValueChange}>
                                                            <option>Select Branch</option>
                                                    </select>
                                                    </div>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={errStyle}>{this.state.error.branchId}</span>
                                                </div>

                                                <div class="form-group">
                                                    <label class="col-md-3 control-label">Department</label>
                                                    <div class="col-md-7 col-sm-12 required">
                                                        <select class="form-control" name="departmentId" onChange={this.onValueChange}>
                                                            <option>Select Department</option>
                                                    </select>
                                                    </div>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={errStyle}>{this.state.error.departmentId}</span>
                                                </div>

                                                <div class="form-group">
                                                    <label class="col-md-3 control-label">Job Title</label>
                                                    <div class="col-md-7 col-sm-12 required">
                                                        <select class="form-control" name="jobTitleId" onChange={this.onValueChange}>
                                                            <option>Select Job Title</option>
                                                    </select>
                                                    </div>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={errStyle}>{this.state.error.jobTitleId}</span>
                                                </div>
                                              
                                                <div class="form-group">
                                                    <label class="col-md-3 control-label">Join Date</label>
                                                    <div class="col-md-7 col-sm-12 required">
                                                        <input class="form-control" type="text" name="joinDate" onChange={this.onValueChange}/>
                                                    </div>
                                                    <div class="col-md-2 col-sm-1">
                                                    <span style={errStyle}>{this.state.error.joinDate}</span>
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <label class="col-md-3 control-label">Resign Date</label>
                                                    <div class="col-md-7 col-sm-12 required">
                                                        <input class="form-control" type="text" name="resignDate" onChange={this.onValueChange}/>
                                                    </div>
                                                    <div class="col-md-2 col-sm-1">
                                                    <span style={errStyle}>{this.state.error.resignDate}</span>
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <label class="col-md-3 control-label">Work Schedule</label>
                                                    <div class="col-md-7 col-sm-12 required">
                                                        <select class="form-control" name="workScheduleId" onChange={this.onValueChange}>
                                                            <option>Select Work Schedule</option>
                                                    </select>
                                                    </div>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={errStyle}>{this.state.error.workScheduleId}</span>
                                                </div>

                                                <div class="form-group">
                                                    <label class="col-md-3 control-label">Approval Line</label>
                                                    <div class="col-md-7 col-sm-12 required">
                                                        <select class="form-control" name="approvalLineId" onChange={this.onValueChange}>
                                                            <option>Select Approval Line</option>
                                                    </select>
                                                    </div>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={errStyle}>{this.state.error.approvalLineId}</span>
                                                </div>

                                                <div class="form-group">
                                                    <label class="col-md-3 control-label">Employment Status</label>
                                                    <div class="col-md-7 col-sm-12 required">
                                                        <select class="form-control" name="employmentStatus" onChange={this.onValueChange}>
                                                            <option>Select Status</option>
                                                            <option value="Permanent">Permanent</option>
                                                            <option value="Contract">Contract</option>
                                                            <option value="Probation">Probation</option>
                                                        </select>
                                                    </div>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={errStyle}>{this.state.error.employmentStatus}</span>
                                                </div>

                                                

                                            </div>         
                                        </div>


                                        <div class="tab-pane" id="tab_4">
                                            
                                            <div class="form-horizontal">
                                                
                                                <div class="form-group">
                                                    <label class="col-md-3 control-label">Basic Salary</label>
                                                    <div class="col-md-7 col-sm-12 required">
                                                        <input class="form-control" type="text" name="basicSalary" onChange={this.onValueChange}/>
                                                    </div>
                                                    <div class="col-md-2 col-sm-1">
                                                    <span style={errStyle}>{this.state.error.basicSalary}</span>
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <label class="col-md-3 control-label">Payment Type</label>
                                                    <div class="col-md-7 col-sm-12 required">
                                                        <select class="form-control" name="paymentType" onChange={this.onValueChange}>
                                                            <option>Select Payment Type</option>
                                                            <option value="Cash">Cash</option>
                                                            <option value="Transfer">Transfer</option>
                                                        </select>
                                                    </div>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={errStyle}>{this.state.error.paymentType}</span>
                                                </div>

                                                <div class="form-group">
                                                    <label class="col-md-3 control-label">Bank Name</label>
                                                    <div class="col-md-7 col-sm-12 required">
                                                        <input class="form-control" type="text" name="bankName" onChange={this.onValueChange}/>
                                                    </div>
                                                    <div class="col-md-2 col-sm-1">
                                                    <span style={errStyle}>{this.state.error.bankName}</span>
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <label class="col-md-3 control-label">Bank Account</label>
                                                    <div class="col-md-7 col-sm-12 required">
                                                        <input class="form-control" type="text" name="bankAccount" onChange={this.onValueChange}/>
                                                    </div>
                                                    <div class="col-md-2 col-sm-1">
                                                    <span style={errStyle}>{this.state.error.bankAccount}</span>
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <label class="col-md-3 control-label">NPWP</label>
                                                    <div class="col-md-7 col-sm-12 required">
                                                        <input class="form-control" type="text" name="npwp" onChange={this.onValueChange}/>
                                                    </div>
                                                    <div class="col-md-2 col-sm-1">
                                                    <span style={errStyle}>{this.state.error.npwp}</span>
                                                    </div>
                                                </div>



                                             

                                            


                                                

                                            </div>         
                                        </div>



                                        
                                        </div>
                                    </div>

                                    <div class="text-right">
                                        <a class="btn btn-link text-left" href="#" onClick={this.cancelAdd}>Cancel</a>
                                        <button type="button" onClick={this.saveTask} class="btn btn-primary"><i class="fa fa-check icon-white"></i> Save</button>
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