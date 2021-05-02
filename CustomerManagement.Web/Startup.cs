using CustomerManagement.Core;
using CustomerManagement.Core.Services;
using CustomerManagement.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System.IO;
using CustomerManagement.Services;
namespace CustomerManagement
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
            services.AddMvc(option => option.EnableEndpointRouting = false);
            services.AddSpaStaticFiles(c =>
            {
                c.RootPath = "CustomerManagementClient/dist";
            });

            IServiceCollection serviceCollection = services.AddDbContext<CustomerManagementDBContext>(options => 
            options
            .UseLazyLoadingProxies()
            .UseSqlServer(Configuration.GetConnectionString("Default"), x => x.MigrationsAssembly("CustomerManagement.Data")));

            services.AddScoped<IUnitOfWork, UnitOfWork>();
            services.AddTransient<ICityService, CityService>();
            services.AddTransient<ICustomerService, CustomerService>();
            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();
            app.UseHttpsRedirection();
            app.UseMvc();
            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = Path.Join(env.ContentRootPath, "CustomerManagementClient");
                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                }
            });
        }
    }
}