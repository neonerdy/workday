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


export class Salary extends Component
{
    constructor(props) {
        super(props);
    }



    render() {


        return(
        
        <div>

       
         {/* DELETE EMPLOYEE SALARY */}

         <div id="deleteSalary" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Delete Salary</h4>
                    </div>
                    <div class="modal-body">
                        Are you sure want to delete this salary?
                    </div>
                    
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default pull-left"  data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-danger" onClick={()=>this.props.deleteSalary(this.props.employeeSalaryId)} 
                                data-dismiss="modal">Yes</button>
                    </div>
                </div>
            </div>
        </div>


        <a href="#" data-toggle="modal" data-target="#addSalary">+ Add Salary</a>

        <div class="box-body">
            <div class="row">

                <div class="col-md-12">
                <ul class="todo-list ui-sortable">
                    {this.props.employeeSalaries.map(es=> 
                        <li>
                            <span> {es.salaryComponent.componentName} = {es.amount} </span>
                            <div class="tools">
                                <i class="fa fa-edit" style={{color:'black'}} onClick={()=>this.props.editSalary(es.employeeSalaryId)} 
                                    data-toggle="modal" data-target="#editSalary"></i>&nbsp;
                                <i class="fa fa-trash-o" style={{color:'black'}}  onClick={()=>this.props.getSalaryId(es.employeeSalaryId)} 
                                    data-toggle="modal" data-target="#deleteSalary"></i>
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