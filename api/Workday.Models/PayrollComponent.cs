
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
    public class PayrollComponent
    {
        public Guid ID { get; set; }
        public Guid PayrollId { get; set; }
        public Guid SalaryComponentId { get; set; }
        public decimal Amount { get; set; }

    }
}
