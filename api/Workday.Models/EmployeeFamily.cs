using System;
using System.Collections.Generic;
using System.Text;

namespace Workday.Models
{
    public class EmployeeFamily
    {
        public Guid ID { get; set; }
        public Guid EmployeeId { get; set; }
        public string FamilyName { get; set; }
        public string Relationship { get; set; }
        public string MaritalStatus { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public bool IsEmergencyContact { get; set; }

    }
}
