

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



export class AttendanceAdd extends Component
{
    constructor(props) {
        super(props);

        this.attendanceDate = React.createRef();
      
        this.state = {
            error: {},
            employees: [],
            workSchedules: [],
            employeeId: '',
            workScheduleId: '',
            attendanceDate: '',
            clockIn: '',
            clockOut: '',
            status: '',
            workDuration: '',
            note: ''
         }
    }


    componentDidMount() {
        this.getAllEmployees();
        this.getAllWorkSchedules();

    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    getAllEmployees = () => {
        axios.get(config.serverUrl + "/api/employee/getall").then(response=> {
            this.setState({
                employees: response.data
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



    validate = () => {

        let isValid = true;
        let error = {};

        if (this.state.employeeId == '') {
            error.employeeId = 'is required';
            isValid = false;
        }
        if (this.state.workScheduleId == '') {
            error.workScheduleId = 'is required';
            isValid = false;
        }
        if (this.attendanceDate.current.value === '') {
            error.attendanceDate = 'is required';
            isValid = false;
        }
        if (this.state.clockIn == '') {
            error.clockIn = 'is required';
            isValid = false;
        }
        if (this.state.clockOut == '') {
            error.clockOut = 'is required';
            isValid = false;
        }
       
        this.setState({
            error: error 
        })

        return isValid;

    }


    saveAttendance = () => {
        
        let isValid = this.validate();
        if (isValid) {
     
            let attendance = {
                employeeId: this.state.employeeId,
                workScheduleId: this.state.workScheduleId,
                attendanceDate: new Date(moment(this.attendanceDate.current.value)),
                clockIn: this.state.clockIn,
                clockOut: this.state.clockOut,
                status: "Submitted",
                workDuration: this.state.workDuration,
                note: this.state.note
            }

            this.setState({
                isSaving: true
            })

            axios.post(config.serverUrl + "/api/attendance/save",attendance).then(response=> {
                this.setState({
                    isSaving: false
                })                
                this.props.history.push("/attendance");
            })

        }
        
    }


    cancelAdd = () => {
        this.props.history.push("/attendance");
    }



    render() {

        const heightStyle = {
            minHeight: '959.8px'
        }

        let errStyle = {
            color: 'darkred'
        }

        return(
           <div class="wrapper">
                <Header/>
                <NavBar/>
              
                <div class="content-wrapper" style={heightStyle}>
                    <section class="content-header">
                        <h1>Add New Attendance</h1>
                    </section>
                 
                    <section class="content">

                    <div class="row">
                       <div class="col-md-12">

                         <div class="box box-default">
                            
                            <div class="box-header with-border">
                                 <h3 class="box-title"></h3>
                                <div class="box-tools pull-right">
                                    {this.state.isSaving ? 
                                    <span><i className="fa fa-spinner fa-spin"></i>&nbsp;Saving ...</span>
                                    : null
                                    }
                                </div>

                                 
                            </div>

                            <br/><br/>

                      <form class="form-horizontal">
                      
                        <div class="form-group">
                            <label class="col-md-3 control-label">Requested For</label>
                            <div class="col-md-7 col-sm-12 required">
                                <select class="form-control" name="employeeId" onChange={this.onValueChange}>
                                    <option>Select Employee</option>
                                    {this.state.employees.map(e=> 
                                        <option value={e.id}>{e.employeeName}</option>
                                    )}
                                </select>
                            </div>
                            &nbsp;&nbsp;&nbsp;&nbsp;<span style={errStyle}>{this.state.error.employeeId}</span>
                        </div>

                        <div class="form-group">
                            <label class="col-md-3 control-label">Work Schedule</label>
                            <div class="col-md-7 col-sm-12 required">
                                <select class="form-control" name="workScheduleId" onChange={this.onValueChange}>
                                    <option>Select Work Schedule</option>
                                    {this.state.workSchedules.map(ws=> 
                                        <option value={ws.id}>{ws.scheduleName}</option>
                                    )}
                                </select>
                            </div>
                            &nbsp;&nbsp;&nbsp;&nbsp;<span style={errStyle}>{this.state.error.workScheduleId}</span>
                        </div>
                        
                      
                        <div class="form-group">
                            <label class="col-md-3 control-label">Attendance Date</label>
                            <div class="col-md-7 col-sm-12 required">
                                <div class="input-group date" data-provide="datepicker" data-date-autoclose="true" data-date-today-highlight="true">
                                    <input type="text" class="form-control" ref={this.attendanceDate}/>
                                    <div class="input-group-addon">
                                        <span class="fa fa-calendar"></span>
                                    </div>
                                </div>
                              </div>
                            <div class="col-md-2 col-sm-1">
                            <span style={errStyle}>{this.state.error.attendanceDate}</span>
                            </div>
                        </div>


                        <div id="initial" class="form-group">
                            <label class="col-md-3 control-label">Clock In</label>

                            <div class="col-md-7 col-sm-12 required">
                                <input class="form-control" type="text" name="clockIn" onChange={this.onValueChange}/>
                            </div>

                            &nbsp;&nbsp;<span style={errStyle}>{this.state.error.clockIn}</span>
                        </div>

                        
                        <div id="initial" class="form-group">
                            <label class="col-md-3 control-label">Clock Out</label>
                            <div class="col-md-7 col-sm-12 required">
                                <input class="form-control" type="text" name="clockOut" onChange={this.onValueChange}/>
                            </div>
                            &nbsp;&nbsp;<span style={errStyle}>{this.state.error.clockOut}</span>
                        </div>

                        <div id="initial" class="form-group">
                            <label class="col-md-3 control-label">Note</label>
                            <div class="col-md-7 col-sm-12">
                                <input class="form-control" type="text" name="note" onChange={this.onValueChange}/>
                            </div>
                        </div>
                        
                    

                        </form>

                          <div class="box-footer text-right">
                            <a class="btn btn-link text-left" href="#" onClick={this.cancelAdd}>Cancel</a>
                            <button type="button" onClick={this.saveAttendance} class="btn btn-primary"><i class="fa fa-check icon-white"></i> Save</button>
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