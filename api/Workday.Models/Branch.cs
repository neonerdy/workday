using System;
using System.Collections.Generic;
using System.Text;

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
