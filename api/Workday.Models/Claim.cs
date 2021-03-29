
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
    public class Claim
    {
        public Guid ID { get; set; }
        public string ClaimName { get; set; }
        public string Limit { get; set; }
        public DateTime EffectiveDate { get; set; }
        public string Description { get; set; }
    }
}
