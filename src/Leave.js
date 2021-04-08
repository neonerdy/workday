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
import { Header } from './Header';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import axios from 'axios';
import config from './Config';
import moment from 'moment';

export class Leave extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            leaves: [],
            leaveId: ''
        }
    }

    componentDidMount() {
        this.getAllLeaves();
    }

    
    getAllLeaves = () => {
        axios.get(config.serverUrl + "/api/leave/getall").then(response=> {
            this.setState({
                leaves: response.data
            })
        });
    }

  

    addLeave =()=> {
        this.props.history.push("/add-leave")
    }

    editLeave = (id) => {
        this.props.history.push("/edit-leave/" + id)
    }

    deleteLeave = (id) => {
        axios.delete(config.serverUrl + "/api/leave/delete/" + id).then(response=> {
            this.getAllLeaves();
        })
    }

    getLeaveId = (id) => {
        this.setState({
            leaveId: id,
        })
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
                    Leaves ({this.state.leaves.length})
                </h1>
                <ol class="breadcrumb">
                    <button class="btn btn-primary" onClick={this.addLeave}>Request Leave</button>
                </ol>
                </section>
                <br></br>


           

                <div id="deleteLeave" class="modal fade">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 class="modal-title">Delete</h4>
                            </div>
                            <div class="modal-body">
                                Are you sure want to delete this leave?
                            </div>
                            
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default pull-left"  data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-danger"  onClick={()=>this.deleteLeave(this.state.leaveId)} 
                                    data-dismiss="modal">Yes</button>
                            </div>
                        </div>
                    </div>
                </div>

                <section class="content">

                    <div class="box box-default">
                
                    <div class="box-body">

                        
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
                                            <th><u>REQUESTED FOR</u></th>
                                            <th><u>LEAVE TYPE</u></th>
                                            <th><u>START DATE</u></th>
                                            <th><u>END DATE</u></th>
                                            <th><u>SUBMITTED DATE</u></th>
                                            <th><u>STATUS</u></th>
                                            <th><u>NOTE</u></th>
                                            <th>ACTION</th>
                                        </tr>
                                       {this.state.leaves.map(l=> 
                                        <tr>
                                            <td>{l.employee.employeeName}</td>
                                            <td>{l.leaveType.leaveTypeName}</td>
                                            <td>{moment(l.startDate).format("MM/DD/YYYY")}</td>
                                            <td>{moment(l.endDate).format("MM/DD/YYYY")}</td>
                                            <td>{moment(l.createdDate).format("MM/DD/YYYY HH:MM:SS")}</td>
                                            <td>{l.status}</td>
                                            <td>{l.note}</td>
                                            <td>
                                            <a href="#" onClick={()=>this.editLeave(l.id)} >Edit</a> &nbsp;|&nbsp; 
                                            <a href="#" data-toggle="modal" data-target="#deleteLeave"  onClick={()=>this.getLeaveId(l.id)}>Delete</a>                                            </td>
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
