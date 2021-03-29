
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
    public class WorkScheduleController : Controller
    {

        private ILogger<WorkScheduleController> logger;
        private ModelContext context;

        public WorkScheduleController(ILogger<WorkScheduleController> logger)
        {
            this.logger = logger;
            context = new ModelContext();
        }


        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var workSchedules = await context.WorkSchedules.ToListAsync();
                return Ok(workSchedules);
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
            var workSchedule = await context.WorkSchedules.FindAsync(id);
            return Ok(workSchedule);
        }


        [HttpPost]
        public async Task<IActionResult> Save([FromBody] WorkSchedule workSchedule)
        {
            int result = 0;

            workSchedule.ID = Guid.NewGuid();
            context.Add(workSchedule);
            result = await context.SaveChangesAsync();

            return Ok(result);
        }


        [HttpPut]
        public async Task<IActionResult> Update([FromBody] WorkSchedule workSchedule)
        {
            int result = 0;

            context.Update(workSchedule);
            result = await context.SaveChangesAsync();

            return Ok(result);
        }



        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            var workSchedule = await context.WorkSchedules.FindAsync(id);
            context.Remove(workSchedule);
            var result = await context.SaveChangesAsync();
            
            return Ok(result);
        }





    }

}
