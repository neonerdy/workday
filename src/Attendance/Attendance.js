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
 import { Header } from '../Shared/Header';
 import { NavBar } from '../Shared/NavBar';
 import { Footer } from '../Shared/Footer';
 import axios from 'axios';
 import config from '../Config';
 import moment from 'moment';
 
 export class Attendance extends Component
 {
     constructor(props) {
         super(props);
 
         this.state = {
             attendances: [],
         }
     }
 
     componentDidMount() {
        this.getAllAttendances();
     }
 
     
     getAllAttendances = () => {
         axios.get(config.serverUrl + "/api/attendance/getall").then(response=> {
             this.setState({
                attendances: response.data
             })
         });
     }
 
   
 
     addAttendance =()=> {
         this.props.history.push("/add-attendance")
     }
 
     editAttendance = (id) => {
         this.props.history.push("/edit-attendance/" + id)
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
                     Attendances ({this.state.attendances.length})
                 </h1>
                 <ol class="breadcrumb">
                     <button class="btn btn-primary" onClick={this.addAttendance}>Add New Attendance</button>
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
                                 Are you sure want to delete this?
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
                                             <th><u>EMPLOYEE NAME</u></th>
                                             <th><u>WORK SCHEDULE</u></th>
                                             <th><u>ATTENDANCE DATE</u></th>
                                             <th><u>CLOCK IN</u></th>
                                             <th><u>CLOCK OUT</u></th>
                                             <th><u>STATUS</u></th>
                                             <th>ACTION</th>
                                         </tr>
                                         {this.state.attendances.map(a=> 
                                         <tr>
                                             <td>{a.employee.employeeName}</td>
                                             <td>{a.workSchedule.scheduleName}</td>
                                             <td>{moment(a.attendanceDate).format("MM/DD/YYYY")}</td>
                                             <td>{a.clockIn}</td>
                                             <td>{a.clockOut}</td>
                                             <td>{a.status}</td>
                                             <td>
                                             <a href="#" onClick={()=>this.editAttendance(a.id)}>Edit</a> &nbsp;|&nbsp; 
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
 