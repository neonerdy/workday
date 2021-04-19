

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


export class SalaryEdit extends Component
{
    constructor(props) {
        super(props);
    }



    render() {

        return(
          <div>

        {/* EDIT EMPLOYEE SALARY COMPONENT */}

       <div id="editSalary" class="modal fade" role="dialog">
            <div class="modal-dialog" style={{width: '400px'}}>
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Edit Salary Component</h4>
                    </div>
                    <div class="addCourse-ui">

                    <div class="modal-body row">
                        <div class="col-md-12">
                                <div class="form-group">
                                    <div class="form-group">
                                        <label style={{fontWeight:'normal'}}>Salary Component</label> 
                                        <select class="form-control" name="salaryComponentId" 
                                            value={this.props.salaryComponentId}
                                            onChange={this.props.onValueChange}>
                                            {this.props.salaryComponents.map(sc=> 
                                                <option value={sc.id}>{sc.componentName}</option>
                                            )}
                                        </select>
                                    </div>
                                </div>
                                <span></span>
                        </div>

                                
                        <div class="col-md-12">
                            <div class="form-group">
                                <div class="form-group">
                                    <label style={{fontWeight:'normal'}}>Amount</label> 
                                    <input type="text" class="form-control" name="amount" style={{fontWeight:'normal'}} 
                                        value={this.props.amount}
                                        onChange={this.props.onValueChange}/>   
                                </div>
                            </div>
                            <span></span>
                        </div>


                    </div>
                
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onClick={this.props.updateSalary} data-dismiss="modal">Update Salary Component</button>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>

               
    </div>
        )
    }
}