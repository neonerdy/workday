
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
    public class LeaveType
    {
        public Guid ID { get; set; }
        public string LeaveTypeName { get; set; }
        public int DaysGiven { get; set; }
        public bool IsDeduction { get; set; }
        public string Note { get; set; }

    }
}
