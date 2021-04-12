

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



export class JobTitleAdd extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            error: {},
            jobTitles: [],
            jobTitleName: '',
            jobLevel: '',
            description: '',
        }
    }

    

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    getAllJobTitles = () => {
        axios.get(config.serverUrl + "/api/jobtitle/getall").then(response=> {
            this.setState({
                jobTitles: response.data
            })
        });
    }



    validate = () => {

        let isValid = true;
        let error = {};

        if (this.state.jobTitleName == '') {
            error.jobTitleName = 'is required';
            isValid = false;
        }
        if (this.state.jobLevel == '') {
            error.jobLevel = 'is required';
            isValid = false;
        }

        this.setState({
            error: error 
        })

        return isValid;

    }


    saveJobTitle = () => {
        
        let isValid = this.validate();
        if (isValid) {
     
            let jobTitle = {
                jobTitleName: this.state.jobTitleName,
                jobLevel: this.state.jobLevel,
                description: this.state.description,
            }

            this.setState({
                isSaving: true
            })

            axios.post(config.serverUrl + "/api/jobtitle/save", jobTitle).then(response=> {
                this.setState({
                    isSaving: false
                })                
                this.getAllJobTitles();
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
                        <h1>Add Department</h1>
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
                      
                       

                        <div id="initial" class="form-group">
                            <label class="col-md-3 control-label">Job Title Name</label>
                            <div class="col-md-7 col-sm-12 required">
                                <input class="form-control" type="text" name="jobTitleName" onChange={this.onValueChange}/>
                            </div>
                            &nbsp;&nbsp;<span style={errStyle}>{this.state.error.jobTitleName}</span>
                        </div>

                        <div id="initial" class="form-group">
                            <label class="col-md-3 control-label">Description</label>
                            <div class="col-md-7 col-sm-12">
                                <input class="form-control" type="text" name="description" onChange={this.onValueChange}/>
                            </div>
                            &nbsp;&nbsp;<span style={errStyle}>{this.state.error.description}</span>
                        </div>

                        
                        </form>

                          <div class="box-footer text-right">
                            <a class="btn btn-link text-left" href="#" onClick={this.cancelAdd}>Cancel</a>
                            <button type="button" onClick={this.saveJobTitle} class="btn btn-primary"><i class="fa fa-check icon-white"></i> Save</button>
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