

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
 

export class EducationAdd extends Component
{
    constructor(props) {
        super(props);
    }


    render() {

    
        return(
       
         <div>

          {/* ADD EMPLOYEE EDUCATION */}

          <div id="addEducation" class="modal fade" role="dialog">
            <div class="modal-dialog" style={{width: '400px'}}>
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Add Education</h4>
                    </div>
                    <div class="addEducation-ui">

                            <div class="modal-body row">
                                <input type="hidden" name="id" value=""/>
                                 <div class="col-md-12">
                                    <div class="form-group">
                                        <div class="form-group">
                                            <label style={{fontWeight:'normal'}}>Grade</label> 
                                            <select class="form-control" name="grade" onChange={this.props.onValueChange}>
                                                <option value=""></option>
                                                <option value="SD">SD</option>
                                                <option value="SMP">SMP</option>
                                                <option value="SMU">SMU</option>
                                                <option value="SMK">SMK</option>
                                                <option value="University">University</option>
                                            </select>
                                        </div>
                                    </div>
                                    <span></span>
                                </div>

                                <div class="col-md-12">
                                        <div class="form-group">
                                            <div class="form-group">
                                                <label style={{fontWeight:'normal'}}>Institution Name</label> 
                                                <input type="text" class="form-control" name="institutionName" 
                                                    onChange={this.props.onValueChange}
                                                    style={{fontWeight:'normal'}}/>   
                                            </div>
                                        </div>
                                        <span></span>
                                </div>

                                <div class="col-md-12">
                                        <div class="form-group">
                                            <div class="form-group">
                                                <label style={{fontWeight:'normal'}}>Majors</label> 
                                                <input type="text" class="form-control" name="majors" 
                                                    onChange={this.props.onValueChange}
                                                    style={{fontWeight:'normal'}}/>   
                                            </div>
                                        </div>
                                        <span></span>
                                </div>


                                <div class="col-md-6">
                                        <div class="form-group">
                                            <label style={{fontWeight:'normal'}}>Start Year</label> 
                                            <input type="text" class="form-control" name="startYear" 
                                                onChange={this.props.onValueChange}
                                                style={{fontWeight:'normal'}}/>   
                                        </div>
                                        <span></span>
                                    </div>
                        
                                <div class="col-md-6">
                                        <div class="form-group">
                                        <label style={{fontWeight:'normal'}}>End Year</label> 
                                        <input type="text" class="form-control" name="endYear" 
                                            onChange={this.props.onValueChange}
                                            style={{fontWeight:'normal'}}/>   
                                    </div>
                                    <span></span> 
                                </div>                                    
                            

                            </div>
                        
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" onClick={this.props.saveEducation}>Save Education</button>
                            </div>
                    
                    </div>
                </div>
            </div>
            </div>


       
               
         </div>
        )
    }
}