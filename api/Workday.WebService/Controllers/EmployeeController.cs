
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
                var employees = await context.Employees
                    .Include(e=>e.Department)
                    .Include(e=>e.JobTitle)
                    .ToListAsync();
                
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
            try
            {
                var employee = await context.Employees
                    .Include(e=>e.Department)
                    .Include(e=>e.JobTitle)
                    .Where(e=>e.ID == id)
                    .SingleOrDefaultAsync();
                
                return Ok(employee);
            }
            catch(Exception ex)
            {
                logger.LogError(ex.ToString());
            }
            return Ok();
        }



        [HttpPost]
        public async Task<IActionResult> Save([FromBody] Employee employee)
        {
            int result = 0;
            try
            {
                employee.ID = Guid.NewGuid();
                employee.ApprovalLineId = Guid.Empty;
                employee.CreatedDate = DateTime.Now;
                employee.ModifiedDate = DateTime.Now;
                context.Add(employee);
                result = await context.SaveChangesAsync();
            }
            catch(Exception ex)
            {
                logger.LogError(ex.ToString());
            }
            return Ok(result);
        }



        [HttpPut]
        public async Task<IActionResult> Update([FromBody] Employee employee)
        {
            int result = 0;
            try
            {
                employee.ModifiedDate = DateTime.Now;
                context.Update(employee);
                result = await context.SaveChangesAsync();
            }
            catch(Exception ex)
            {
                logger.LogError(ex.ToString());
            }
            return Ok(result);
        }




        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            int result = 0;
            try
            {
                var employee = await context.Employees.FindAsync(id);
                context.Remove(employee);
                result = await context.SaveChangesAsync();
            }
            catch(Exception ex)
            {
                logger.LogError(ex.ToString());
            }
            return Ok(result);
        }





    }

}
