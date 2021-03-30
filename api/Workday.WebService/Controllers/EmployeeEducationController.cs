
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
    public class EmployeeEducationController : Controller
    {

        private ILogger<EmployeeEducationController> logger;
        private ModelContext context;

        public EmployeeEducationController(ILogger<EmployeeEducationController> logger)
        {
            this.logger = logger;
            context = new ModelContext();
        }


        [HttpGet("{employeeId}")]
        public async Task<IActionResult> GetByEmployeeId(Guid employeeId)
        {
            try
            {
                var employeeEducations = await context.EmployeeEducations.Where(ee=>ee.EmployeeId == employeeId)
                    .ToListAsync();

                return Ok(employeeEducations);
            }
            catch(Exception ex)
            {
                logger.LogError(ex.ToString());
            }
            return Ok();
        }


        [HttpPost]
        public async Task<IActionResult> Save([FromBody] EmployeeEducation employeeEducation)
        {
            int result = 0;
            try
            {
                employeeEducation.ID = Guid.NewGuid();
                context.Add(employeeEducation);
                result = await context.SaveChangesAsync();
            }
            catch(Exception ex)
            {
                logger.LogError(ex.ToString());
            }
            return Ok(result);
        }



        [HttpPut]
        public async Task<IActionResult> Update([FromBody] EmployeeEducation employeeEducation)
        {
            int result = 0;
            try
            {
                context.Update(employeeEducation);
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
                var employeeEducation = await context.EmployeeEducations.FindAsync(id);
                context.Remove(employeeEducation);
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
