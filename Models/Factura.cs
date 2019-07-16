namespace PimiEscoSoftWithBackEnd.Models
{
    public class Factura
    {
        public int Id { get; set; }

        public FacturaItem FacturaItem { get; set; }

       // public List<CompraItem> Compras { get; set; }

    }
}