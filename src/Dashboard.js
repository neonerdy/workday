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
import { Footer } from './Footer';
import { Header } from './Header';
import { NavBar } from './NavBar';
import axios from 'axios';
import config from './Config'

export class Dashboard extends Component
{
    constructor(props) {
        super(props);

        var userJson = localStorage.getItem("user");
        var user = JSON.parse(userJson);
       
        this.state = {
           user: user,
           project: {},
           projects: 0,
           bugs: 0,
           features: 0,
           others: 0,
           activeProjectId: '',
           isHideClosedTask: false,
           isShowAssignedToMe: false,
           isLoading: true
        }
    }


    componentDidMount() {
                 
    }


    getUserTaskCount = (id) => {
        
        axios.get(config.serverUrl + "/api/people/getbyid/" + id).then(response=> {
         
            this.getProjectById(response.data.activeProjectId);
            this.getProjectCount(response.data.activeProjectId);
            this.getBugsCount(response.data.activeProjectId);
            this.getFeaturesCount(response.data.activeProjectId);
            this.getOthersCount(response.data.activeProjectId);
        

            this.setState({
                activeProjectId: response.data.activeProjectId,
                isHideClosedTask: response.data.isHideClosedTask,
                isShowAssignedToMe: response.data.isShowAssignedToMe,
                isLoading: false
            })

        });
    }


    getProjectById = (id) => {
        axios.get(config.serverUrl + "/api/project/getbyid/" + id).then(response=> {
            this.setState({
                project: response.data
            })

        });
    }


    getProjectCount = (projectId) => {
       
        if (projectId == '00000000-0000-0000-0000-000000000000') {
            axios.get(config.serverUrl + "/api/project/getprojectcount").then(response=> {
                this.setState({
                    projects: response.data
                })
            });
        } else {
            this.setState({
                projects: 1
            })
        }

    }

    getBugsCount = (projectId) => {

        if (projectId == '00000000-0000-0000-0000-000000000000') {
            axios.get(config.serverUrl + "/api/task/gettaskcount/bug").then(response=> {
                this.setState({
                    bugs: response.data
                })
            });
        } else {
            axios.get(config.serverUrl + "/api/task/gettaskcountbyproject/bug/" + projectId).then(response=> {
                this.setState({
                    bugs: response.data
                })
            });
        }
    }


    getFeaturesCount = (projectId) => {

        if (projectId == '00000000-0000-0000-0000-000000000000') {
            axios.get(config.serverUrl + "/api/task/gettaskcount/feature").then(response=> {
                this.setState({
                    features: response.data
                })
            });
        } else {
            axios.get(config.serverUrl + "/api/task/gettaskcountbyproject/feature/" + projectId).then(response=> {
                this.setState({
                    features: response.data
                })
            });
        }
    } 

    getOthersCount = (projectId) => {

        if (projectId == '00000000-0000-0000-0000-000000000000') {
            axios.get(config.serverUrl + "/api/task/gettaskcount/other").then(response=> {
                this.setState({
                    others: response.data
                })
            });
        } else {
            axios.get(config.serverUrl + "/api/task/gettaskcountbyproject/other/" + projectId).then(response=> {
                this.setState({
                    others: response.data
                })
            });
        }
    }



   
    addTask =()=> {
        this.props.history.push("/add-task");
    }



    render() {

        const style0 = {
            width:'8%'
        }

        const style1 = {
            width:'10%'
        }

        const style2 = {
            width:'40%'
        }

        const fontStyle = {
            fontWeight:'normal'
        }
        
        const heightStyle = {
            minHeight: '959.8px'
        }

        return(

            <div class="wrapper">
             
             <Header 
                history={this.props.history} 
                user={this.state.user}
             />
             <NavBar/>

            
            <div class="content-wrapper" style={heightStyle}>
            
                <section class="content-header">
                <h1>
                    Dashboard
                </h1>
                <ol class="breadcrumb">
               
                </ol>
                </section>
                <br></br>

                <section class="content">

                <div class="row">


                <div class="col-md-4">

                    <div class="box box-widget widget-user">
                        <div class="widget-user-header bg-aqua-active">
                        <h3 class="widget-user-username">Ariyanto</h3>
                        <h5 class="widget-user-desc">Senior Consultant</h5>
                        </div>
                        <div class="widget-user-image">
                        <img class="img-circle" src="lib/dist/img/ari.jpg" alt="User Avatar"/>
                        </div>
                        <div class="box-footer">
                        <div class="row">
                            <div class="col-sm-4 border-right">
                            <div class="description-block">
                                <h5 class="description-header">17</h5>
                                <span class="description-text">TOTAL LEAVE</span>
                            </div>
                            </div>
                            <div class="col-sm-4 border-right">
                            <div class="description-block">
                                <h5 class="description-header">10</h5>
                                <span class="description-text">TAKEN</span>
                            </div>
                            </div>
                            <div class="col-sm-4">
                            <div class="description-block">
                                <h5 class="description-header">7</h5>
                                <span class="description-text">REMAINING</span>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <div class="box box-default">
                        <div class="box-header with-border">
                        <h3 class="box-title">Birthday</h3>

                        <div class="box-tools pull-right">
                            <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i>
                            </button>
                        </div>
                        </div>
                        <div class="box-body no-padding">
                        <ul class="users-list clearfix">
                            <li>
                            <img src="lib/dist/img/user6-128x128.jpg" alt="User Image"/>
                            <a class="users-list-name" href="#">Alexander Pierce</a>
                            <span class="users-list-date">Today</span>
                            </li>
                            <li>
                            <img src="lib/dist/img/user8-128x128.jpg" alt="User Image"/>
                            <a class="users-list-name" href="#">Norman</a>
                            <span class="users-list-date">Yesterday</span>
                            </li>
                            <li>
                            <img src="lib/dist/img/user7-128x128.jpg" alt="User Image"/>
                            <a class="users-list-name" href="#">Jane</a>
                            <span class="users-list-date">12 Jan</span>
                            </li>
                        
                        
                        </ul>
                        </div>
                        <div class="box-footer text-center">
                        <a href="javascript:void(0)" class="uppercase">View All Users</a>
                        </div>
                    </div>


                    </div>





                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <div class="box box-default">
                        <div class="box-header with-border">
                        <h3 class="box-title">Job Level</h3>

                        <div class="box-tools pull-right">
                            <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i>
                            </button>
                        </div>
                        </div>

                        <div class="box-body">
                            <div class="progress" style={{height: '15px'}}>
                                            <div class="progress-bar progress-bar-aqua" role="progressbar" style={{width: '5%',ariaValuenow:'5',ariaValuemin:'0',ariaVluemax:'100'}}></div>
                                            <div class="progress-bar progress-bar-red" role="progressbar" style={{width: '15%',ariaValuenow:'15',ariaValuemin:'0',ariaValuemax:'100'}}></div>
                                            <div class="progress-bar progress-bar-yellow" role="progressbar" style={{width: '80%', ariaValuenow:'70',ariaValuemin:'0',ariaValuemax:'100'}}></div>

                            </div>
                        </div>

                        <div class="box-footer no-padding">
                        <ul class="nav nav-pills nav-stacked">
                            <li><a href="#">Director
                            <span class="pull-right text-red"><i class="fa fa-angle-down"></i> 12%</span></a></li>
                            <li><a href="#">Manager <span class="pull-right text-green"><i class="fa fa-angle-up"></i> 4%</span></a>
                            </li>
                            <li><a href="#">Staff
                            <span class="pull-right text-yellow"><i class="fa fa-angle-left"></i> 0%</span></a></li>
                        </ul>
                        </div>


                       
                    </div>


                    </div>


              








                </div>


                </section>

         

            </div>
            <Footer/>

            </div>

        )
    }

}