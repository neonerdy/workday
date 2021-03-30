
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
    public class EmployeeFamilyController : Controller
    {

        private ILogger<EmployeeFamilyController> logger;
        private ModelContext context;

        public EmployeeFamilyController(ILogger<EmployeeFamilyController> logger)
        {
            this.logger = logger;
            context = new ModelContext();
        }


        [HttpGet("{employeeId}")]
        public async Task<IActionResult> GetByEmployeeId(Guid employeeId)
        {
            try
            {
                var employeeFamilies = await context.EmployeeFamilies.Where(ee=>ee.EmployeeId == employeeId)
                    .ToListAsync();

                return Ok(employeeFamilies);
            }
            catch(Exception ex)
            {
                logger.LogError(ex.ToString());
            }
            return Ok();
        }


        [HttpPost]
        public async Task<IActionResult> Save([FromBody] EmployeeFamily employeeFamily)
        {
            int result = 0;
            try
            {
                employeeFamily.ID = Guid.NewGuid();
                context.Add(employeeFamily);
                result = await context.SaveChangesAsync();
            }
            catch(Exception ex)
            {
                logger.LogError(ex.ToString());
            }
            return Ok(result);
        }



        [HttpPut]
        public async Task<IActionResult> Update([FromBody] EmployeeFamily employeeFamily)
        {
            int result = 0;
            try
            {
                context.Update(employeeFamily);
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
                var employeeFamily = await context.EmployeeFamilies.FindAsync(id);
                context.Remove(employeeFamily);
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
