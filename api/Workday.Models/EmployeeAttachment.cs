
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
    public class EmployeeAttachment
    {
        public Guid ID { get; set; }
        public Guid EmployeeId { get; set; }
        public string FileName { get; set; }
        public string Type { get; set; }
        public string Size { get; set; }
        public DateTime UploadedDate { get; set; }
    }
}
