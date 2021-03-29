
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
    public class AttendanceController : Controller
    {

        private ILogger<AttendanceController> logger;
        private ModelContext context;

        public AttendanceController(ILogger<AttendanceController> logger)
        {
            this.logger = logger;
            context = new ModelContext();
        }


        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var attendances = await context.Attendances.ToListAsync();
                return Ok(attendances);
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
            var attendance = await context.Attendances.FindAsync(id);
            return Ok(attendance);
        }

        [HttpPost]
        public async Task<IActionResult> Save([FromBody] Attendance attendance)
        {
            int result = 0;

            attendance.ID = Guid.NewGuid();
            context.Add(attendance);
            result = await context.SaveChangesAsync();

            return Ok(result);
        }


        [HttpPut]
        public async Task<IActionResult> Update([FromBody] Attendance attendance)
        {
            int result = 0;

            context.Update(attendance);
            result = await context.SaveChangesAsync();

            return Ok(result);
        }



        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            var attendance = await context.Attendances.FindAsync(id);
            context.Remove(attendance);
            var result = await context.SaveChangesAsync();
            
            return Ok(result);
        }





    }

}
