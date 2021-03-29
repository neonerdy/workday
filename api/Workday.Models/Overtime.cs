
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
    public class Overtime
    {
        public Guid ID { get; set; }
        public Guid EmployeeId { get; set; }
        public DateTime OverTimeDate { get; set; }
        public Guid WorkScheduleId { get; set; }
        public string ClockIn { get; set; }
        public string ClockOut { get; set; }
        public int DurationHour { get; set; }
        public int DurationMinute { get; set; }
        public string Note { get; set; }
        public string Status { get; set; }

    }
}
