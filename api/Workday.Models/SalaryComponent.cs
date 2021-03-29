
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
    public class SalaryComponent
    {
        public Guid ID { get; set; }
        public string ComponentName { get; set; }
        public string Type { get; set; }
        public string Occurance { get; set; }
        public decimal Amount { get; set; }

    }
}
