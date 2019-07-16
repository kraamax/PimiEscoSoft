
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PimiEscoSoftWithBackEnd.Models;
namespace PimiEscoSoftWithBackEnd.Controllers
{
[Route("api/[controller]")]
[ApiController]
public class FacturaDetalleController : ControllerBase
{
private readonly PimiEscoSoftContext _context;
public FacturaDetalleController(PimiEscoSoftContext context)
{
_context = context;
if (_context.DetallesFactura.Count() == 0)
{
    ProductoItem producto = new ProductoItem();
producto.Id=12;
producto.Nombre= "arroz";
producto.Precio=4000;
// Crea un nuevo item si la coleccion esta vacia,
// lo que significa que no puedes borrar todos los Items.
_context.DetallesFactura.Add(new FacturaDetalle {  Producto=producto, Cantidad=2});
_context.SaveChanges();
}
}

// Aquí, despues del constructor de la clase, irán los Métodos HTTP GET,POST, DELETE, PUT
[HttpGet]
public async Task<ActionResult<IEnumerable<FacturaDetalle>>> GetDetallesFactura()
{
return await _context.DetallesFactura.ToListAsync();
}
[HttpGet("{id}")]
public async Task<ActionResult<FacturaDetalle>> GetFacturaDetalle(int id)
{
var FacturaDetalle = await _context.DetallesFactura.FindAsync(id);
if (FacturaDetalle == null)
{
return NotFound();
}
return FacturaDetalle;
}
// POST: api/Task
[HttpPost]
public async Task<ActionResult<FacturaDetalle>> PostFacturaDetalle(FacturaDetalle item)
{
_context.DetallesFactura.Add(item);
await _context.SaveChangesAsync();
return CreatedAtAction(nameof(GetFacturaDetalle), new { id = item.Id }, item);
}
[HttpPut("{id}")]
public async Task<IActionResult> PutFacturaDetalle(int id, FacturaDetalle
item)
{
if (id != item.Id)
{
return BadRequest();
}
_context.Entry(item).State = EntityState.Modified;
await _context.SaveChangesAsync();
return NoContent();
}
[HttpDelete("{id}")]
public async Task<IActionResult> DeleteFacturaDetalle(int id)
{
var FacturaDetalle = await
_context.DetallesFactura.FindAsync(id);
if (FacturaDetalle == null)
{
return NotFound();
}

_context.DetallesFactura.Remove(FacturaDetalle);
await _context.SaveChangesAsync();
return NoContent();
}
}
}