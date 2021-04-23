

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


export class SalaryComponentAdd extends Component
{
    constructor(props) {
        super(props);
    }



    render() {

        return(
          <div>

        <div id="addSalaryComponent" class="modal fade" role="dialog">
            <div class="modal-dialog" style={{width: '400px'}}>
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" onClick={this.props.closeSalaryComponent}>&times;</button>
                        <h4 class="modal-title">Add Salary Component</h4>
                    </div>
                    <div class="addSalaryComponent-ui">

                    <form autocomplete="off">

                        <div class="modal-body row">
                            
                            <div class="col-md-12">
                                <div class="form-group">
                                    <div class="form-group">
                                        <label style={{fontWeight:'normal'}}>Component Name</label> 
                                        <input type="text" class="form-control" name="componentName" 
                                            value={this.props.componentName}
                                            onChange={this.props.onValueChange}
                                            style={{fontWeight:'normal'}}/>   
                                    </div>
                                </div>
                                <span></span>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <div class="form-group">
                                        <label style={{fontWeight:'normal'}}>Component Type</label> 
                                        <select class="form-control" name="componentType" 
                                            value={this.props.componentType}
                                            onChange={this.props.onValueChange}>
                                            <option value=""></option>
                                            <option value="Allowance">Allowance</option>
                                            <option value="Deduction">Deduction</option>
                                        </select>
                                    </div>
                                </div>
                                <span></span>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <div class="form-group">
                                        <label style={{fontWeight:'normal'}}>Occurance</label> 
                                        <select class="form-control" name="occurance" 
                                            value={this.props.occurance}
                                            onChange={this.props.onValueChange}>
                                            <option value=""></option>
                                            <option value="Daily">Daily</option>
                                            <option value="Monthly">Monthly</option>
                                        </select>
                                    </div>
                                </div>
                                <span></span>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <div class="form-group">
                                        <label style={{fontWeight:'normal'}}>Amount</label> 
                                        <input type="text" class="form-control" name="amount" 
                                            value={this.props.amount}
                                            onChange={this.props.onValueChange}
                                            style={{fontWeight:'normal'}}/>   
                                    </div>
                                </div>
                                <span></span>
                            </div>

                            
                            </div>
                         
                          </form>

                        
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default pull-left" data-dismiss="modal" 
                                    onClick={this.props.closeSalaryComponent}>Close</button>
                                <button type="button" class="btn btn-primary" onClick={this.props.saveSalaryComponent} 
                                    data-dismiss="modal">Save</button>
                            </div>
                    
                    </div>
                </div>
            </div>
            </div>
            


               
            </div>
        )
    }
}