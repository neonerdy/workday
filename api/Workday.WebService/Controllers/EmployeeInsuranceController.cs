
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
    public class EmployeeInsuranceController : Controller
    {

        private ILogger<EmployeeInsuranceController> logger;
        private ModelContext context;

        public EmployeeInsuranceController(ILogger<EmployeeInsuranceController> logger)
        {
            this.logger = logger;
            context = new ModelContext();
        }


        [HttpGet("{employeeInsuranceId}")]
        public async Task<IActionResult> GetById(Guid employeeInsuranceId)
        {
            try
            {
                var employeeInsurance = await context.EmployeeInsurances.FindAsync(employeeInsuranceId);
                return Ok(employeeInsurance);
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
                var employeeInsurances = await context.EmployeeInsurances.Where(ec=>ec.EmployeeId == employeeId)
                    .ToListAsync();

                return Ok(employeeInsurances);
            }
            catch(Exception ex)
            {
                logger.LogError(ex.ToString());
            }
            return Ok();
        }


        [HttpPost]
        public async Task<IActionResult> Save([FromBody] EmployeeInsurance employeeInsurance)
        {
            int result = 0;
            try
            {
                employeeInsurance.EmployeeInsuranceId = Guid.NewGuid();
                context.Add(employeeInsurance);
                result = await context.SaveChangesAsync();
            }
            catch(Exception ex)
            {
                logger.LogError(ex.ToString());
            }
            return Ok(result);
        }



        [HttpPut]
        public async Task<IActionResult> Update([FromBody] EmployeeInsurance employeeInsurance)
        {
            int result = 0;
            try
            {
                context.Update(employeeInsurance);
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
                var employeeInsurance = await context.EmployeeInsurances.FindAsync(id);
                context.Remove(employeeInsurance);
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
