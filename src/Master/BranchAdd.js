

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



export class BranchAdd extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            error: {},
            branchName: '',
            province: '',
            city: ''
        }
    }


    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    validate = () => {

        let isValid = true;
        let error = {};

        if (this.state.branchName == '') {
            error.branchName = 'is required';
            isValid = false;
        }
      
        this.setState({
            error: error 
        })

        return isValid;

    }


    saveBranch = () => {
        
        let isValid = this.validate();
        if (isValid) {
     
            let branch = {
                branchName: this.state.branchName,
                province: this.state.province,
                city: this.state.city
            }

            this.setState({
                isSaving: true
            })

            axios.post(config.serverUrl + "/api/branch/save",branch).then(response=> {
                this.setState({
                    isSaving: false
                })                
                this.props.history.push("/branch");
            
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
                        <h1>Add Branch</h1>
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
                            <label class="col-md-3 control-label">Branch Name</label>
                            <div class="col-md-7 col-sm-12 required">
                                <input class="form-control" type="text" name="branchName" onChange={this.onValueChange}/>
                            </div>
                            &nbsp;&nbsp;<span style={errStyle}>{this.state.error.branchName}</span>
                        </div>

                        <div id="initial" class="form-group">
                            <label class="col-md-3 control-label">Province</label>
                            <div class="col-md-7 col-sm-12">
                                <input class="form-control" type="text" name="province" onChange={this.onValueChange}/>
                            </div>
                            &nbsp;&nbsp;<span style={errStyle}>{this.state.error.province}</span>
                        </div>

                        <div id="initial" class="form-group">
                            <label class="col-md-3 control-label">City</label>
                            <div class="col-md-7 col-sm-12">
                                <input class="form-control" type="text" name="city" onChange={this.onValueChange}/>
                            </div>
                            &nbsp;&nbsp;<span style={errStyle}>{this.state.error.city}</span>
                        </div>

                        
                        </form>

                          <div class="box-footer text-right">
                            <a class="btn btn-link text-left" href="#" onClick={this.cancelAdd}>Cancel</a>
                            <button type="button" onClick={this.saveBranch} class="btn btn-primary"><i class="fa fa-check icon-white"></i> Save</button>
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