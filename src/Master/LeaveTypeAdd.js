
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


export class LeaveTypeAdd extends Component
{
    constructor(props) {
        super(props);
    }



    render() {

        return(
          <div>

        <div id="addLeaveType" class="modal fade" role="dialog">
            <div class="modal-dialog" style={{width: '400px'}}>
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" onClick={this.props.clearLeaveType}>&times;</button>
                        <h4 class="modal-title">Add Leave Type</h4>
                    </div>
                    <div class="addSalaryComponent-ui">

                    <form autocomplete="off">

                        <div class="modal-body row">
                            
                            <div class="col-md-12">
                                <div class="form-group">
                                    <div class="form-group">
                                        <label style={{fontWeight:'normal'}}>Leave Type Name</label> 
                                        <input type="text" class="form-control" name="leaveTypeName" 
                                            value={this.props.leaveTypeName}
                                            onChange={this.props.onValueChange}
                                            style={{fontWeight:'normal'}}/>   
                                    </div>
                                </div>
                                <span></span>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <div class="form-group">
                                        <label style={{fontWeight:'normal'}}>Days Given</label> 
                                        <input type="text" class="form-control" name="daysGiven" 
                                            value={this.props.daysGiven}
                                            onChange={this.props.onValueChange}
                                            style={{fontWeight:'normal'}}/>   
                                    </div>
                                </div>
                                <span></span>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <div class="form-group">
                                        <label style={{fontWeight:'normal'}}>Is Deduction</label> 
                                        <select class="form-control" name="isDeduction" 
                                            value={this.props.isDeduction}
                                            onChange={this.props.onValueChange}>
                                            <option value=""></option>
                                            <option value="YES">YES</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </div>
                                </div>
                                <span></span>
                            </div>

                       
                            <div class="col-md-12">
                                <div class="form-group">
                                    <div class="form-group">
                                        <label style={{fontWeight:'normal'}}>Note</label> 
                                        <input type="text" class="form-control" name="note" 
                                            value={this.props.note}
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
                                    onClick={this.props.clearLeaveType}>Close</button>
                                <button type="button" class="btn btn-primary" onClick={this.props.saveLeaveType} 
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