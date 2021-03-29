
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
    public class User
    {
        public Guid ID { get; set; }
        public Guid EmployeeId { get; set; }
        public Employee Employee { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public Guid RoleId { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }

    }
}
