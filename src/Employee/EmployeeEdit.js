
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
 import '../App.css';
 import { Footer } from '../Shared/Footer';
 import { Header } from '../Shared/Header';
 import { NavBar } from '../Shared/NavBar';
 
 import axios from 'axios';
 import config from '../Config';
 import moment from 'moment';
 
 export class EmployeeEdit extends Component
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
             employee: {},
             employeeCode: '',
             employeeName: '',
             birthDate: '',
             birthPlace: '',
             gender: '',
             religion: '',
             maritalStatus: '',
             numberOfChilds: '0',
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
             npwp: '',
             createdDate: '',
         }
     }
 
 
     componentDidMount() {
        
         let id = this.props.match.params.id;

         this.getAllBranches();
         this.getAllDepartments();
         this.getAllJobTitles();
         this.getAllWorkSchedules();

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
                birthDate: response.data.birthDate,
                birthPlace: response.data.birthPlace,
                gender: response.data.gender,
                religion: response.data.religion,
                maritalStatus: response.data.maritalStatus,
                numberOfChilds: response.data.numberOfChild,
                bloodType: response.data.bloodType,
                photo: response.data.photo,
                address: response.data.address,
                city: response.data.city,
                province: response.data.province,
                zipCode: response.data.zipCode,
                nationality: response.data.nationality,
                nationalIdentityId: response.data.nationalIdentityId,
                phone: response.data.phone,
                email: response.data.email,
                branchId: response.data.branchId,
                departmentId: response.data.departmentId,
                jobTitleId: response.data.jobTitleId,
                joinDate: response.data.joinDate,
                resignDate: response.data.resignDate,
                workScheduleId: response.data.workScheduleId,
                approvalLineId: response.data.approvalLineId,
                employmentStatus: response.data.employmentStatus,
                basicSalary: response.data.basicSalary,
                paymentType: response.data.paymentType,
                bankName: response.data.bankName,
                bankAccount: response.data.bankAccount,
                npwp: response.data.npwp,
                createdDate: response.data.createdDate
            })
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
 
 
 
 
     
 
     updateEmployee = () => {
         
         let isValid = this.validate();
         if (isValid)
         {
             let employee = {
                 id: this.state.id,
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
                 createdDate: new Date(moment(this.state.createdDate)),
                 npwp: this.state.npwp
             }
 
             this.setState({
                 isSaving: true
             })
 
             axios.put(config.serverUrl + "/api/employee/update", employee).then(response=> {
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
 
         if (this.state.employeeCode == '') {
             error.employeeCode = 'is required';
             isValid = false;
         }
         if (this.state.employeeName == '') {
             error.employeeName = 'is required';
             isValid = false;
         }
         if (this.birthDate.current.value === '') {
             error.birthDate = 'is required';
             isValid = false;
         }
         if (this.state.birthPlace == '') {
             error.birthPlace = 'is required';
             isValid = false;
         }
         if (this.state.gender == '') {
             error.gender = 'is required';
             isValid = false;
         }
         if (this.state.religion == '') {
             error.religion = 'is required';
             isValid = false;
         }
         if (this.state.maritalStatus == '') {
             error.maritalStatus = 'is required';
             isValid = false;
         }
         if (this.state.bloodType == '') {
             error.bloodType = 'is required';
             isValid = false;
         }
 
         //address
 
         if (this.state.address == '') {
             error.address = 'is required';
             isValid = false;
         }
         if (this.state.city == '') {
             error.city = 'is required';
             isValid = false;
         }
         if (this.state.province == '') {
             error.province = 'is required';
             isValid = false;
         }
         if (this.state.zipCode == '') {
             error.zipCode = 'is required';
             isValid = false;
         }
         if (this.state.nationality == '') {
             error.nationality = 'is required';
             isValid = false;
         }
         if (this.state.nationalIdentityId == '') {
             error.nationalIdentityId = 'is required';
             isValid = false;
         }
         if (this.state.phone == '') {
             error.phone = 'is required';
             isValid = false;
         }
         if (this.state.email == '') {
             error.email = 'is required';
             isValid = false;
         }
 
         //company
 
         if (this.state.branchId == '') {
             error.branchId = 'is required';
             isValid = false;
         }
         if (this.state.departmentId == '') {
             error.departmentId = 'is required';
             isValid = false;
         }
         if (this.state.jobTitleId == '') {
             error.jobTitleId = 'is required';
             isValid = false;
         }
         if (this.joinDate.current.value === '') {
             error.joinDate = 'is required';
             isValid = false;
         }
         if (this.state.workScheduleId == '') {
             error.workScheduleId = 'is required';
             isValid = false;
         }
         if (this.state.employmentStatus == '') {
             error.employmentStatus = 'is required';
             isValid = false;
         }
 
         //payroll
         
         if (this.state.basicSalary == '') {
             error.basicSalary = 'is required';
             isValid = false;
         }
         if (this.state.paymentType == '') {
             error.paymentType = 'is required';
             isValid = false;
         }
         if (this.state.bankName == '') {
             error.bankName = 'is required';
             isValid = false;
         }
         if (this.state.bankAccount == '') {
             error.bankAccount = 'is required';
             isValid = false;
         }
         if (this.state.npwp == '') {
             error.npwp = 'is required';
             isValid = false;
         }
 
         this.setState({
             error: error 
         })
 
         return isValid;
         
     }
 
 
     cancelUpdate = () => {
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
                             Edit Employee
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
                                         <span><i className="fa fa-spinner fa-spin"></i>&nbsp;Updating ...</span>
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
                                                 <input class="form-control" type="text" name="employeeCode" 
                                                    onChange={this.onValueChange} value={this.state.employeeCode}
                                                    />
                                             </div>
                                             <div class="col-md-2 col-sm-1">
                                             <span style={errStyle}>{this.state.error.employeeCode}</span>
                                             </div>
                                         </div>
 
                                         <div class="form-group">
                                             <label class="col-md-3 control-label">Full Name</label>
                                             <div class="col-md-7 col-sm-12 required">
                                                 <input class="form-control" type="text" name="employeeName" 
                                                    value={this.state.employeeName}
                                                    onChange={this.onValueChange}/>
                                             </div>
                                             <div class="col-md-2 col-sm-1">
                                             <span style={errStyle}>{this.state.error.employeeName}</span>
                                             </div>
                                         </div>
 
                                         <div class="form-group">
                                             <label class="col-md-3 control-label">Birth Date</label>
                                             <div class="col-md-7 col-sm-12 required">
                                           
                                                 <div class="input-group date" data-provide="datepicker" data-date-autoclose="true" data-date-today-highlight="true">
                                                         <input type="text" class="form-control" 
                                                            value={moment(this.state.birthDate).format("MM/DD/YYYY")}
                                                            ref={this.birthDate}/>

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
                                                 <input class="form-control" type="text" name="birthPlace" 
                                                     value={this.state.birthPlace}
                                                    onChange={this.onValueChange}/>
                                             </div>
                                             <div class="col-md-2 col-sm-1">
                                             <span style={errStyle}>{this.state.error.birthPlace}</span>
                                             </div>
                                         </div>
                                         
                                       <div class="form-group">
                                             <label class="col-md-3 control-label">Gender</label>
                                             <div class="col-md-7 col-sm-12 required">
                                                 <select class="form-control" name="gender" value={this.state.gender} 
                                                    onChange={this.onValueChange}>
                                                     <option>Select Gender</option>
                                                     <option value="Male">Male</option>
                                                     <option value="Female">Female</option>
                                                </select>
                                             </div>
                                             &nbsp;&nbsp;&nbsp;&nbsp;<span style={errStyle}>{this.state.error.gender}</span>
                                         </div>
 
                                         <div class="form-group">
                                             <label class="col-md-3 control-label">Religion</label>
                                             <div class="col-md-7 col-sm-12 required">
                                                 <select class="form-control" name="religion" 
                                                    value={this.state.religion}
                                                    onChange={this.onValueChange}>
                                                     <option>Select Religion</option>
                                                     <option value="Islam">Islam</option>
                                                     <option value="Kristen">Kristen</option>
                                                     <option value="Hindu">Hindu</option>
                                                     <option value="Budha">Budha</option>
                                                </select>
                                             </div>
                                             &nbsp;&nbsp;&nbsp;&nbsp;<span style={errStyle}>{this.state.error.religion}</span>
                                         </div>
 
 
                                         <div class="form-group">
                                             <label class="col-md-3 control-label">Marital Status</label>
                                             <div class="col-md-7 col-sm-12 required">
                                                 <select class="form-control" name="maritalStatus" 
                                                    value={this.state.maritalStatus}
                                                    onChange={this.onValueChange}>
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
                                                 <input class="form-control" type="text" name="numberOfChilds" 
                                                    value={this.state.numberOfChilds}
                                                    onChange={this.onValueChange}/>
                                             </div>
                                       </div>
 
                                       <div class="form-group">
                                             <label class="col-md-3 control-label">Blood Type</label>
                                             <div class="col-md-7 col-sm-12 required">
                                                 <select class="form-control" name="bloodType"
                                                    value={this.state.bloodType} 
                                                    onChange={this.onValueChange}>
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
                                                         <input class="form-control" type="text" name="address" 
                                                            value={this.state.address} 
                                                            onChange={this.onValueChange}/>
                                                     </div>
                                                     <div class="col-md-2 col-sm-1">
                                                     <span style={errStyle}>{this.state.error.address}</span>
                                                     </div>
                                                 </div>
 
                                                 <div class="form-group">
                                                     <label class="col-md-3 control-label">City</label>
                                                     <div class="col-md-7 col-sm-12 required">
                                                         <input class="form-control" type="text" name="city" 
                                                              value={this.state.city} 
                                                              onChange={this.onValueChange}/>
                                                     </div>
                                                     <div class="col-md-2 col-sm-1">
                                                     <span style={errStyle}>{this.state.error.city}</span>
                                                     </div>
                                                 </div>
 
                                                 <div class="form-group">
                                                     <label class="col-md-3 control-label">Province</label>
                                                     <div class="col-md-7 col-sm-12 required">
                                                         <input class="form-control" type="text" name="province" 
                                                              value={this.state.province} 
                                                              onChange={this.onValueChange}/>
                                                     </div>
                                                     <div class="col-md-2 col-sm-1">
                                                     <span style={errStyle}>{this.state.error.province}</span>
                                                     </div>
                                                 </div>
 
                                                 <div class="form-group">
                                                     <label class="col-md-3 control-label">Zip Code</label>
                                                     <div class="col-md-7 col-sm-12 required">
                                                         <input class="form-control" type="text" name="zipCode" 
                                                               value={this.state.zipCode} 
                                                               onChange={this.onValueChange}/>
                                                     </div>
                                                     <div class="col-md-2 col-sm-1">
                                                     <span style={errStyle}>{this.state.error.zipCode}</span>
                                                     </div>
                                                 </div>
 
                                                 <div class="form-group">
                                                     <label class="col-md-3 control-label">Nationality</label>
                                                     <div class="col-md-7 col-sm-12 required">
                                                         <input class="form-control" type="text" name="nationality" 
                                                                value={this.state.nationality} 
                                                                onChange={this.onValueChange}/>
                                                     </div>
                                                     <div class="col-md-2 col-sm-1">
                                                     <span style={errStyle}>{this.state.error.nationality}</span>
                                                     </div>
                                                 </div>
 
                                                 <div class="form-group">
                                                     <label class="col-md-3 control-label">KTP Number</label>
                                                     <div class="col-md-7 col-sm-12 required">
                                                         <input class="form-control" type="text" name="nationalIdentityId" 
                                                                value={this.state.nationalIdentityId} 
                                                                onChange={this.onValueChange}/>
                                                     </div>
                                                     <div class="col-md-2 col-sm-1">
                                                     <span style={errStyle}>{this.state.error.nationalIdentityId}</span>
                                                     </div>
                                                 </div>
 
                                                 <div class="form-group">
                                                     <label class="col-md-3 control-label">Phone</label>
                                                     <div class="col-md-7 col-sm-12 required">
                                                         <input class="form-control" type="text" name="phone" 
                                                            value={this.state.phone} 
                                                            onChange={this.onValueChange}/>
                                                     </div>
                                                     <div class="col-md-2 col-sm-1">
                                                     <span style={errStyle}>{this.state.error.phone}</span>
                                                     </div>
                                                 </div>
 
                                                 <div class="form-group">
                                                     <label class="col-md-3 control-label">E-Mail</label>
                                                     <div class="col-md-7 col-sm-12 required">
                                                         <input class="form-control" type="text" name="email"
                                                             value={this.state.email} 
                                                             onChange={this.onValueChange}/>
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
                                                         <select class="form-control" name="branchId" 
                                                            value={this.state.branchId} 
                                                            onChange={this.onValueChange}>
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
                                                         <select class="form-control" name="departmentId" 
                                                            value={this.state.departmentId} 
                                                            onChange={this.onValueChange}>
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
                                                         <select class="form-control" name="jobTitleId" 
                                                            value={this.state.jobTitleId} 
                                                            onChange={this.onValueChange}>
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
                                                             <input type="text" class="form-control" 
                                                                value={moment(this.state.joinDate).format("MM/DD/YYYY")}
                                                                ref={this.joinDate}/>
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
                                                         <select class="form-control" name="workScheduleId" 
                                                            value={this.state.workScheduleId} 
                                                            onChange={this.onValueChange}>
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
                                                         <select class="form-control" name="employmentStatus" 
                                                            value={this.state.employmentStatus} 
                                                            onChange={this.onValueChange}>
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
                                                         <input class="form-control" type="text" name="basicSalary" 
                                                            value={this.state.basicSalary} 
                                                            onChange={this.onValueChange}/>
                                                     </div>
                                                     <div class="col-md-2 col-sm-1">
                                                     <span style={errStyle}>{this.state.error.basicSalary}</span>
                                                     </div>
                                                 </div>
 
                                                 <div class="form-group">
                                                     <label class="col-md-3 control-label">Payment Type</label>
                                                     <div class="col-md-7 col-sm-12 required">
                                                         <select class="form-control" name="paymentType" 
                                                            value={this.state.paymentType} 
                                                            onChange={this.onValueChange}>
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
                                                         <input class="form-control" type="text" name="bankName" 
                                                             value={this.state.bankName} 
                                                             onChange={this.onValueChange}/>
                                                     </div>
                                                     <div class="col-md-2 col-sm-1">
                                                     <span style={errStyle}>{this.state.error.bankName}</span>
                                                     </div>
                                                 </div>
 
                                                 <div class="form-group">
                                                     <label class="col-md-3 control-label">Bank Account</label>
                                                     <div class="col-md-7 col-sm-12 required">
                                                         <input class="form-control" type="text" name="bankAccount" 
                                                            value={this.state.bankAccount} 
                                                            onChange={this.onValueChange}/>
                                                     </div>
                                                     <div class="col-md-2 col-sm-1">
                                                     <span style={errStyle}>{this.state.error.bankAccount}</span>
                                                     </div>
                                                 </div>
 
                                                 <div class="form-group">
                                                     <label class="col-md-3 control-label">NPWP</label>
                                                     <div class="col-md-7 col-sm-12 required">
                                                         <input class="form-control" type="text" name="npwp" 
                                                            value={this.state.npwp} 
                                                            onChange={this.onValueChange}/>
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
                                         <a class="btn btn-link text-left" href="#" onClick={this.cancelUpdate}>Cancel</a>
                                         <button type="button" onClick={this.updateEmployee} class="btn btn-primary"><i class="fa fa-check icon-white"></i> Update</button>
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