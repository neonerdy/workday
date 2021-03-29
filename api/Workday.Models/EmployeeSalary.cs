using System;
using System.Collections.Generic;
using System.Text;

namespace Workday.Models
{
    public class EmployeeSalary
    {
        public Guid ID { get; set; }
        public Guid EmployeeId { get; set; }
        public Guid SalaryComponentId { get; set; }
        public SalaryComponent SalaryComponent { get; set; }
        public decimal Amount { get; set; }

    }
}
