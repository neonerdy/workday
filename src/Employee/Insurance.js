

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


export class Insurance extends Component
{
    constructor(props) {
        super(props);
    }



    render() {


        return(
        
        <div>

       
         {/* DELETE EMPLOYEE INSURANCE */}

         <div id="deleteInsurance" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Delete Insurance</h4>
                    </div>
                    <div class="modal-body">
                        Are you sure want to delete this insurance?
                    </div>
                    
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default pull-left"  data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-danger" onClick={()=>this.props.deleteInsurance(this.props.employeeInsuranceId)} 
                            data-dismiss="modal">Yes</button>
                    </div>
                </div>
            </div>
        </div>



        <a href="#" data-toggle="modal" data-target="#addInsurance">+ Add Insurance</a>

        <div class="box-body">
            <div class="row">

                <div class="col-md-12">
                <ul class="todo-list ui-sortable">
                    {this.props.employeeInsurances.map(ei=> 
                        <li>
                            <span> {ei.insuranceName} - {ei.insuranceNumber} - {moment(ei.effectifeDate).format("MM/DD/YYYY")} </span>
                            <div class="tools">
                                <i class="fa fa-edit" style={{color:'black'}} onClick={()=>this.props.editInsurance(ei.employeeInsuranceId)} 
                                    data-toggle="modal" data-target="#editInsurance"></i>&nbsp;
                                <i class="fa fa-trash-o" style={{color:'black'}}  onClick={()=>this.props.getInsuranceId(ei.employeeInsuranceId)} 
                                    data-toggle="modal" data-target="#deleteInsurance"></i>
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