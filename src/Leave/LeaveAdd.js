

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



export class LeaveAdd extends Component
{
    constructor(props) {
        super(props);

        this.startDate = React.createRef();
        this.endDate = React.createRef();

        this.state = {
            error: {},
            employees: [],
            leaveTypes: [],
            employeeId: '',
            leaveTypeId: '',
            startDate: '',
            endDate: '',
            note: '',
            approvedDate: ''
        }
    }


    componentDidMount() {
        this.getAllEmployees();
        this.getAllLeaveTypes();
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

    getAllLeaveTypes = () => {
        axios.get(config.serverUrl + "/api/leavetype/getall").then(response=> {
            this.setState({
                leaveTypes: response.data
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
        if (this.state.leaveTypeId == '') {
            error.leaveTypeId = 'is required';
            isValid = false;
        }
        if (this.startDate.current.value === '') {
            error.startDate = 'is required';
            isValid = false;
        }
        if (this.endDate.current.value === '') {
            error.endDate = 'is required';
            isValid = false;
        }



        this.setState({
            error: error 
        })

        return isValid;

    }


    submitLeave = () => {
        
        let isValid = this.validate();
        if (isValid) {
     
            let leave = {
                employeeId: this.state.employeeId,
                leaveTypeId: this.state.leaveTypeId,
                startDate:  new Date(moment(this.startDate.current.value).add(1,'d')),
                endDate: new Date(moment(this.endDate.current.value).add(1,'d')),
                note: this.state.note,
                approvedDate: new Date(moment("01/01/1900"))
            }

            this.setState({
                isSaving: true
            })

            axios.post(config.serverUrl + "/api/leave/save",leave).then(response=> {
                this.setState({
                    isSaving: false
                })                
                this.props.history.push("/leave");
            
            })

        }
        
    }


    cancelAdd = () => {
        this.props.history.push("/leave");
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
                        <h1>Request Leave</h1>
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
                            <label class="col-md-3 control-label">Leave Type</label>
                            <div class="col-md-7 col-sm-12 required">
                                <select class="form-control" name="leaveTypeId" onChange={this.onValueChange}>
                                    <option>Select Leave Type</option>
                                    {this.state.leaveTypes.map(lt=> 
                                        <option value={lt.id}>{lt.leaveTypeName}</option>
                                    )}
                                </select>
                            </div>
                            &nbsp;&nbsp;&nbsp;&nbsp;<span style={errStyle}>{this.state.error.leaveTypeId}</span>
                        </div>
                        
                      
                        <div class="form-group">
                            <label class="col-md-3 control-label">Start Date</label>
                            <div class="col-md-7 col-sm-12 required">
                                <div class="input-group date" data-provide="datepicker" data-date-autoclose="true" data-date-today-highlight="true">
                                    <input type="text" class="form-control" ref={this.startDate}/>
                                    <div class="input-group-addon">
                                        <span class="fa fa-calendar"></span>
                                    </div>
                                </div>
                              </div>
                            <div class="col-md-2 col-sm-1">
                            <span style={errStyle}>{this.state.error.startDate}</span>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-md-3 control-label">End Date</label>
                            <div class="col-md-7 col-sm-12 required">
                                <div class="input-group date" data-provide="datepicker" data-date-autoclose="true" data-date-today-highlight="true">
                                    <input type="text" class="form-control" ref={this.endDate}/>
                                    <div class="input-group-addon">
                                        <span class="fa fa-calendar"></span>
                                    </div>
                                </div>
                              </div>
                            <div class="col-md-2 col-sm-1">
                            <span style={errStyle}>{this.state.error.endDate}</span>
                            </div>
                        </div>



                        <div id="initial" class="form-group">
                            <label class="col-md-3 control-label">Note</label>
                            <div class="col-md-7 col-sm-12">
                                <input class="form-control" type="text" name="note" onChange={this.onValueChange}/>
                            </div>
                            &nbsp;&nbsp;<span style={errStyle}>{this.state.error.note}</span>
                        </div>
                        
                        

                        </form>

                          <div class="box-footer text-right">
                            <a class="btn btn-link text-left" href="#" onClick={this.cancelAdd}>Cancel</a>
                            <button type="button" onClick={this.submitLeave} class="btn btn-primary"><i class="fa fa-check icon-white"></i> Submit</button>
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