
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
    public class JobTitle
    {
        public Guid ID { get; set; }
        public string JobTitleName { get; set; }
        public string JobLevel { get; set; }
        public string Description { get; set; }
    }
}
