
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
    public class EmployeeInsurance
    {
        public Guid EmployeeInsuranceId { get; set; }
        public Guid EmployeeId { get; set; }
        public string InsuranceName { get; set; }
        public string InsuranceNumber { get; set; }
        public DateTime EffectiveDate { get; set; }
     }

}
