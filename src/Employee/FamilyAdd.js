

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


export class FamilyAdd extends Component
{
    constructor(props) {
        super(props);
    }



    render() {

      

        return(
          <div>

          {/* ADD EMPLOYEE FAMILY */}

          <div id="addFamily" class="modal fade" role="dialog">
            <div class="modal-dialog" style={{width: '400px'}}>
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Add Family</h4>
                    </div>
                    <div class="addFamily-ui">

                            
                            <div class="modal-body row">
                                
                                <input type="hidden" name="employeeId"  onChange={this.props.onValueChange}/>  
                    
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <div class="form-group">
                                            <label style={{fontWeight:'normal'}}>Family Name</label> 
                                            <input type="text" class="form-control" name="familyName" onChange={this.props.onValueChange} style={{fontWeight:'normal'}}/>   
                                        </div>
                                    </div>
                                    <span></span>
                                </div>

                                <div class="col-md-12">
                                        <div class="form-group">
                                            <div class="form-group">
                                                <label style={{fontWeight:'normal'}}>Relationship</label> 
                                                <select class="form-control" name="familyRelationship" onChange={this.props.onValueChange}>
                                                    <option value=""></option>
                                                    <option value="Husband">Husband</option>
                                                    <option value="Wife">Wife</option>
                                                    <option value="Child">Child</option>
                                                    <option value="Mother">Mother</option>
                                                    <option value="Father">Father</option>
                                                </select>
                                            </div>
                                        </div>
                                        <span></span>
                                </div>

                                <div class="col-md-12">
                                        <div class="form-group">
                                            <div class="form-group">
                                                <label style={{fontWeight:'normal'}}>Address</label> 
                                                <input type="text" class="form-control" name="familyAddress" onChange={this.props.onValueChange} 
                                                    style={{fontWeight:'normal'}}/>   
                                            </div>
                                        </div>
                                        <span></span>
                                </div>

                                <div class="col-md-12">
                                        <div class="form-group">
                                            <div class="form-group">
                                                <label style={{fontWeight:'normal'}}>Phone</label> 
                                                <input type="text" class="form-control" name="familyPhone" onChange={this.props.onValueChange} style={{fontWeight:'normal'}}/>   
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