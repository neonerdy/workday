
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
    public class SalaryComponentController : Controller
    {

        private ILogger<SalaryComponentController> logger;
        private ModelContext context;

        public SalaryComponentController(ILogger<SalaryComponentController> logger)
        {
            this.logger = logger;
            context = new ModelContext();
        }


        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var salaryComponents = await context.SalaryComponents.ToListAsync();
                return Ok(salaryComponents);
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
                var salaryComponent = await context.SalaryComponents.FindAsync(id);
                return Ok(salaryComponent);
            }
            catch(Exception ex) 
            {
                logger.LogError(ex.ToString());
            }
            return Ok();
        }



        [HttpPost]
        public async Task<IActionResult> Save([FromBody] SalaryComponent salaryComponent)
        {
            int result = 0;
            try
            {
                salaryComponent.ID = Guid.NewGuid();
                context.Add(salaryComponent);
                result = await context.SaveChangesAsync();
            }
            catch(Exception ex) 
            {
                logger.LogError(ex.ToString());
            }
            return Ok(result);
        }



        [HttpPut]
        public async Task<IActionResult> Update([FromBody] SalaryComponent salaryComponent)
        {
            int result = 0;
            try
            {
                context.Update(salaryComponent);
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
                var salaryComponent = await context.SalaryComponents.FindAsync(id);
                context.Remove(salaryComponent);
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
