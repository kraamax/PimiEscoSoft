using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using PimiEscoSoftWithBackEnd.Models;
using NJsonSchema;
using NSwag.AspNetCore;
using NSwag;
//using Oracle.EntityFrameworkCore ; 
namespace PimiEscoSoftWithBackEnd
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {


var oraConn = "User Id=PimiEscoSoft;Password=123;Data Source=(DESCRIPTION =(ADDRESS_LIST =(ADDRESS =(PROTOCOL = TCP)(HOST = localhost)(PORT = 1521)))(CONNECT_DATA =(SERVICE_NAME = xe)))";
services.AddDbContext<PimiEscoSoftContext>(opt =>opt.UseOracle(oraConn));

             //services.AddDbContext<PimiEscoSoftContext>(opt =>opt.UseSqlServer(@"Server=.\SQLEXPRESS;Database=PimiEscoSoftBD;Trusted_Connection=True;"));
            /*  services.AddDbContext<ProductoContext>(opt =>opt.UseSqlServer(@"Server=.\SQLEXPRESS;Database=ProductoBD;Trusted_Connection=True;"));
services.AddDbContext<FacturaContext>(opt =>opt.UseSqlServer(@"Server=.\SQLEXPRESS;Database=FacturaBD;Trusted_Connection=True;"));
services.AddDbContext<CompraContext>(opt =>opt.UseSqlServer(@"Server=.\SQLEXPRESS;Database=CompraBD;Trusted_Connection=True;"));*/
           /*  services.AddDbContext<ClienteContext>(opt =>opt.UseInMemoryDatabase("ClienteBD"));
services.AddDbContext<ProductoContext>(opt =>opt.UseInMemoryDatabase("ProductoBD"));
services.AddDbContext<FacturaContext>(opt =>opt.UseInMemoryDatabase("FacturaBD"));
services.AddDbContext<CompraContext>(opt =>opt.UseInMemoryDatabase("CompraBD"));*/
    services.AddSwaggerDocument();
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();
                 app.UseSwagger();
             app.UseSwaggerUi3();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                }
            });
        }
    }
}
