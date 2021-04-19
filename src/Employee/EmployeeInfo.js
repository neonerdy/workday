

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


export class EmployeeInfo extends Component
{
    constructor(props) {
        super(props);
    }



    render() {

        return(
          <div>

         
            <section class="content">
             
             <div class = "row">
                 <div class="col-md-6">

                   
                     <div class="row">
                         <div class="col-lg-3"><label style={this.props.fontStyle}>Department</label> </div>
                         <div class="col-lg-6"><label style={this.props.fontStyle}>{this.props.departmentName}</label></div>
                     </div>
                     <div class="row">
                         <div class="col-lg-3"><label style={this.props.fontStyle}>Job Title</label> </div>
                         <div class="col-lg-6"><label style={this.props.fontStyle}>{this.props.jobTitleName}</label></div>
                     </div>
                     <div class="row">
                         <div class="col-lg-3"><label style={this.props.fontStyle}>Join Date</label> </div>
                         <div class="col-lg-6"><label style={this.props.fontStyle}> {this.props.joinDate}</label></div>
                     </div>
                 
                     <div class="row">
                         <div class="col-lg-3"><label style={this.props.fontStyle}>Status</label> </div>
                         <div class="col-lg-6"><label style={this.props.fontStyle}>{this.props.employmentStatusIcon} {this.props.employmentStatus}</label></div>
                     </div>

                     <div class="row">
                         <div class="col-lg-3"><label style={this.props.fontStyle}>Birth Date</label> </div>
                         <div class="col-lg-6"><label style={this.props.fontStyle}>{this.props.birthPlace}, {this.props.birthDate}</label></div>
                     </div>

                     <div class="row">
                         <div class="col-lg-3"><label style={this.props.fontStyle}>Religion</label> </div>
                         <div class="col-lg-6"><label style={this.props.fontStyle}>{this.props.religion}</label></div>
                     </div>
                
                     <div class="row">
                         <div class="col-lg-3"><label style={this.props.fontStyle}>Blood Type</label> </div>
                         <div class="col-lg-6"><label style={this.props.fontStyle}>{this.props.bloodType}</label></div>
                     </div>
                 
                     <div class="row">
                         <div class="col-lg-3"><label style={this.props.fontStyle}>Marital Status</label> </div>
                         <div class="col-lg-6"><label style={this.props.fontStyle}>{this.props.maritalStatus}</label></div>
                     </div>

                     <div class="row">
                         <div class="col-lg-3"><label style={this.props.fontStyle}>Address</label> </div>
                         <div class="col-lg-6"><label style={this.props.fontStyle}>{this.props.address}</label></div>
                     </div>


                     <div class="row">
                         <div class="col-lg-3"><label style={this.props.fontStyle}>Phone</label> </div>
                         <div class="col-lg-6"><label style={this.props.fontStyle}>{this.props.phone}</label></div>
                     </div>

                     <div class="row">
                         <div class="col-lg-3"><label style={this.props.fontStyle}>E-mail</label> </div>
                         <div class="col-lg-6"><label style={this.props.fontStyle}>{this.props.email}</label></div>
                     </div>
                     
                     
                 
                     
                 </div>
               
             </div>


              </section>



               
            </div>
        )
    }
}