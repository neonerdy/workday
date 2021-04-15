

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
 

export class WorkScheduleEdit extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            error: {},
            workSchedules: [],
            id: '',
            scheduleName: '',
            scheduleIn: '',
            scheduleOut: '',
            note: ''
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        this.getWorkScheduleById(id);
    }
    

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    getWorkScheduleById = (id) => {
        axios.get(config.serverUrl + "/api/workschedule/getbyid/" + id).then(response=> {
            this.setState({
                id: response.data.id,
                scheduleName: response.data.scheduleName,
                scheduleIn: response.data.scheduleIn,
                scheduleOut: response.data.scheduleOut,
                note: response.data.note
            })
        });
    }


    getAllWorkSchedules = () => {
        axios.get(config.serverUrl + "/api/workschedule/getall").then(response=> {
            this.setState({
                workSchedules: response.data
            })
        });
    }



    validate = () => {

        let isValid = true;
        let error = {};

        if (this.state.scheduleName == '') {
            error.scheduleName = 'is required';
            isValid = false;
        }
        if (this.state.scheduleIn == '') {
            error.scheduleIn = 'is required';
            isValid = false;
        }
        if (this.state.scheduleOut == '') {
            error.scheduleOut = 'is required';
            isValid = false;
        }


        this.setState({
            error: error 
        })

        return isValid;

    }


    updateWorkSchedule = () => {
        
        let isValid = this.validate();
        if (isValid) {
     
            let workSchedule = {
                id: this.state.id,
                scheduleName: this.state.scheduleName,
                scheduleIn: this.state.scheduleIn,
                scheduleOut: this.state.scheduleOut,
                note: this.state.note
            }

            this.setState({
                isSaving: true
            })

            axios.put(config.serverUrl + "/api/workschedule/update", workSchedule).then(response=> {
                this.setState({
                    isSaving: false
                })                
                this.getAllWorkSchedules();
                this.props.history.push("/master-data");
            })
        }
    }


    
    cancelUpdate = () => {
        this.props.history.push("/master-data");
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
                        <h1>Edit Work Schedule</h1>
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
                            <label class="col-md-3 control-label">Schedule Name</label>
                            <div class="col-md-7 col-sm-12 required">
                                <input class="form-control" type="text" name="scheduleName" value={this.state.scheduleName} 
                                    onChange={this.onValueChange}/>
                            </div>
                            &nbsp;&nbsp;<span style={errStyle}>{this.state.error.scheduleName}</span>
                        </div>

                        <div class="form-group">
                            <label class="col-md-3 control-label">Schedule In</label>
                            <div class="col-md-7 col-sm-12 required">
                                <input class="form-control" type="text" name="scheduleIn" value={this.state.scheduleIn} 
                                    onChange={this.onValueChange}/>
                            </div>
                            &nbsp;&nbsp;<span style={errStyle}>{this.state.error.scheduleIn}</span>
                        </div>

                        <div class="form-group">
                            <label class="col-md-3 control-label">Schedule In</label>
                            <div class="col-md-7 col-sm-12 required">
                                <input class="form-control" type="text" name="scheduleOut" value={this.state.scheduleOut} 
                                    onChange={this.onValueChange}/>
                            </div>
                            &nbsp;&nbsp;<span style={errStyle}>{this.state.error.scheduleOut}</span>
                        </div>


                        <div class="form-group">
                            <label class="col-md-3 control-label">Note</label>
                            <div class="col-md-7 col-sm-12">
                                <input class="form-control" type="text" name="note" value={this.state.note} onChange={this.onValueChange}/>
                            </div>
                        </div>

                        </form>

                          <div class="box-footer text-right">
                            <a class="btn btn-link text-left" href="#" onClick={this.cancelUpdate}>Cancel</a>
                            <button type="button" onClick={this.updateWorkSchedule} class="btn btn-primary"><i class="fa fa-check icon-white"></i> Update</button>
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