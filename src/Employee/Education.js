

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



export class Education extends Component
{
    constructor(props) {
        super(props);
    }



    render() {

      

        return(
        
        <div>

              
        {/* DELETE EMPLOYEE EDUCATION */}

        <div id="deleteEducation" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Delete Education</h4>
                    </div>
                    <div class="modal-body">
                        Are you sure want to delete this education?
                    </div>
                    
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default pull-left"  data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-danger" onClick={()=>this.props.deleteEducation(this.props.employeeEducationId)} 
                                data-dismiss="modal">Yes</button>
                    </div>
                </div>
            </div>
        </div>

        <a href="#" data-toggle="modal" data-target="#addEducation">+ Add Education</a>
        <br/>

        <div class="box-body">
            <div class="row">
        
                <div class="col-md-12">
                    <ul class="todo-list ui-sortable">
                    {this.props.employeeEducations.map(ee=> 
                        <li>
                            <span> {ee.grade} ( {ee.startYear} - {ee.endYear} )  {ee.institutionName} {ee.majors}</span>
                            <div class="tools">
                                <i class="fa fa-edit" style={{color:'black'}} onClick={()=>this.props.editEducation(ee.employeeEducationId)} 
                                    data-toggle="modal" data-target="#editEducation"></i>&nbsp;
                                <i class="fa fa-trash-o" style={{color:'black'}}  onClick={()=>this.props.getEducationId(ee.employeeEducationId)} 
                                    data-toggle="modal" data-target="#deleteEducation"></i>
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