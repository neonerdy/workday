
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
        public string TransactionId { get; set; }  
        public Guid EmployeeId { get; set; }
        public Guid ClaimId { get; set; }
        public DateTime ClaimDate { get; set; }
        public string Description { get; set; }
        public string Status { get; set; }
        public Guid ApprovalLineId { get; set; }
    }
}
