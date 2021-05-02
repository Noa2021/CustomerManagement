using CustomerManagement.Core.Models;
using CustomerManagement.Core.Repositories;
using System;
using System.Threading.Tasks;

namespace CustomerManagement.Core
{
    public interface IUnitOfWork : IDisposable
    {
        IRepository<City> Cities { get; }
        IRepository<Customer> Customers { get; }
        Task<int> CommitAsync();
    }
}
