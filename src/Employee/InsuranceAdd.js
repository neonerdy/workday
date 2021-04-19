

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


export class InsuranceAdd extends Component
{
    constructor(props) {
        super(props);
    }



    render() {

        return(
          <div>

        {/* ADD EMPLOYEE INSURANCE */}


            <div id="addInsurance" class="modal fade" role="dialog">
            <div class="modal-dialog" style={{width: '400px'}}>
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Add Insurance</h4>
                    </div>
                    <div class="addInsurance-ui">

                            <div class="modal-body row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <div class="form-group">
                                            <label style={{fontWeight:'normal'}}>Insurance Name</label> 
                                            <input type="text" class="form-control" name="insuranceName" 
                                                onChange={this.props.onValueChange}
                                                style={{fontWeight:'normal'}}/>   
                                        </div>
                                    </div>
                                    <span></span>
                                </div>

                                <div class="col-md-12">
                                        <div class="form-group">
                                            <div class="form-group">
                                                <label style={{fontWeight:'normal'}}>Insurance Number</label> 
                                                <input type="text" class="form-control" name="insuranceNumber" 
                                                     onChange={this.props.onValueChange}
                                                    style={{fontWeight:'normal'}}/>   
                                            </div>
                                        </div>
                                        <span></span>
                                </div>



                                <div class="col-md-12">
                                        
                                    <label style={{fontWeight:'normal'}}>Effective Date</label>
                                    <span class="input-group-btn">
                                        <div class="input-group date" data-provide="datepicker" data-date-autoclose="true" data-date-today-highlight="true">
                                            <input type="text" name="effectifeDate" ref={this.props.effectiveDate} class="form-control"  
                                                style={{width: '330px'}} />
                                            <div class="input-group-addon">
                                                <span class="fa fa-calendar"></span>
                                            </div>
                                        </div>
                                    </span>
                                    <span></span>

                                </div>
                        
                              
                                <div class="col-md-12">&nbsp;</div>


                            </div>
                        
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" onClick={this.props.saveInsurance} data-dismiss="modal">Save Insurance</button>
                            </div>
                    
                    </div>
                </div>
            </div>
            </div>
               
            </div>
        )
    }
}