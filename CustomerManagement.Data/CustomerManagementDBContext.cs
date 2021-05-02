using CustomerManagement.Core.Models;
using Microsoft.EntityFrameworkCore;
using CustomerManagement.Data.Configurations;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CustomerManagement.Data
{
    public class CustomerManagementDBContext : DbContext
    {
        public DbSet<City> Cities { get; set; }
        public DbSet<Customer> Customers { get; set; }

        public CustomerManagementDBContext(DbContextOptions<CustomerManagementDBContext> options)
            : base(options)
        { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder
                .ApplyConfiguration(new CityConfiguration());

            builder
                .ApplyConfiguration(new CustomerConfiguration());
        }
    }
}
