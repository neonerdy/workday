
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

using System;

namespace Workday.Models
{
    public class RoleAccess
    {
        public Guid ID { get; set; }
        public string RoleId { get; set; }
        public bool IsAllowDashboard { get; set; }
        public bool IsAllowPayroll { get; set; }


    }
}
