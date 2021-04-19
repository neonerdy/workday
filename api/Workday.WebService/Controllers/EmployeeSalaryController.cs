
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
    public class EmployeeSalaryController : Controller
    {

        private ILogger<EmployeeSalaryController> logger;
        private ModelContext context;

        public EmployeeSalaryController(ILogger<EmployeeSalaryController> logger)
        {
            this.logger = logger;
            context = new ModelContext();
        }


        
        [HttpGet("{employeeSalaryId}")]
        public async Task<IActionResult> GetById(Guid employeeSalaryId)
        {
            try
            {
                var employeeSalary = await context.EmployeeSalaries.FindAsync(employeeSalaryId);
                return Ok(employeeSalary);
            }
            catch(Exception ex)
            {
                logger.LogError(ex.ToString());
            }
            return Ok();
        }


        [HttpGet("{employeeId}")]
        public async Task<IActionResult> GetByEmployeeId(Guid employeeId)
        {
            try
            {
                var employeeSalaries = await context.EmployeeSalaries
                    .Include(es=>es.SalaryComponent)
                    .Where(ee=>ee.EmployeeId == employeeId)
                    .ToListAsync();

                return Ok(employeeSalaries);
            }
            catch(Exception ex)
            {
                logger.LogError(ex.ToString());
            }
            return Ok();
        }


        [HttpPost]
        public async Task<IActionResult> Save([FromBody] EmployeeSalary employeeSalary)
        {
            int result = 0;
            try
            {
                employeeSalary.EmployeeSalaryId = Guid.NewGuid();
                context.Add(employeeSalary);
                result = await context.SaveChangesAsync();
            }
            catch(Exception ex)
            {
                logger.LogError(ex.ToString());
            }
            return Ok(result);
        }



        [HttpPut]
        public async Task<IActionResult> Update([FromBody] EmployeeSalary employeeSalary)
        {
            int result = 0;
            try
            {
                context.Update(employeeSalary);
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
                var employeeSalary = await context.EmployeeSalaries.FindAsync(id);
                context.Remove(employeeSalary);
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
