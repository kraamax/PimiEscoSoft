using Microsoft.EntityFrameworkCore.Migrations;
using Oracle.EntityFrameworkCore.Metadata;

namespace PimiEscoSoftWithBackEnd.Migrations
{
    public partial class PimiEscoSoftBD : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Clientes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Oracle:ValueGenerationStrategy", OracleValueGenerationStrategy.IdentityColumn),
                    Nombres = table.Column<string>(nullable: true),
                    Apellidos = table.Column<string>(nullable: true),
                    Sexo = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    Telefono = table.Column<string>(nullable: true),
                    Direccion = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clientes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ProductoItems",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Oracle:ValueGenerationStrategy", OracleValueGenerationStrategy.IdentityColumn),
                    Nombre = table.Column<string>(nullable: true),
                    Precio = table.Column<double>(nullable: false),
                    Costo = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductoItems", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "MaestroFactura",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Oracle:ValueGenerationStrategy", OracleValueGenerationStrategy.IdentityColumn),
                    ClienteId = table.Column<int>(nullable: false),
                    Fecha = table.Column<string>(nullable: true),
                    Total = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MaestroFactura", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MaestroFactura_Clientes_ClienteId",
                        column: x => x.ClienteId,
                        principalTable: "Clientes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "DetallesFactura",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Oracle:ValueGenerationStrategy", OracleValueGenerationStrategy.IdentityColumn),
                    ProductoId = table.Column<int>(nullable: false),
                    Precio = table.Column<double>(nullable: false),
                    Cantidad = table.Column<int>(nullable: false),
                    SubTotal = table.Column<double>(nullable: false),
                    FacturaItemId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DetallesFactura", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DetallesFactura_MaestroFactura_FacturaItemId",
                        column: x => x.FacturaItemId,
                        principalTable: "MaestroFactura",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_DetallesFactura_ProductoItems_ProductoId",
                        column: x => x.ProductoId,
                        principalTable: "ProductoItems",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_DetallesFactura_FacturaItemId",
                table: "DetallesFactura",
                column: "FacturaItemId");

            migrationBuilder.CreateIndex(
                name: "IX_DetallesFactura_ProductoId",
                table: "DetallesFactura",
                column: "ProductoId");

            migrationBuilder.CreateIndex(
                name: "IX_MaestroFactura_ClienteId",
                table: "MaestroFactura",
                column: "ClienteId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DetallesFactura");

            migrationBuilder.DropTable(
                name: "MaestroFactura");

            migrationBuilder.DropTable(
                name: "ProductoItems");

            migrationBuilder.DropTable(
                name: "Clientes");
        }
    }
}
