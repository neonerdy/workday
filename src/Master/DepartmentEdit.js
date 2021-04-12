

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


export class DepartmentEdit extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            error: {},
            departments: [],
            id: '',
            departmentName: '',
            description: '',
        }
    }

    
    componentDidMount() {
        let id = this.props.match.params.id;
        this.getDepartmentById(id);
    }



    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    getDepartmentById = (id) => {
        axios.get(config.serverUrl + "/api/department/getbyid/" + id).then(response=> {
            this.setState({
                id: response.data.id,
                departmentName: response.data.departmentName,
                description: response.data.description,
            })
        });
    }


    getAllDepartments = () => {
        axios.get(config.serverUrl + "/api/department/getall").then(response=> {
            this.setState({
                departments: response.data
            })
        });
    }



    validate = () => {

        let isValid = true;
        let error = {};

        if (this.state.departmentName == '') {
            error.departmentName = 'is required';
            isValid = false;
        }
      
        this.setState({
            error: error 
        })

        return isValid;

    }


    updateDepartment = () => {
        
        let isValid = this.validate();
        if (isValid) {
     
            let department = {
                id: this.state.id,
                departmentName: this.state.departmentName,
                description: this.state.description,
            }

            this.setState({
                isSaving: true
            })

            axios.put(config.serverUrl + "/api/department/update",department).then(response=> {
                this.setState({
                    isSaving: false
                })                
                this.getAllDepartments();
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
                        <h1>Update Department</h1>
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
                            <label class="col-md-3 control-label">Department Name</label>
                            <div class="col-md-7 col-sm-12 required">
                                <input class="form-control" type="text" name="departmentName" value={this.state.departmentName} onChange={this.onValueChange}/>
                            </div>
                            &nbsp;&nbsp;<span style={errStyle}>{this.state.error.departmentName}</span>
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
                            <button type="button" onClick={this.updateDepartment} class="btn btn-primary"><i class="fa fa-check icon-white"></i> Update</button>
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