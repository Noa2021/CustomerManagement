using CustomerManagement.Core.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CustomerManagement.Data.Configurations
{
    public class CityConfiguration : IEntityTypeConfiguration<City>
    {
        public void Configure(EntityTypeBuilder<City> builder)
        {
            builder
                .HasKey(m => m.Code);

            builder
                .Property(m => m.Code)
                .UseIdentityColumn()
                .IsRequired();

            builder
                .Property(m => m.Description)
                .IsRequired()
                .HasMaxLength(50);
            builder
                .ToTable("Cities");
        }
    }
}