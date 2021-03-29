
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
    public class WorkSchedule
    {
        public Guid ID { get; set; }
        public string ScheduleName { get; set; }
        public string ScheduleIn { get; set; }
        public string ScheduleOut { get; set; }
        public string Note { get; set; }

    }
}
