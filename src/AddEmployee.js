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
import moment from 'moment';

export class AddEmployee extends Component
{

    constructor(props) {
        super(props);

        this.birthDate = React.createRef();
        this.joinDate = React.createRef();
        this.resignDate = React.createRef();

        this.state = {
            error: {},
            branches: [],
            departments: [],
            jobTitles: [],
            workSchedules: [],
            employeeCode: '',
            employeeName: '',
            birthDate: '',
            birthPlace: '',
            gender: '',
            religion: '',
            maritalStatus: '',
            numberOfChilds: '',
            bloodType: '',
            photo: '',
            address: '',
            city: '',
            province: '',
            zipCode: '',
            nationality: '',
            nationalIdentityId: '',
            phone: '',
            email: '',
            branchId: '',
            departmentId: '',
            jobTitleId: '',
            joinDate: '',
            resignDate: '',
            workScheduleId: '',
            approvalLineId: '',
            employmentStatus: '',
            basicSalary: '',
            paymentType: '',
            bankName: '',
            bankAccount: '',
            npwp: ''
        }
    }


    componentDidMount() {

        this.getAllBranches();
        this.getAllDepartments();
        this.getAllJobTitles();
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
        })
    }

    getAllDepartments = () => {
        axios.get(config.serverUrl + "/api/department/getall").then(response=> {
            this.setState({
                departments: response.data
            })
        })
    }


    getAllJobTitles = () => {
        axios.get(config.serverUrl + "/api/jobtitle/getall").then(response=> {
            this.setState({
                jobTitles: response.data
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




    

    saveEmployee = () => {
        
        let isValid = this.validate();
        if (isValid)
        {
            let employee = {
                employeeCode: this.state.employeeCode,
                employeeName: this.state.employeeName,
                birthDate:  new Date(moment(this.birthDate.current.value)),
                birthPlace: this.state.birthPlace,
                gender: this.state.gender,
                religion: this.state.religion,
                maritalStatus: this.state.maritalStatus,
                numberOfChilds: this.state.numberOfChilds,
                bloodType: this.state.bloodType,
                photo: this.state.photo,
                address: this.state.address,
                city: this.state.city,
                province: this.state.province,
                zipCode: this.state.zipCode,
                nationality: this.state.nationality,
                nationalIdentityId: this.state.nationalIdentityId,
                phone: this.state.phone,
                email: this.state.email,
                branchId: this.state.branchId,
                departmentId: this.state.departmentId,
                jobTitleId: this.state.jobTitleId,
                joinDate:  new Date(moment(this.birthDate.current.value)),
                resignDate: new Date(moment('01/01/1900')),
                workScheduleId: this.state.workScheduleId,
                employmentStatus: this.state.employmentStatus,
                basicSalary: parseFloat(this.state.basicSalary),
                paymentType: this.state.paymentType,
                bankName: this.state.bankName,
                bankAccount: this.state.bankAccount,
                npwp: this.state.npwp
            }

            this.setState({
                isSaving: true
            })

            axios.post(config.serverUrl + "/api/employee/save", employee).then(response=> {
                this.setState({
                    isSaving: false
                })
                this.props.history.push("/employee");
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

       
               
      
        this.setState({
            error: error 
        })

        return isValid;
        
    }


    cancelAdd = () => {
        this.props.history.push("/employee");
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

               <Header/>
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
                                            <label class="col-md-3 control-label">Birth Date</label>
                                            <div class="col-md-7 col-sm-12 required">
                                          
                                                <div class="input-group date" data-provide="datepicker" data-date-autoclose="true" data-date-today-highlight="true">
                                                        <input type="text" class="form-control" ref={this.birthDate}/>
                                                        <div class="input-group-addon">
                                                            <span class="fa fa-calendar"></span>
                                                        </div>
                                                </div>

                                            </div>
                                            <div class="col-md-2 col-sm-1">
                                            <span style={errStyle}>{this.state.error.birthDate}</span>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label class="col-md-3 control-label">Birth Place</label>
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
                                                    <option value="Single">Single</option>
                                                    <option value="Maried">Maried</option>
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
                                                        <input class="form-control" type="text" name="nationalIdentityId" onChange={this.onValueChange}/>
                                                    </div>
                                                    <div class="col-md-2 col-sm-1">
                                                    <span style={errStyle}>{this.state.error.nationalIdentityId}</span>
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
                                                        <input class="form-control" type="text" name="email" onChange={this.onValueChange}/>
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
                                                            {this.state.branches.map(b=> 
                                                                <option key={b.id} value={b.id}>{b.branchName}</option>
                                                            )}
                                                         </select>
                                                    </div>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={errStyle}>{this.state.error.branchId}</span>
                                                </div>

                                                <div class="form-group">
                                                    <label class="col-md-3 control-label">Department</label>
                                                    <div class="col-md-7 col-sm-12 required">
                                                        <select class="form-control" name="departmentId" onChange={this.onValueChange}>
                                                            <option>Select Department</option>
                                                            {this.state.departments.map(d=> 
                                                                <option key={d.id} value={d.id}>{d.departmentName}</option>
                                                            )}
                                                    </select>
                                                    </div>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={errStyle}>{this.state.error.departmentId}</span>
                                                </div>

                                                <div class="form-group">
                                                    <label class="col-md-3 control-label">Job Title</label>
                                                    <div class="col-md-7 col-sm-12 required">
                                                        <select class="form-control" name="jobTitleId" onChange={this.onValueChange}>
                                                            <option>Select Job Title</option>
                                                            {this.state.jobTitles.map(jt=> 
                                                                <option key={jt.id} value={jt.id}>{jt.jobTitleName}</option>
                                                            )}
                                                    </select>
                                                    </div>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={errStyle}>{this.state.error.jobTitleId}</span>
                                                </div>
                                              
                                                <div class="form-group">
                                                    <label class="col-md-3 control-label">Join Date</label>
                                                    <div class="col-md-7 col-sm-12 required">
                                                        <div class="input-group date" data-provide="datepicker" data-date-autoclose="true" data-date-today-highlight="true">
                                                            <input type="text" class="form-control" ref={this.joinDate}/>
                                                            <div class="input-group-addon">
                                                                <span class="fa fa-calendar"></span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-md-2 col-sm-1">
                                                    <span style={errStyle}>{this.state.error.joinDate}</span>
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <label class="col-md-3 control-label">Work Schedule</label>
                                                    <div class="col-md-7 col-sm-12 required">
                                                        <select class="form-control" name="workScheduleId" onChange={this.onValueChange}>
                                                            <option>Select Work Schedule</option>
                                                            {this.state.workSchedules.map(ws=> 
                                                                <option key={ws.id} value={ws.id}>{ws.scheduleName}</option>
                                                            )}
                                                    </select>
                                                    </div>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={errStyle}>{this.state.error.workScheduleId}</span>
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
                                        <button type="button" onClick={this.saveEmployee} class="btn btn-primary"><i class="fa fa-check icon-white"></i> Save</button>
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