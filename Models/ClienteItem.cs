
using Newtonsoft.Json;
///<Summary>
/// Se coloca TaskItem a la Clase en lugar de Task,

/// </Summary>
///
namespace PimiEscoSoftWithBackEnd.Models
{
public class ClienteItem
{
//[JsonProperty("id")]
public int Id { get; set; }
[JsonProperty("nombres")]
public string Nombres { get; set; }
[JsonProperty("apellidos")]
public string Apellidos { get; set; }
[JsonProperty("sexo")]
public string Sexo { get; set; }

[JsonProperty("email")]
public string Email { get; set; }
[JsonProperty("telefono")]
public string Telefono { get; set; }
[JsonProperty("direccion")]
public string Direccion { get; set; }
}
}