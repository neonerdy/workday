
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
    public class JobTitleController : Controller
    {

        private ILogger<JobTitleController> logger;
        private ModelContext context;

        public JobTitleController(ILogger<JobTitleController> logger)
        {
            this.logger = logger;
            context = new ModelContext();
        }


        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var jobTitles = await context.JobTitles.ToListAsync();
                return Ok(jobTitles);
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
            var JobTitle = await context.JobTitles.FindAsync(id);
            return Ok(JobTitle);
        }

        [HttpPost]
        public async Task<IActionResult> Save([FromBody] JobTitle JobTitle)
        {
            int result = 0;

            JobTitle.ID = Guid.NewGuid();
            context.Add(JobTitle);
            result = await context.SaveChangesAsync();

            return Ok(result);
        }


        [HttpPut]
        public async Task<IActionResult> Update([FromBody] JobTitle JobTitle)
        {
            int result = 0;

            context.Update(JobTitle);
            result = await context.SaveChangesAsync();

            return Ok(result);
        }



        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            var JobTitle = await context.JobTitles.FindAsync(id);
            context.Remove(JobTitle);
            var result = await context.SaveChangesAsync();
            
            return Ok(result);
        }





    }

}
