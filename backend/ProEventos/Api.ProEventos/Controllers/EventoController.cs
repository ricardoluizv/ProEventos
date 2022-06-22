using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.ProEventos.Data;
using Api.ProEventos.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Api.ProEventos.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventoController : ControllerBase
    {
        private readonly DataContext _context;

        public EventoController(DataContext context)
        {
            this._context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_context.Eventos);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(_context.Eventos.FirstOrDefault(e => e.EventoId == id));
        }
    }
}
