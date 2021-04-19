
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
    public class EmployeeEducation
    {
        public Guid EmployeeEducationId { get; set; }
        public Guid EmployeeId { get; set; }
        public string Grade { get; set; }
        public string InstitutionName { get; set; }
        public string Majors { get; set; }
        public string StartYear { get; set; }
        public string EndYear { get; set; }

    }
}
