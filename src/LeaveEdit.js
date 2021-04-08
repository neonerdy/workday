

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
 import './App.css';
 import { Footer } from './Footer';
 import { Header } from './Header';
 import { NavBar } from './NavBar';
  import axios from 'axios';
 import config from './Config';
 import moment from 'moment';



export class LeaveEdit extends Component
{
    constructor(props) {
        super(props);

        this.startDate = React.createRef();
        this.endDate = React.createRef();

        this.state = {
            error: {},
            employees: [],
            leaveTypes: [],
            id: '',
            employeeId: '',
            leaveTypeId: '',
            startDate: '',
            endDate: '',
            note: '',
            status: '',
            createdDate: '',
            approvedDate: '',
            isTaken: ''
        }
    }


    componentDidMount() {
        
        let id = this.props.match.params.id;

        this.getAllEmployees();
        this.getAllLeaveTypes();

        this.getLeaveById(id);

    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    getLeaveById = (id) => {
        axios.get(config.serverUrl + "/api/leave/getbyid/" + id).then(response=> {
            this.setState({
                id: response.data.id,
                employeeId: response.data.employeeId,
                leaveTypeId: response.data.leaveTypeId,
                startDate: response.data.startDate,
                endDate: response.data.endDate,
                note: response.data.note,
                status: response.data.status,
                createdDate: response.data.createdDate,
                approvedDate: response.data.approvedDate,
                isTaken: response.data.isTaken
            })
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
            error.employeeId = 'is required';
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


    updateLeave = () => {
        
        let isValid = this.validate();
        if (isValid) {
     
            let leave = {
                id: this.state.id,
                employeeId: this.state.employeeId,
                leaveTypeId: this.state.leaveTypeId,
                startDate:  new Date(moment(this.startDate.current.value).add(1,'d')),
                endDate: new Date(moment(this.endDate.current.value).add(1,'d')),
                note: this.state.note,
                status: this.state.status,
                createdDate: new Date(moment(this.state.createdDate)),
                approvedDate: new Date(moment(this.state.approvedDate)),
                isTaken: this.state.isTaken
            }

            this.setState({
                isSaving: true
            })

            axios.put(config.serverUrl + "/api/leave/update",leave).then(response=> {
                this.setState({
                    isSaving: false
                })                
                this.props.history.push("/leave");
            
            })

        }
        
    }


    cancelUpdate = () => {
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
                        <h1>Update Leave</h1>
                    </section>
                 
                    <section class="content">

                    <div class="row">
                       <div class="col-md-12">

                         <div class="box box-default">
                            
                            <div class="box-header with-border">
                                 <h3 class="box-title"></h3>
                                <div class="box-tools pull-right">
                                    {this.state.isSaving ? 
                                    <span><i className="fa fa-spinner fa-spin"></i>&nbsp;Updating ...</span>
                                    : null
                                    }
                                </div>

                                 
                            </div>

                            <br/><br/>

                      <form class="form-horizontal">
                      
                        <div class="form-group">
                            <label class="col-md-3 control-label">Requested For</label>
                            <div class="col-md-7 col-sm-12 required">
                                <select class="form-control" name="employeeId" value={this.state.employeeId} onChange={this.onValueChange}>
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
                                <select class="form-control" name="leaveTypeId" value={this.state.leaveTypeId} onChange={this.onValueChange}>
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
                                    <input type="text" class="form-control" 
                                    value={moment(this.state.startDate).format("MM/DD/YYYY")}
                                    ref={this.startDate}/>
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
                                    <input type="text" class="form-control" 
                                    value={moment(this.state.endDate).format("MM/DD/YYYY")}
                                    ref={this.endDate}/>
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
                                <input class="form-control" type="text" name="note" value={this.state.note} onChange={this.onValueChange}/>
                            </div>
                            &nbsp;&nbsp;<span style={errStyle}>{this.state.error.note}</span>
                        </div>
                        
                        

                        </form>

                          <div class="box-footer text-right">
                            <a class="btn btn-link text-left" href="#" onClick={this.cancelUpdate}>Cancel</a>
                            <button type="button" onClick={this.updateLeave} class="btn btn-primary"><i class="fa fa-check icon-white"></i> Submit</button>
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