

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
 

export class WorkScheduleAdd extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            error: {},
            workSchedules: [],
            scheduleName: '',
            scheduleIn: '',
            scheduleOut: '',
            note: ''
        }
    }

    

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
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


    saveWorkSchedule = () => {
        
        let isValid = this.validate();
        if (isValid) {
     
            let workSchedule = {
                scheduleName: this.state.scheduleName,
                scheduleIn: this.state.scheduleIn,
                scheduleOut: this.state.scheduleOut,
                note: this.state.note
            }

            this.setState({
                isSaving: true
            })

            axios.post(config.serverUrl + "/api/workschedule/save", workSchedule).then(response=> {
                this.setState({
                    isSaving: false
                })                
                this.getAllWorkSchedules();
                this.props.history.push("/master-data");
            })
        }
    }


    
    cancelAdd = () => {
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
                        <h1>Add Work Schedule</h1>
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
                            <label class="col-md-3 control-label">Schedule Name</label>
                            <div class="col-md-7 col-sm-12 required">
                                <input class="form-control" type="text" name="scheduleName" onChange={this.onValueChange}/>
                            </div>
                            &nbsp;&nbsp;<span style={errStyle}>{this.state.error.scheduleName}</span>
                        </div>

                        <div class="form-group">
                            <label class="col-md-3 control-label">Schedule In</label>
                            <div class="col-md-7 col-sm-12 required">
                                <input class="form-control" type="text" name="scheduleIn" onChange={this.onValueChange}/>
                            </div>
                            &nbsp;&nbsp;<span style={errStyle}>{this.state.error.scheduleIn}</span>
                        </div>

                        <div class="form-group">
                            <label class="col-md-3 control-label">Schedule In</label>
                            <div class="col-md-7 col-sm-12 required">
                                <input class="form-control" type="text" name="scheduleOut" onChange={this.onValueChange}/>
                            </div>
                            &nbsp;&nbsp;<span style={errStyle}>{this.state.error.scheduleOut}</span>
                        </div>


                        <div class="form-group">
                            <label class="col-md-3 control-label">Note</label>
                            <div class="col-md-7 col-sm-12">
                                <input class="form-control" type="text" name="note" onChange={this.onValueChange}/>
                            </div>
                        </div>

                        
                        </form>

                          <div class="box-footer text-right">
                            <a class="btn btn-link text-left" href="#" onClick={this.cancelAdd}>Cancel</a>
                            <button type="button" onClick={this.saveWorkSchedule} class="btn btn-primary"><i class="fa fa-check icon-white"></i> Save</button>
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