
using Newtonsoft.Json;
///<Summary>
/// Se coloca TaskItem a la Clase en lugar de Task,

/// </Summary>
///
namespace PimiEscoSoftWithBackEnd.Models
{
public class ProductoItem
{
//[JsonProperty("id")]
public int Id { get; set; }
[JsonProperty("nombre")]
public string Nombre { get; set; }
[JsonProperty("precio")]
public double Precio { get; set; }
public double Costo { get; set; }


}
}