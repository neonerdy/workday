

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



export class Family extends Component
{
    constructor(props) {
        super(props);
    }



    render() {

      

        return(
        
        <div>

            {/* DELETE EMPLOYEE FAMILY */}

            <div id="deleteFamily" class="modal fade">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">Delete Family</h4>
                        </div>
                        <div class="modal-body">
                            Are you sure want to delete this family?
                        </div>
                        
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default pull-left"  data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-danger" onClick={()=>this.props.deleteFamily(this.props.employeeFamilyId)} 
                                    data-dismiss="modal">Yes</button>
                        </div>
                    </div>
                </div>
            </div>



        <a href="#" data-toggle="modal" data-target="#addFamily">+ Add Family</a>
        <br/>
        <div class="box-body">
            <div class="row">
        
                <div class="col-md-12">
                    <ul class="todo-list ui-sortable">
                    {this.props.employeeFamilies.map(ef=> 
                        <li>
                            <span> {ef.familyName} ( {ef.familyRelationship} ) - {ef.familyAddress} - {ef.familyPhone}</span>
                            <div class="tools">
                                <i class="fa fa-edit" style={{color:'black'}} onClick={()=>this.props.editFamily(ef.employeeFamilyId)} 
                                    data-toggle="modal" data-target="#editFamily"></i>&nbsp;
                                <i class="fa fa-trash-o" style={{color:'black'}} onClick={()=>this.props.getFamilyId(ef.employeeFamilyId)}  
                                    data-toggle="modal" data-target="#deleteFamily"></i>
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