/*--------------------------------------------------
 *
 *  Task Master
 * 
 *  Task Manager For Software Development
 * 
 *  Version : 1.0
 *  Author  : Ariyanto
 *  E-mail  : neonerdy@gmail.com
 * 
 *  © 2019, Under Apache Licence  
 * 
 *--------------------------------------------------
 */

import React, {Component} from 'react';
import { Header } from './Header';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import axios from 'axios';
import config from './Config';

export class Employee extends Component
{
    constructor(props) {
        super(props);

        
        var userJson = localStorage.getItem("user");
        var user = JSON.parse(userJson)


        this.state = {
            employees: [],
            employeeName: ''
        }
    }

    componentDidMount() {
        this.getAllEmployees();
    }

    
    getAllEmployees = () => {
        axios.get(config.serverUrl + "/api/employee/getall").then(response=> {
            this.setState({
                employees: response.data
            })
        });
    }

  

    addEmployee =()=> {
        this.props.history.push("/add-employee");
    }

    editEmployee = (id) => {
        this.props.history.push("/edit-employee/" + id)
    }

    employeeDetail =(id)=> {
        this.props.history.push("/employee-detail/" + id);
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
        const popupStyle = {
            width: '800px'
        }
        const fontStyle = {
            fontWeight: 'normal'
        }

        return(
   
            <div class="wrapper">

            <Header/>

                <NavBar/>
               
                <div class="content-wrapper" style={heightStyle}>
                <section class="content-header">
                <h1>
                    Employees ({this.state.employees.length})
                </h1>
                <ol class="breadcrumb">
                    <button class="btn btn-primary" onClick={this.addEmployee}>Add New Employee</button>
                </ol>
                </section>
                <br></br>


           

                <div id="deletePeople" class="modal fade">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 class="modal-title">Delete</h4>
                            </div>
                            <div class="modal-body">
                                Are you sure want to delete {this.state.employeeName} ?
                            </div>
                            
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default pull-left"  data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Yes</button>
                            </div>
                        </div>
                    </div>
                </div>

                <section class="content">

                    <div class="box box-default">
                
                    <div class="box-body">

                        <div class="btn-group">
                                <button class="btn btn-default" type="button">Department</button>
                                <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" style={buttonStyle}>
                                <span class="caret"></span>
                                
                                </button>
                                <ul class="dropdown-menu" role="menu">
                                    <li><a href="#" onClick={()=>this.onCategoryFilter("All")}>All</a></li>
                                    <li><a href="#" onClick={()=>this.onCategoryFilter("Feature")}>Feature</a></li>
                                    <li><a href="#" onClick={()=>this.onCategoryFilter("Bug")}>Bug</a></li>
                                    <li><a href="#" onClick={()=>this.onCategoryFilter("Other")}>Other</a></li>
                                    
                                </ul>
                            </div>
                          
                        
                        <div class="pull-right">
                            <button class="btn btn-default" type="button" name="refresh" aria-label="refresh" title="Refresh">
                                <i class="fa fa-refresh"></i>
                            </button>
                            
                            <div class="btn-group">
                                <button class="btn btn-default" type="button">
                                    <i class="fa  fa-sort-alpha-asc"></i>&nbsp;Sort 
                                </button>
                                <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" style={buttonStyle}>
                                <span class="caret"></span>
                                
                                </button>
                                <ul class="dropdown-menu" role="menu">
                                    <li><a href="#" onClick={()=>this.sortTask("fullName")}>Full Name</a></li>
                                    <li><a href="#" onClick={()=>this.sortTask("role")}>Departement</a></li>
                                    <li><a href="#" onClick={()=>this.sortTask("role")}>Title</a></li>
                                    <li><a href="#" onClick={()=>this.sortTask("address")}>Address</a></li>
                                    <li><a href="#" onClick={()=>this.sortTask("address")}>City</a></li>
                                    <li><a href="#" onClick={()=>this.sortTask("phone")}>Phone</a></li>
                                    <li><a href="#" onClick={()=>this.sortTask("email")}>E-Mail</a></li>
                                </ul>
                            </div>

                            <div class="btn-group">
                                <button class="btn btn-default" type="button">
                                        <i class="fa fa-filter"></i>&nbsp;Filter
                                </button>
                                <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" style={buttonStyle}>
                                <span class="caret"></span>
                                
                                </button>
                                <ul class="dropdown-menu" role="menu">
                                    <li><a href="#">Probation</a></li>
                                    <li><a href="#">Contract</a></li>
                                    <li><a href="#">Permanent</a></li>
                                </ul>
                            </div>

                           
                              
                        </div>
                        
                        <div class="pull-right search">
                            <input class="form-control" type="text" placeholder="Search" onChange={this.onSearchChange}/>
                        </div>
                      
                        <br/><br/><br/>

                         <table id="table-to-xls" class="table table-hover">
                                    <tbody>
                                        <tr>
                                            <th><u>NIK</u></th>
                                            <th><u>EMPLOYEE NAME</u></th>
                                            <th><u>JOB TITLE</u></th>
                                            <th><u>ADDRESS</u></th>
                                            <th><u>PHONE</u></th>
                                            <th><u>E-MAIL</u></th>
                                            <th>ACTION</th>
                                        </tr>
                                        {this.state.employees.map(e=> 
                                        <tr>
                                            <td>{this.renderNik(e.employmentStatus,e.employeeCode)}</td>
                                            <td><a href="#" onClick={()=>this.employeeDetail(e.id)}>{e.employeeName}</a></td>
                                            <td>{e.jobTitle.jobTitleName}</td>
                                            <td>{e.address}</td>
                                            <td>{e.phone}</td>
                                            <td>{e.email}</td>
                                            <td>
                                            <a href="#" >Edit</a> &nbsp;|&nbsp; 
                                            <a href="#"  data-toggle="modal" data-target="#deletePeople">Delete</a>                                            </td>
                                        </tr>
                                        )}
                                     
                                        </tbody>
                                    </table>


                    </div>
                </div>
                
                </section>             



            </div>

            <Footer/>

            </div>

        )
    }


   


}
