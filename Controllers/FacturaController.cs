using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PimiEscoSoftWithBackEnd.Models;

using System;

using System.Collections;



namespace PimiEscoSoftWithBackEnd.Controllers
{
[Route("api/[controller]")]
[ApiController]
public class FacturaController : ControllerBase
{
 ClienteItem cliente1 ;
private readonly PimiEscoSoftContext _context;

public FacturaController(PimiEscoSoftContext context)
{
_context = context;

if (_context.MaestroFactura.Count() == 0)
{
// Crea un nuevo item si la coleccion esta vacia,
// lo que significa que no puedes borrar todos los Items.
 cliente1=new ClienteItem {  Nombres = "juan", Apellidos = "Priorizar", Sexo = "Masculino", Email="Hola@gmail.com",Telefono="3542342", Direccion="calle 6a"};
 ProductoItem producto = new ProductoItem();

producto.Nombre= "arroz";
producto.Precio=4000;
producto.Costo=1000;
 ProductoItem producto2 = new ProductoItem();

producto2.Nombre= "peto";
producto2.Precio=7000;
producto2.Costo=2000;
//compraContext.CompraItems.Add(new CompraItem{ IdFactura= 1 , IdProducto=producto.Id, Cantidad= 2});
//compraContext.CompraItems.Add(new CompraItem{ IdFactura= 1 , IdProducto=producto2.Id, Cantidad= 4});
//compraContext.SaveChanges();
 FacturaDetalle facturaDetalle1 = new FacturaDetalle();


facturaDetalle1.Producto=producto;
facturaDetalle1.Cantidad=2;
FacturaDetalle facturaDetalle2 = new FacturaDetalle();

facturaDetalle2.Producto=producto2;
facturaDetalle2.Cantidad=1;

  List<FacturaDetalle> DetallesFactura = new List<FacturaDetalle>();
  DetallesFactura.Add(facturaDetalle1);
  DetallesFactura.Add(facturaDetalle2);
_context.MaestroFactura.Add(new FacturaItem { Cliente= cliente1 , Fecha="Tue Jun 25 2019", FacturaDetalles=DetallesFactura});
//_context.MaestroFactura.Add(new ClienteItem { Id = 2, Nombres = "Pedro", Apellidos = "gazan", Sexo = "Masculino", Email="Ho3234la@gmail.com",Telefono="6445453", Direccion="calle 7a"});
_context.SaveChanges();
}
}



// Aquí, despues del constructor de la clase, irán los Métodos HTTP GET,POST, DELETE, PUT
[HttpGet]
/* public async Task<ActionResult<IEnumerable<FacturaItem>>> GetMaestroFactura()
{
return await _context.MaestroFactura.ToListAsync();
}*/
public IEnumerable<FacturaItem> Get()
        {
            _context.MaestroFactura.Include(t=>t.FacturaDetalles).ThenInclude(t=>t.Producto).ToList();
         
         
             return _context.MaestroFactura.Include(t=>t.Cliente);

        }
[HttpGet("{id}")]
public async Task<ActionResult<FacturaItem>> GetFacturaItem(int id)
{
FacturaItem facturaItem=null;
  foreach ( var  item in Get() ) {
   if(item.Id==id){
     facturaItem=item;
   }
  
}
if (facturaItem == null)
{
return NotFound();
}else
{
   return facturaItem;
}

/* var facturaItem = await _context.MaestroFactura.FindAsync(id);
if (facturaItem == null)
{
return NotFound();
}
return facturaItem;*/
}
// POST: api/Task
[HttpPost]
public async Task<ActionResult<FacturaItem>> PostFacturaItem(FacturaItem item)
{
  
_context.MaestroFactura.Add(item);
await _context.SaveChangesAsync();
return CreatedAtAction(nameof(GetFacturaItem), new { id = item.Id }, item);
}
[HttpPut("{id}")]
public async Task<IActionResult> PutFacturaItem(int id, FacturaItem
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
public async Task<IActionResult> DeleteFacturaItem(int id)
{
var facturaItem = await
_context.MaestroFactura.FindAsync(id);
if (facturaItem == null)
{
return NotFound();
}

_context.MaestroFactura.Remove(facturaItem);
await _context.SaveChangesAsync();
return NoContent();
}
}
}