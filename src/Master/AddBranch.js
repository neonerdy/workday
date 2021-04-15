

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
 import { Footer } from '../Shared/Footer';
 import { Header } from '../Shared/Header';
 import { NavBar } from '../Shared/NavBar';
  import axios from 'axios';
 import config from '../Config';
 import moment from 'moment';


export class AddBranch extends Component
{
    constructor(props) {
        super(props);
    }



    render() {

      

        return(
          <div>

          {/* ADD EMPLOYEE FAMILY */}

          <div id="addBranch" class="modal fade" role="dialog">
            <div class="modal-dialog" style={{width: '400px'}}>
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Add Branch</h4>
                    </div>
                    <div class="addFamily-ui">

                            
                            <div class="modal-body row">
                                
                                <input type="hidden" name="employeeId"  onChange={this.props.onValueChange}/>  
                    
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <div class="form-group">
                                            <label style={{fontWeight:'normal'}}>Branch Name</label> 
                                            <input type="text" class="form-control" name="branchName" onChange={this.props.onValueChange} style={{fontWeight:'normal'}}/>   
                                        </div>
                                    </div>
                                    <span></span>
                                </div>

                               

                                <div class="col-md-12">
                                        <div class="form-group">
                                            <div class="form-group">
                                                <label style={{fontWeight:'normal'}}>Province</label> 
                                                <input type="text" class="form-control" name="province" onChange={this.props.onValueChange} 
                                                    style={{fontWeight:'normal'}}/>   
                                            </div>
                                        </div>
                                        <span></span>
                                </div>

                                <div class="col-md-12">
                                        <div class="form-group">
                                            <div class="form-group">
                                                <label style={{fontWeight:'normal'}}>City</label> 
                                                <input type="text" class="form-control" name="city" onChange={this.props.onValueChange} style={{fontWeight:'normal'}}/>   
                                            </div>
                                        </div>
                                        <span></span>
                                </div>


                            </div>
                        
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" onClick={this.props.saveFamily}>Save Family</button>
                            </div>
                    
                    </div>
                </div>
            </div>
            </div>

               
            </div>
        )
    }
}