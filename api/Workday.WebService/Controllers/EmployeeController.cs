using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;

using Workday.Models;
using Microsoft.Extensions.Logging;

namespace Workday.WebService
{
    [Route("api/[controller]/[action]")]
    public class EmployeeController : Controller
    {

        private ILogger<EmployeeController> logger;
        private ModelContext context;

        public EmployeeController(ILogger<EmployeeController> logger)
        {
            this.logger = logger;
            context = new ModelContext();
        }


        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var employees = await context.Employees.ToListAsync();
                return Ok(employees);
            }
            catch(Exception ex)
            {
                logger.LogError(ex.ToString());
            }
            return Ok();
        }


        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(Guid id)
        {
            var employee = await context.Employees.FindAsync(id);
            return Ok(employee);
        }

        [HttpPost]
        public async Task<IActionResult> Save([FromBody] Employee employee)
        {
            int result = 0;

            employee.ID = Guid.NewGuid();
            employee.CreatedDate = DateTime.Now;

            context.Add(employee);
            result = await context.SaveChangesAsync();

            return Ok(result);
        }


        [HttpPut]
        public async Task<IActionResult> Update([FromBody] Employee employee)
        {
            int result = 0;

            employee.ModifiedDate = DateTime.Now;
            context.Update(employee);
            result = await context.SaveChangesAsync();

            return Ok(result);
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            var employee = await context.Employees.FindAsync(id);
            context.Remove(employee);
            var result = await context.SaveChangesAsync();
            
            return Ok(result);
        }








    }

}
