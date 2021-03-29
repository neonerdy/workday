
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
    public class Task
    {
        public Guid ID { get; set; }
        public string Title { get; set; }
        public string Priority { get; set; }
        public Guid AssignedTo { get; set; }
        public string Estimation { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }
        public string Status { get; set; }
    }
}
