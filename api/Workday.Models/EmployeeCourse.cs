using System;
using System.Collections.Generic;
using System.Text;

namespace Workday.Models
{
    public class EmployeeCourse
    {
        public Guid ID { get; set; }
        public Guid EmployeeId { get; set; }
        public string CourseName { get; set; }
        public string Provider { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Duration { get; set; }
        public bool IsCertified { get; set; }


    }

}
