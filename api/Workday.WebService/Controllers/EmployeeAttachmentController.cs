
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
    public class EmployeeAttachmentController : Controller
    {

        private ILogger<EmployeeAttachmentController> logger;
        private ModelContext context;

        public EmployeeAttachmentController(ILogger<EmployeeAttachmentController> logger)
        {
            this.logger = logger;
            context = new ModelContext();
        }


        [HttpGet("{employeeId}")]
        public async Task<IActionResult> GetByEmployeeId(Guid employeeId)
        {
            try
            {
                var employeeAttachments = await context.EmployeeAttachments.Where(ee=>ee.EmployeeId == employeeId)
                    .ToListAsync();

                return Ok(employeeAttachments);
            }
            catch(Exception ex)
            {
                logger.LogError(ex.ToString());
            }
            return Ok();
        }


        [HttpPost]
        public async Task<IActionResult> Save([FromBody] EmployeeAttachment employeeAttachment)
        {
            int result = 0;
            try
            {
                employeeAttachment.ID = Guid.NewGuid();
                context.Add(employeeAttachment);
                result = await context.SaveChangesAsync();
            }
            catch(Exception ex)
            {
                logger.LogError(ex.ToString());
            }
            return Ok(result);
        }



        [HttpPut]
        public async Task<IActionResult> Update([FromBody] EmployeeAttachment employeeAttachment)
        {
            int result = 0;
            try
            {
                context.Update(employeeAttachment);
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
                var employeeAttachments = await context.EmployeeAttachments.FindAsync(id);
                context.Remove(employeeAttachments);
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
