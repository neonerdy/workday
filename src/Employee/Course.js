

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
 import moment from 'moment';
 import '../App.css';


export class Course extends Component
{
    constructor(props) {
        super(props);
    }



    render() {


        return(
        
        <div>

       
        {/* DELETE EMPLOYEE COURSE */}

        <div id="deleteCourse" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Delete Course</h4>
                    </div>
                    <div class="modal-body">
                        Are you sure want to delete this course?
                    </div>
                    
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default pull-left"  data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-danger" onClick={()=>this.props.deleteCourse(this.props.employeeCourseId)} 
                                data-dismiss="modal">Yes</button>
                    </div>
                </div>
            </div>
        </div>

        <a href="#" data-toggle="modal" data-target="#addCourse">+ Add Course</a>

        <div class="box-body">      
        <div class="row">

        <div class="col-md-12">
            <ul class="todo-list ui-sortable">
            {this.props.employeeCourses.map(ec=> 
                <li>
                    <span> {ec.courseName} ( {moment(ec.startDate).format("MM/DD/YYYY")} - {moment(ec.endDate).format("MM/DD/YYYY")} ) - {ec.provider}</span>
                    <div class="tools">
                        <i class="fa fa-edit" style={{color:'black'}} onClick={()=>this.props.editCourse(ec.employeeCourseId)} 
                            data-toggle="modal" data-target="#editCourse"></i>&nbsp;
                        <i class="fa fa-trash-o" style={{color:'black'}}  onClick={()=>this.props.getCourseId(ec.employeeCourseId)} 
                            data-toggle="modal" data-target="#deleteCourse"></i>
                    </div>
                </li>
                )}
        </ul>

      </div>
        
    </div>
</div>   



                                                    
               
        </div>
        
        
        )
    }
}