
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
        public Guid EmployeeFamilyId { get; set; }
        public Guid EmployeeId { get; set; }
        public string FamilyName { get; set; }
        public string FamilyRelationship { get; set; }
        public string FamilyAddress { get; set; }
        public string FamilyPhone { get; set; }

    }
}
