
using Microsoft.EntityFrameworkCore;
namespace PimiEscoSoftWithBackEnd.Models
{
public class PimiEscoSoftContext : DbContext
{
public PimiEscoSoftContext(DbContextOptions<PimiEscoSoftContext> options) :
base(options)
{
}
public DbSet<ClienteItem> Clientes { get; set; }
public DbSet<FacturaDetalle> DetallesFactura { get; set; }
public DbSet<FacturaItem> MaestroFactura { get; set; }
public DbSet<ProductoItem> ProductoItems { get; set; }
}
}