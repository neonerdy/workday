

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
 

export class BranchAdd extends Component
{
    constructor(props) {
        super(props);
    }



    render() {

        return(
          <div>

          <div id="addBranch" class="modal fade" role="dialog">
            <div class="modal-dialog" style={{width: '400px'}}>
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Add Branch</h4>
                    </div>
                    <div class="addFamily-ui">

                            
                            <div class="modal-body row">
                                
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <div class="form-group">
                                            <label style={{fontWeight:'normal'}}>Branch Name</label> 
                                            <input type="text" class="form-control" name="branchName" 
                                                value= {this.props.branchName}
                                                onChange={this.props.onValueChange} 
                                                style={{fontWeight:'normal'}}/>   
                                        </div>
                                    </div>
                                    <span></span>
                                </div>

                               

                                <div class="col-md-12">
                                        <div class="form-group">
                                            <div class="form-group">
                                                <label style={{fontWeight:'normal'}}>Province</label> 
                                                <input type="text" class="form-control" name="province" 
                                                    value= {this.props.province}
                                                    onChange={this.props.onValueChange} 
                                                    style={{fontWeight:'normal'}}/>   
                                            </div>
                                        </div>
                                        <span></span>
                                </div>

                                <div class="col-md-12">
                                        <div class="form-group">
                                            <div class="form-group">
                                                <label style={{fontWeight:'normal'}}>City</label> 
                                                <input type="text" class="form-control" name="city" 
                                                    value= {this.props.city}
                                                    onChange={this.props.onValueChange} 
                                                    style={{fontWeight:'normal'}}/>   
                                            </div>
                                        </div>
                                        <span></span>
                                </div>


                            </div>
                        
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default pull-left" data-dismiss="modal" 
                                    onClick={this.props.clearBranch}>Close</button>
                                
                                <button type="button" class="btn btn-primary" 
                                    onClick={this.props.saveBranch} data-dismiss="modal">Save</button>
                            </div>
                    
                    </div>
                </div>
            </div>
            </div>

               
            </div>
        )
    }
}