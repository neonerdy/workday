
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
    public class EmployeeCourseController : Controller
    {

        private ILogger<EmployeeCourseController> logger;
        private ModelContext context;

        public EmployeeCourseController(ILogger<EmployeeCourseController> logger)
        {
            this.logger = logger;
            context = new ModelContext();
        }


        [HttpGet("{employeeCourseId}")]
        public async Task<IActionResult> GetById(Guid employeeCourseId)
        {
            try
            {
                var employeeCourse = await context.EmployeeCourses.FindAsync(employeeCourseId);
                return Ok(employeeCourse);
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
                var employeeCourses = await context.EmployeeCourses.Where(ec=>ec.EmployeeId == employeeId)
                    .ToListAsync();

                return Ok(employeeCourses);
            }
            catch(Exception ex)
            {
                logger.LogError(ex.ToString());
            }
            return Ok();
        }


        [HttpPost]
        public async Task<IActionResult> Save([FromBody] EmployeeCourse employeeCourse)
        {
            int result = 0;
            try
            {
                employeeCourse.EmployeeCourseId = Guid.NewGuid();
                context.Add(employeeCourse);
                result = await context.SaveChangesAsync();
            }
            catch(Exception ex)
            {
                logger.LogError(ex.ToString());
            }
            return Ok(result);
        }



        [HttpPut]
        public async Task<IActionResult> Update([FromBody] EmployeeCourse employeeCourse)
        {
            int result = 0;
            try
            {
                context.Update(employeeCourse);
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
                var employeeCourse = await context.EmployeeCourses.FindAsync(id);
                context.Remove(employeeCourse);
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
