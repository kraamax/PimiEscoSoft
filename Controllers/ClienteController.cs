
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
public class ClienteController : ControllerBase
{
private readonly PimiEscoSoftContext _context;
public ClienteController(PimiEscoSoftContext context)
{
_context = context;
if (_context.Clientes.Count() == 0)
{
// Crea un nuevo item si la coleccion esta vacia,
// lo que significa que no puedes borrar todos los Items.
_context.Clientes.Add(new ClienteItem { Nombres = "juan", Apellidos = "Priorizar", Sexo = "Masculino", Email="Hola@gmail.com",Telefono="3542342", Direccion="calle 6a"});
_context.Clientes.Add(new ClienteItem { Nombres = "Pedro", Apellidos = "gazan", Sexo = "Masculino", Email="Ho3234la@gmail.com",Telefono="6445453", Direccion="calle 7a"});
_context.SaveChanges();





}
}

// Aquí, despues del constructor de la clase, irán los Métodos HTTP GET,POST, DELETE, PUT
[HttpGet]
public async Task<ActionResult<IEnumerable<ClienteItem>>> GetClientes()
{
return await _context.Clientes.ToListAsync();
}
[HttpGet("{id}")]
public async Task<ActionResult<ClienteItem>> GetClienteItem(int id)
{
var clienteItem = await _context.Clientes.FindAsync(id);
if (clienteItem == null)
{
return NotFound();
}
return clienteItem;
}
// POST: api/Task
[HttpPost]
public async Task<ActionResult<ClienteItem>> PostClienteItem(ClienteItem item)
{
_context.Clientes.Add(item);
await _context.SaveChangesAsync();
return CreatedAtAction(nameof(GetClienteItem), new { id = item.Id }, item);
}
[HttpPut("{id}")]
public async Task<IActionResult> PutClienteItem(int id, ClienteItem
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
public async Task<IActionResult> DeleteClienteItem(int id)
{
var ClienteItem = await
_context.Clientes.FindAsync(id);
if (ClienteItem == null)
{
return NotFound();
}

_context.Clientes.Remove(ClienteItem);
await _context.SaveChangesAsync();
return NoContent();
}
}
}