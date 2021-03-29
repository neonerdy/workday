
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
    public class Branch
    {
        public Guid ID { get; set; }
        public string BranchName { get; set; }
        public string Province { get; set; }
        public string City { get; set; }
    }
}
