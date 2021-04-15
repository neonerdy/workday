

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


export class JobTitleEdit extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            error: {},
            jobTitles: [],
            id: '',
            jobTitleName: '',
            jobLevel: '',
            description: '',
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        this.getJobTitleById(id);
    }



    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    getJobTitleById = (id) => {
        axios.get(config.serverUrl + "/api/jobtitle/getbyid/" + id).then(response=> {
            this.setState({
                id: response.data.id,
                jobTitleName: response.data.jobTitleName,
                jobLevel: response.data.jobLevel,
                description: response.data.description
            })
        });
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


    updateJobTitle = () => {
        
        let isValid = this.validate();
        if (isValid) {
     
            let jobTitle = {
                id: this.state.id,
                jobTitleName: this.state.jobTitleName,
                jobLevel: this.state.jobLevel,
                description: this.state.description,
            }

            this.setState({
                isSaving: true
            })

            axios.put(config.serverUrl + "/api/jobtitle/update", jobTitle).then(response=> {
                this.setState({
                    isSaving: false
                })                
                this.getAllJobTitles();
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
                        <h1>Edit Job Title</h1>
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
                      
                       

                        <div id="initial" class="form-group">
                            <label class="col-md-3 control-label">Job Title Name</label>
                            <div class="col-md-7 col-sm-12 required">
                                <input class="form-control" type="text" name="jobTitleName" value={this.state.jobTitleName} 
                                    onChange={this.onValueChange}/>
                            </div>
                            &nbsp;&nbsp;<span style={errStyle}>{this.state.error.jobTitleName}</span>
                        </div>


                        <div class="form-group">
                            <label class="col-md-3 control-label">Level</label>
                            <div class="col-md-7 col-sm-12 required">
                                <select class="form-control" name="jobLevel" value={this.state.jobLevel} onChange={this.onValueChange}>
                                    <option>Select Level</option>
                                    <option value="Director">Director</option>
                                    <option value="Manager">Manager</option>
                                    <option value="Staff">Staff</option>
                                </select>
                            </div>
                            &nbsp;&nbsp;&nbsp;&nbsp;<span style={errStyle}>{this.state.error.jobLevel}</span>
                        </div>


                        <div id="initial" class="form-group">
                            <label class="col-md-3 control-label">Description</label>
                            <div class="col-md-7 col-sm-12">
                                <input class="form-control" type="text" name="description" value={this.state.description} onChange={this.onValueChange}/>
                            </div>
                            &nbsp;&nbsp;<span style={errStyle}>{this.state.error.description}</span>
                        </div>

                        
                        </form>

                          <div class="box-footer text-right">
                            <a class="btn btn-link text-left" href="#" onClick={this.cancelUpdate}>Cancel</a>
                            <button type="button" onClick={this.updateJobTitle} class="btn btn-primary"><i class="fa fa-check icon-white"></i> Update</button>
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