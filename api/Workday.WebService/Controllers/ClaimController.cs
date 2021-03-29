
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
    public class ClaimController : Controller
    {

        private ILogger<ClaimController> logger;
        private ModelContext context;

        public ClaimController(ILogger<ClaimController> logger)
        {
            this.logger = logger;
            context = new ModelContext();
        }


        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var claims = await context.Claims.ToListAsync();
                return Ok(claims);
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
            var claim = await context.Claims.FindAsync(id);
            return Ok(claim);
        }


        [HttpPost]
        public async Task<IActionResult> Save([FromBody] Claim claim)
        {
            int result = 0;

            claim.ID = Guid.NewGuid();
            context.Add(claim);
            result = await context.SaveChangesAsync();

            return Ok(result);
        }


        [HttpPut]
        public async Task<IActionResult> Update([FromBody] Claim claim)
        {
            int result = 0;

            context.Update(claim);
            result = await context.SaveChangesAsync();

            return Ok(result);
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            var claim = await context.Claims.FindAsync(id);
            context.Remove(claim);
            var result = await context.SaveChangesAsync();
            
            return Ok(result);
        }





    }

}
