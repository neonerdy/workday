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

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

const route = (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

ReactDOM.render(route, document.getElementById('root'));


