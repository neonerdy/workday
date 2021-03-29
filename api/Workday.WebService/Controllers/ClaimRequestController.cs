
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
    public class ClaimRequestController : Controller
    {

        private ILogger<ClaimRequestController> logger;
        private ModelContext context;

        public ClaimRequestController(ILogger<ClaimRequestController> logger)
        {
            this.logger = logger;
            context = new ModelContext();
        }


        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var claimRequests = await context.ClaimRequests.ToListAsync();
                return Ok(claimRequests);
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
            var claimRequest = await context.ClaimRequests.FindAsync(id);
            return Ok(claimRequest);
        }


        [HttpPost]
        public async Task<IActionResult> Save([FromBody] ClaimRequest claimRequest)
        {
            int result = 0;

            claimRequest.ID = Guid.NewGuid();
            context.Add(claimRequest);
            result = await context.SaveChangesAsync();

            return Ok(result);
        }


        [HttpPut]
        public async Task<IActionResult> Update([FromBody] ClaimRequest claimRequest)
        {
            int result = 0;

            context.Update(claimRequest);
            result = await context.SaveChangesAsync();

            return Ok(result);
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            var claimRequest = await context.ClaimRequests.FindAsync(id);
            context.Remove(claimRequest);
            var result = await context.SaveChangesAsync();
            
            return Ok(result);
        }





    }

}
