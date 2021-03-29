using System;
using System.Collections.Generic;
using System.Text;

namespace Workday.Models
{
    public class Department
    {
        public Guid ID { get; set; }
        public string DepartmentName { get; set; }
        public string Description { get; set; }
    }
}
