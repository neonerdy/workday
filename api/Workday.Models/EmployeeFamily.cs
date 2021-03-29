
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
    public class EmployeeFamily
    {
        public Guid ID { get; set; }
        public Guid EmployeeId { get; set; }
        public string FamilyName { get; set; }
        public string Relationship { get; set; }
        public string MaritalStatus { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public bool IsEmergencyContact { get; set; }

    }
}
