
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
    public class BranchController : Controller
    {

        private ILogger<BranchController> logger;
        private ModelContext context;

        public BranchController(ILogger<BranchController> logger)
        {
            this.logger = logger;
            context = new ModelContext();
        }


        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var branches = await context.Branches.ToListAsync();
                return Ok(branches);
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
                var branch = await context.Branches.FindAsync(id);
                return Ok(branch);
            }
            catch(Exception ex)
            {
                logger.LogError(ex.ToString());
            }
            return Ok();
        }



        [HttpPost]
        public async Task<IActionResult> Save([FromBody] Branch branch)
        {
            int result = 0;
            try
            {
                branch.ID = Guid.NewGuid();
                context.Add(branch);
                result = await context.SaveChangesAsync();
            }
            catch(Exception ex)
            {
                logger.LogError(ex.ToString());
            }
            return Ok(result);
        }


        [HttpPut]
        public async Task<IActionResult> Update([FromBody] Branch branch)
        {
            int result = 0;
            try
            {
                context.Update(branch);
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
                var branch = await context.Branches.FindAsync(id);
                context.Remove(branch);
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
