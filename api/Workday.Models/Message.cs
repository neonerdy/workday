
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
    public class Message
    {
        public Guid ID { get; set; }
        public Guid SenderId { get; set; }
        public Guid DestinationId { get; set; }
        public string Subject { get; set; }
        public DateTime SentDate { get; set; }
        public string Body { get; set; }
        public string Tag { get; set; }
        public string Status { get; set; }

    }
}
