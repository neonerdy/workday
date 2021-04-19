
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
    public class EmployeeSalary
    {
        public Guid EmployeeSalaryId { get; set; }
        public Guid EmployeeId { get; set; }
        public Guid SalaryComponentId { get; set; }
        public SalaryComponent SalaryComponent { get; set; }
        public decimal Amount { get; set; }

    }
}
