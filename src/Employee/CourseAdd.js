

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


export class CourseAdd extends Component
{
    constructor(props) {
        super(props);
    }



    render() {

        return(
          <div>

        {/* ADD EMPLOYEE COURSE */}

        <div id="addCourse" class="modal fade" role="dialog">
            <div class="modal-dialog" style={{width: '400px'}}>
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" >&times;</button>
                        <h4 class="modal-title">Add Course</h4>
                    </div>
                    <div class="addCourse-ui">

                        <div class="modal-body row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <div class="form-group">
                                        <label style={{fontWeight:'normal'}}>Course Name</label> 
                                        <input type="text" class="form-control" name="courseName" 
                                            onChange={this.props.onValueChange}
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
                                                onChange={this.props.onValueChange}
                                                style={{fontWeight:'normal'}}/>   
                                        </div>
                                    </div>
                                    <span></span>
                            </div>


                            <div class="col-md-6">
                                    
                                <label style={{fontWeight:'normal'}}>Start Date</label>
                                <span class="input-group-btn">
                                    <div class="input-group date" data-provide="datepicker" data-date-autoclose="true" data-date-today-highlight="true">
                                        <input type="text" ref={this.props.startDate} class="form-control"  onChange={this.props.onValueChange}  
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
                                        <input type="text" ref={this.props.endDate} class="form-control"   onChange={this.props.onValueChange}
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
                                            <select class="form-control" name="certificate" onChange={this.onValueChange}>
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
                                <button type="button" class="btn btn-primary" onClick={this.props.saveCourse} data-dismiss="modal">Save Course</button>
                            </div>
                    
                    </div>
                </div>
            </div>
            </div>
            


               
            </div>
        )
    }
}