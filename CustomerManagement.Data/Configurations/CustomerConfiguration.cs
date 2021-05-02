using CustomerManagement.Core.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CustomerManagement.Data.Configurations
{
    public class CustomerConfiguration : IEntityTypeConfiguration<Customer>
    {
        public void Configure(EntityTypeBuilder<Customer> builder)
        {
            builder
                .HasKey(m => m.Id);

            builder
                .Property(m => m.Id)
                .UseIdentityColumn()
                .IsRequired();

            builder
                .Property(m => m.FullNameHe)
                .IsRequired()
                .HasMaxLength(20);
            builder
                .Property(m => m.FullNameEn)
                .IsRequired()
                .HasMaxLength(15);
            builder
                .Property(m => m.BirthDate)
                .IsRequired();
            builder
                .Property(m => m.IdNumber)
                .IsRequired();
            builder
                .Property(m => m.City)
                .IsRequired();
            builder.
                 HasOne(e => e.CityObj)
                .WithOne()
                .HasForeignKey<Customer>(e => e.City);
            builder
                 .Property(m => m.Bank)
                 .IsRequired();
            builder
                 .Property(m => m.Brunch)
                 .IsRequired();
            builder
                 .Property(m => m.AccountNumber)
                 .IsRequired();

            builder
                .ToTable("Customers");
        }
    }
}