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
import { Family } from './Family';
import { FamilyAdd } from './FamilyAdd';
import { FamilyEdit } from './FamilyEdit';
import { EducationAdd } from './EducationAdd';
import { EducationEdit } from './EducationEdit';
import { EmployeeInfo } from './EmployeeInfo';
import { CourseAdd } from './CourseAdd';
import { CourseEdit } from './CourseEdit';
import { SalaryAdd } from './SalaryAdd';
import { SalaryEdit } from './SalaryEdit';
import { InsuranceAdd } from './InsuranceAdd';
import { InsuranceEdit } from './InsuranceEdit';
import { Education } from './Education';
import { Course } from './Course';
import { Salary } from './Salary';
import { Insurance } from './Insurance';




export class EmployeeDetail extends Component
{
    constructor(props) {
        super(props);

        this.courseStartDate = React.createRef();
        this.courseEndDate = React.createRef();
        this.insuranceEffectiveDate = React.createRef();
 
        this.state = {
            employeeFamilies: [],
            employeeEducations: [],
            employeeCourses: [],
            employeeSalaries: [],
            salaryComponents: [],
            employeeInsurances: [],
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
            employeeId: '',
            
            employeeFamilyId: '',
            familyName: '',
            familyRelationship: '',
            familyAddress: '',
            familyPhone: '' ,

            employeeEducationId: '',
            grade: '',
            institutionName: '',
            majors: '',
            startYear: '',
            endYear: '',

            employeeCourseId: '',
            courseName: '',
            provider: '',
            startDate: '',
            endDate: '',
            certificate: '',

            employeeSalaryId: '',
            employeeId: '',
            salaryComponentId: '',
            amount: '',

            employeeInsuranceId: '',
            insuranceName: '',
            insuranceNumber: '',
            effectiveDate: ''

        }
    }


    componentDidMount() {

        let id = this.props.match.params.id;
        
        this.getEmployeeById(id);
        this.getEmployeeFamilies(id);
        this.getEmployeeEducations(id);
        this.getEmployeeCourses(id);
        this.getEmployeeSalaries(id);
        this.getEmployeeInsurances(id);

        this.getSalaryComponents();
    }


    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    getSalaryComponents = () => {
        axios.get(config.serverUrl + "/api/salarycomponent/getall").then(response=> {
            this.setState({
              salaryComponents: response.data
            })
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


    getEmployeeEducations = (id) => {
        axios.get(config.serverUrl + "/api/employeeeducation/getbyemployeeid/" + id).then(response=> {
            this.setState({ 
                employeeEducations: response.data
            })
        })
    }


    getEmployeeCourses = (id) => {
        axios.get(config.serverUrl + "/api/employeecourse/getbyemployeeid/" + id).then(response=> {
            this.setState({ 
                employeeCourses: response.data
            })
        })
    }


    getEmployeeSalaries = (id) => {
        axios.get(config.serverUrl + "/api/employeesalary/getbyemployeeid/" + id).then(response=> {
            this.setState({ 
                employeeSalaries: response.data
            })
        })
    }


    getEmployeeInsurances = (id) => {
        axios.get(config.serverUrl + "/api/employeeinsurance/getbyemployeeid/" + id).then(response=> {
            this.setState({ 
                employeeInsurances: response.data
            })
        })
    }




    // EMPLOYEE FAMILY


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


    // EMPLOYEE EDUCATION


    saveEducation = () => {

        let employeeEducation = {
            employeeId: this.state.id,
            grade: this.state.grade,
            institutionName: this.state.institutionName,
            majors: this.state.majors,
            startYear: this.state.startYear,
            endYear: this.state.endYear 
        }

        axios.post(config.serverUrl + "/api/employeeeducation/save", employeeEducation).then(response=> {
            this.getEmployeeEducations(this.state.id);
        })
       
     }


     editEducation = (id) =>{

        axios.get(config.serverUrl + "/api/employeeeducation/getbyid/" + id).then(response=> {
            this.setState({
                employeeEducationId: response.data.employeeEducationId,
                employeeId: response.data.employeeId,
                grade: response.data.grade,
                institutionName: response.data.institutionName,
                majors: response.data.majors,
                startYear: response.data.startYear,
                endYear: response.data.endYear
            })
        })

     }


     updateEducation = () => {

        let employeeEducation = {
            employeeEducationId: this.state.employeeEducationId,
            employeeId: this.state.employeeId,
            grade: this.state.grade,
            institutionName: this.state.institutionName,
            majors: this.state.majors,
            startYear: this.state.startYear,
            endYear: this.state.endYear
        }

        axios.put(config.serverUrl + "/api/employeeeducation/update", employeeEducation).then(response=> {
           this.getEmployeeEducations(this.state.id);
        })

     }


     deleteEducation = (id) => {

       axios.delete(config.serverUrl + "/api/employeeeducation/delete/" + id).then(response=> {
           this.getEmployeeEducations(this.state.id);
        })
     }

     getEducationId = (id) => {
        this.setState({
            employeeEducationId: id,
        })
    }



     // EMPLOYEE COURSE

     saveCourse = () => {

        let employeeCourse = {
            employeeId: this.state.id,
            courseName: this.state.courseName,
            provider: this.state.provider,
            startDate:  new Date(moment(this.courseStartDate.current.value)),
            endDate: new Date(moment(this.courseEndDate.current.value)),
            certificate: this.state.certificate,
        }

        axios.post(config.serverUrl + "/api/employeecourse/save", employeeCourse).then(response=> {
            this.getEmployeeCourses(this.state.id);
        })
       
     }


     editCourse = (id) =>{

        axios.get(config.serverUrl + "/api/employeecourse/getbyid/" + id).then(response=> {
            this.setState({
                employeeCourseId: response.data.employeeCourseId,
                employeeId: response.data.employeeId,
                courseName: response.data.courseName,
                provider: response.data.provider,
                startDate: response.data.startDate,
                endDate: response.data.endDate,
                certificate: response.data.certificate,
            })
        })

     }


     updateCourse = () => {

        let employeeCourse = {
            employeeCourseId: this.state.employeeCourseId,
            employeeId: this.state.employeeId,
            courseName: this.state.courseName,
            provider: this.state.provider,
            startDate:  new Date(moment(this.courseStartDate.current.value)),
            endDate: new Date(moment(this.courseEndDate.current.value)),
            certificate: this.state.certificate,
        }

        axios.put(config.serverUrl + "/api/employeecourse/update", employeeCourse).then(response=> {
           this.getEmployeeCourses(this.state.id);
        })

     }


     deleteCourse = (id) => {

       axios.delete(config.serverUrl + "/api/employeecourse/delete/" + id).then(response=> {
           this.getEmployeeCourses(this.state.id);
        })
     }

     getCourseId = (id) => {
        this.setState({
            employeeCourseId: id,
        })
    }



    
    
    // EMPLOYEE SALARY

    saveCourse = () => {

        let employeeSalary = {
            employeeId: this.state.id,
            salaryComponentId: this.state.salaryComponentId,
            amount: this.state.amount
        }

        axios.post(config.serverUrl + "/api/employeesalary/save", employeeSalary).then(response=> {
            this.getEmployeeSalaries(this.state.id);
        })
    
    }


    editSalary = (id) =>{

        axios.get(config.serverUrl + "/api/employeesalary/getbyid/" + id).then(response=> {
            this.setState({
                employeeSalaryId: response.data.employeeSalaryId,
                employeeId: response.data.employeeId,
                salaryComponentId: response.data.salaryComponentId,
                amount: response.data.amount
            })
        })

    }


    updateSalary = () => {

        let employeeSalary = {
            employeeSalaryId: this.state.employeeSalaryId,
            employeeId: this.state.employeeId,
            salaryComponentId: this.state.salaryComponentId,
            amount: this.state.amount
        }

        axios.put(config.serverUrl + "/api/employeesalary/update", employeeSalary).then(response=> {
            this.getEmployeeSalaries(this.state.id);
        })

    }


    deleteSalary = (id) => {

        axios.delete(config.serverUrl + "/api/employeesalary/delete/" + id).then(response=> {
            this.getEmployeeSalaries(this.state.id);
        })
    }

    
    getSalaryId = (id) => {
        this.setState({
            employeeSalaryId: id,
        })
    }



    // EMPLOYEE INSURANCE

    saveInsurance = () => {


        let employeeInsurance = {
            employeeId: this.state.id,
            insuranceName: this.state.insuranceName,
            insuranceNumber: this.state.insuranceNumber,
            effectiveDate:  new Date(moment(this.insuranceEffectiveDate.current.value))
        }

        axios.post(config.serverUrl + "/api/employeeinsurance/save", employeeInsurance).then(response=> {
            this.getEmployeeInsurances(this.state.id);
        })
    
    }


    editInsurance = (id) =>{

        axios.get(config.serverUrl + "/api/employeeinsurance/getbyid/" + id).then(response=> {
            this.setState({
                employeeInsuranceId: response.data.employeeInsuranceId,
                employeeId: response.data.employeeId,
                insuranceName: response.data.insuranceName,
                insuranceNumber: response.data.insuranceNumber,
                effectiveDate: response.data.effectiveDate
            })
        })

    }


    updateInsurance = () => {

        let employeeInsurance = {
            employeeInsuranceId: this.state.employeeInsuranceId,
            employeeId: this.state.id,
            insuranceName: this.state.insuranceName,
            insuranceNumber: this.state.insuranceNumber,
            effectiveDate:  new Date(moment(this.insuranceEffectiveDate.current.value))
        }


        axios.put(config.serverUrl + "/api/employeeinsurance/update", employeeInsurance).then(response=> {
            this.getEmployeeInsurances(this.state.id);
        })

    }


    deleteInsurance = (id) => {

        axios.delete(config.serverUrl + "/api/employeeinsurance/delete/" + id).then(response=> {
            this.getEmployeeInsurances(this.state.id);
        })
    }

    
    getInsuranceId = (id) => {
        this.setState({
            employeeInsuranceId: id,
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

                      

                     {/* EMPLOYEE FAMILY */}

                      <FamilyAdd
                        onValueChange = {this.onValueChange}
                        saveFamily = {this.saveFamily}
                      />


                    
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


                      {/* EMPLOYEE EDUCATION */}

                     <EducationAdd 
                        onValueChange = {this.onValueChange}
                        saveEducation = {this.saveEducation}
                     />


                   <EducationEdit
                        employeeEducationId = {this.state.employeeEducationId}
                        grade = {this.state.grade}
                        institutionName = {this.state.institutionName}
                        majors = {this.state.majors}
                        startYear = {this.state.startYear}
                        endYear = {this.state.endYear}
                        onValueChange = {this.onValueChange}
                        updateEducation = {this.updateEducation}
                   />

                
                    {/* EMPLOYEE COURSE */}

                   <CourseAdd
                        startDate = {this.courseStartDate}
                        endDate = {this.courseEndDate}
                        onValueChange = {this.onValueChange}
                        saveCourse = {this.saveCourse}
                   />


                    <CourseEdit
                        employeeCourseId =  {this.state.employeeCourseId}
                        courseName = {this.state.courseName}
                        provider = {this.state.provider}
                        startDateValue = {moment(this.state.startDate).format("MM/DD/YYYY")} 
                        endDateValue = {moment(this.state.endDate).format("MM/DD/YYYY")}
                        startDate = {this.courseStartDate}
                        endDate = {this.courseEndDate}
                        certificate = {this.state.certificate}
                        onValueChange = {this.onValueChange}
                        updateCourse = {this.updateCourse}
                    />



                    {/* EMPLOYEE SALARY */}

                    <SalaryAdd
                        salaryComponents = {this.state.salaryComponents}
                        onValueChange = {this.onValueChange}
                        saveSalary = {this.saveCourse}
                    />

                    <SalaryEdit
                        salaryComponents = {this.state.salaryComponents}
                        employeeSalaryId = {this.state.employeeSalaryId}
                        salaryComponentId = {this.state.salaryComponentId}
                        amount = {this.state.amount}
                        onValueChange = {this.onValueChange}
                        updateSalary = {this.updateSalary}
                    />

                    
                     {/* EMPLOYEE INSURANCE */}

                    <InsuranceAdd
                        effectiveDate = {this.insuranceEffectiveDate}
                        onValueChange = {this.onValueChange}
                        saveInsurance = {this.saveInsurance}
                    />

                    <InsuranceEdit
                        employeeInsuranceId = {this.state.employeeInsuranceId}
                        insuranceName = {this.state.insuranceName}
                        insuranceNumber = {this.state.insuranceNumber}
                        effectiveDate = {this.insuranceEffectiveDate}
                        effectiveDateValue =  {moment(this.state.effectiveDate).format("MM/DD/YYYY")} 
                        onValueChange = {this.onValueChange}
                        updateInsurance = {this.updateInsurance}
                    />

                
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

                                 {/* EMPLOYEE INFO */}


                                 <EmployeeInfo
                                    fontStyle = {fontStyle} 
                                    departmentName = {this.state.departmentName}
                                    jobTitleName = {this.state.jobTitleName}
                                    joinDate = {moment(this.state.joinDate).format("MM/DD/YYYY")}
                                    employmentStatusIcon = {this.renderStatus(this.state.employmentStatus)}
                                    employmentStatus = {this.state.employmentStatus}
                                    birthPlace = {this.state.birthPlace}
                                    birthDate = {moment(this.state.birthDate).format("MM/DD/YYYY")}
                                    religion = {this.state.religion}
                                    bloodType = {this.state.bloodType}
                                    maritalStatus = {this.state.maritalStatus}
                                    address = {this.state.address}
                                    phone = {this.state.phone}
                                    email = {this.state.email}
                                 />


                            
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
                                                  
                                                  <Family 
                                                    employeeFamilies = {this.state.employeeFamilies}
                                                    editFamily = {this.editFamily}
                                                    getFamilyId = {this.getFamilyId}
                                                    deleteFamily = {this.deleteFamily}
                                                    employeeFamilyId = {this.state.employeeFamilyId}
                                                  />

                                            </div>


                                            <div class="tab-pane" id="tab_education">

                                                    
                                                <Education 
                                                    employeeEducations = {this.state.employeeEducations}
                                                    editEducation = {this.editEducation}
                                                    getEducationId = {this.getEducationId}
                                                    deleteEducation = {this.deleteEducation}
                                                    employeeEducationId = {this.state.employeeEducationId}
                                                />

                                            </div>


                                            <div class="tab-pane" id="tab_course">
                                            
                                                 <Course 
                                                    employeeCourses = {this.state.employeeCourses}
                                                    editCourse = {this.editCourse}
                                                    getCourseId = {this.getCourseId}
                                                    deleteCourse = {this.deleteCourse}
                                                    employeeCourseId = {this.state.employeeCourseId}
                                                />
                                            
                                            </div>


                                            <div class="tab-pane" id="tab_salaryComponent">
       
                                                 <Salary 
                                                    employeeSalaries = {this.state.employeeSalaries}
                                                    editSalary = {this.editSalary}
                                                    getSalaryId = {this.getSalaryId}
                                                    deleteSalary = {this.deleteSalary}
                                                    employeeSalaryId = {this.state.employeeSalaryId}
                                                />

                                             </div>


                                             <div class="tab-pane" id="tab_insurance">

                                                 <Insurance 
                                                    employeeInsurances = {this.state.employeeInsurances}
                                                    editInsurance = {this.editInsurance}
                                                    getInsuranceId = {this.getInsuranceId}
                                                    deleteInsurance = {this.deleteInsurance}
                                                    employeeInsuranceId = {this.state.employeeInsuranceId}
                                                 />

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