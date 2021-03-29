/*--------------------------------------------------
 *
 *  Task Master
 * 
 *  Task Manager For Software Development
 * 
 *  Version : 1.0
 *  Author  : Ariyanto
 *  E-mail  : neonerdy@gmail.com
 * 
 *  © 2019, Under Apache Licence  
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

         

            </div>
            <Footer/>

            </div>

        )
    }

}