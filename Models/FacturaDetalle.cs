using Newtonsoft.Json;
//using System.ComponentModel.DataAnnotations;

namespace PimiEscoSoftWithBackEnd.Models

{
    public class FacturaDetalle
    {
 // [Key]
//[JsonProperty("id")]
public int Id { get; set; }

public int ProductoId { get; set; }
public double Precio { get; set; }
[JsonProperty("producto")]
public ProductoItem Producto { get; set; }
[JsonProperty("cantidad")]
public int Cantidad { get; set; }
public double SubTotal { get; set; }
    }
}