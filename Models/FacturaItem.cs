using Newtonsoft.Json;
using System.Collections;
using System.Collections.Generic;

namespace PimiEscoSoftWithBackEnd.Models
{
    public class FacturaItem
    {
        //[JsonProperty("id")]
        public int Id { get; set; }
        [JsonProperty("cliente")]
        public ClienteItem Cliente { get; set; }
        public int ClienteId { get; set; }
        [JsonProperty("fecha")]
        public string Fecha { get; set; }
        [JsonProperty("compras")]
        public virtual List<FacturaDetalle> FacturaDetalles { get; set; }
        public double Total { get; set; }
      
   
    }
}