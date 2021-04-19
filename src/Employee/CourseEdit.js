

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


export class CourseEdit extends Component
{
    constructor(props) {
        super(props);
    }



    render() {

        return(
          <div>

        {/* EDIT EMPLOYEE COURSE */}

        <div id="editCourse" class="modal fade" role="dialog">
            <div class="modal-dialog" style={{width: '400px'}}>
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" >&times;</button>
                        <h4 class="modal-title">Edit Course</h4>
                    </div>
                    <div class="addCourse-ui">

                        <div class="modal-body row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <div class="form-group">
                                        <label style={{fontWeight:'normal'}}>Course Name</label> 
                                        <input type="text" class="form-control" name="courseName" 
                                            value={this.props.courseName} onChange={this.props.onValueChange}
                                            style={{fontWeight:'normal'}}/>   
                                    </div>
                                </div>
                                <span></span>
                            </div>

                            <div class="col-md-12">
                                    <div class="form-group">
                                        <div class="form-group">
                                            <label style={{fontWeight:'normal'}}>Provider</label> 
                                            <input type="text" class="form-control" name="provider" 
                                                 value={this.props.provider} onChange={this.props.onValueChange}
                                                 style={{fontWeight:'normal'}}/>   
                                        </div>
                                    </div>
                                    <span></span>
                            </div>


                            <div class="col-md-6">
                                    
                                <label style={{fontWeight:'normal'}}>Start Date</label>
                                <span class="input-group-btn">
                                    <div class="input-group date" data-provide="datepicker" data-date-autoclose="true" data-date-today-highlight="true">
                                        <input type="text" name="startDate" ref={this.props.startDate} class="form-control" 
                                            value={this.props.startDateValue} 
                                            onChange={this.props.onValueChange}
                                            />
                                        <div class="input-group-addon">
                                            <span class="fa fa-calendar"></span>
                                        </div>
                                    </div>
                                </span>
                                <span></span>

                            </div>
                        
                            <div class="col-md-6">
                                    
                                <label style={{fontWeight:'normal'}}>End Date</label>
                                <span class="input-group-btn">
                                    <div class="input-group date" data-provide="datepicker" data-date-autoclose="true" data-date-today-highlight="true">
                                        <input type="text" name="endDate" ref={this.props.endDate} class="form-control" 
                                            value={this.props.endDateValue} 
                                            onChange={this.props.onValueChange}
                                            />
                                        <div class="input-group-addon">
                                            <span class="fa fa-calendar"></span>
                                        </div>
                                    </div>
                                </span>
                                <span></span>

                            </div>      

                            <div class="col-md-12">&nbsp;</div>

                            <div class="col-md-12">
                                    <div class="form-group">
                                        <div class="form-group">
                                            <label style={{fontWeight:'normal'}}>Certificate</label> 
                                            <select class="form-control" name="certificate" 
                                                value={this.props.certificate} 
                                                onChange={this.props.onValueChange}
                                              >
                                                <option value=""></option>
                                                <option value="YES">YES</option>
                                                <option value="NO">NO</option>
                                            </select>
                                        </div>
                                    </div>
                                    <span></span>
                            </div>

                            </div>
                        
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" onClick={this.props.updateCourse} data-dismiss="modal">Update Course</button>
                            </div>
                    
                    </div>
                </div>
            </div>
            </div>
            


               
            </div>
        )
    }
}