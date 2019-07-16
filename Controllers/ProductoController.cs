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
public class ProductoController : ControllerBase
{
private readonly PimiEscoSoftContext _context;
public ProductoController(PimiEscoSoftContext context)
{
_context = context;
if (_context.ProductoItems.Count() == 0)
{
// Crea un nuevo item si la coleccion esta vacia,
// lo que significa que no puedes borrar todos los Items.
_context.ProductoItems.Add(new ProductoItem {  Nombre = "Pan",Precio =30000,Costo=2000});
_context.ProductoItems.Add(new ProductoItem { Nombre = "Pan de queso",Precio =2000,Costo=1000});
_context.SaveChanges();
}
}

// Aquí, despues del constructor de la clase, irán los Métodos HTTP GET,POST, DELETE, PUT
[HttpGet]
public async Task<ActionResult<IEnumerable<ProductoItem>>> GetProductoItems()
{
return await _context.ProductoItems.ToListAsync();
}
[HttpGet("{id}")]
public async Task<ActionResult<ProductoItem>> GetProductoItem(int id)
{
var productoItem = await _context.ProductoItems.FindAsync(id);
if (productoItem == null)
{
return NotFound();
}
return productoItem;
}
// POST: api/Task
[HttpPost]
public async Task<ActionResult<ProductoItem>> PostProductoItem(ProductoItem item)
{
_context.ProductoItems.Add(item);
await _context.SaveChangesAsync();
return CreatedAtAction(nameof(GetProductoItem), new { id = item.Id }, item);
}
[HttpPut("{id}")]
public async Task<IActionResult> PutProductoItem(int id, ProductoItem
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
public async Task<IActionResult> DeleteProductoItem(int id)
{
var productoItem = await
_context.ProductoItems.FindAsync(id);
if (productoItem == null)
{
return NotFound();
}

_context.ProductoItems.Remove(productoItem);
await _context.SaveChangesAsync();
return NoContent();
}
}
}