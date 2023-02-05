using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using dec1.DataBase;
using dec1.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Authorization;

namespace dec1.Controllers
{
/*    [Authorize]
*/    [Route("api/[controller]")]
    [ApiController]
    public class HousesController : BaseController
    {
        public HousesController(ProjectContext context, IConfiguration configuration) : base(context, configuration)
        {
        }
/*        [Authorize(Roles ="Admin,Employee,Medic")]
*/        // GET: Houses
        [HttpGet]
        public async Task<IActionResult> Index()
        {
            return Ok(await _context.Houses.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var house = await _context.Houses
                .FirstOrDefaultAsync(m => m.Id == id);
            if (house == null)
            {
                return NotFound();
            }

            return Ok(house);
        }
/*        [Authorize(Roles = "Employee,Admin")]
*/        [HttpPut]
        public async Task<IActionResult> Create(House house)
        {
            _context.Houses.Add(house);
            await _context.SaveChangesAsync();
            return Ok(house);
        }
/*        [Authorize(Roles = "Employee,Admin")]
*/        [HttpPost]
        public async Task<IActionResult> Edit(House house)
        {
            try
                {
                    _context.Houses.Update(house);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!HouseExists(house.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
        }

/*        [Authorize(Roles = "Employee,Admin")]
*/        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var house = await _context.Houses.FindAsync(id);
            List<Patient> patients = await _context.Patients.Where(patient => patient.HouseId == id).ToListAsync();
            if (patients.Any())
            {
                foreach (var patient in patients)
                {
                    _context.Patients.Remove(patient);
                }
            }
            _context.Houses.Remove(house);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool HouseExists(int id)
        {

            return _context.Houses.Any(e => e.Id == id);
        }
    }
}
