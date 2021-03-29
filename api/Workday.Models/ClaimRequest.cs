
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
    public class ClaimRequest
    {
        public Guid ID { get; set; }
        public Guid EmployeeId { get; set; }
        public Guid ClaimId { get; set; }
        public DateTime ClaimDate { get; set; }
        public string Note { get; set; }
        public bool IsApproved { get; set; }
        public Guid ApprovalLineId { get; set; }
    }
}
