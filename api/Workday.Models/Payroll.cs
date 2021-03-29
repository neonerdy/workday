
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
    public class Payroll
    {
        public Guid ID { get; set; }
        public Guid EmployeeId { get; set; }
        public int Month { get; set; }
        public int Year { get; set; }
        public DateTime ReportingDate { get; set; }
        public decimal BasicSalaryAmount { get; set; }
        public decimal AllowanceAmount { get; set; }
        public decimal OverTimeAmount { get; set; }
        public decimal DeductionAmount { get; set; }
        public decimal TakeHomePayAmount { get; set; }
        public DateTime CreatedDate { get; set; }

    }
}
