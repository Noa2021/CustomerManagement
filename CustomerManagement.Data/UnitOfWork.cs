using CustomerManagement.Core;
using CustomerManagement.Core.Models;
using CustomerManagement.Core.Repositories;
using CustomerManagement.Data.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CustomerManagement.Data
{
    public class UnitOfWork: IUnitOfWork
    {
        private readonly CustomerManagementDBContext _context;
        private Repository<City> _CityRepository;
        private Repository<Customer> _CustomerRepository;


        public UnitOfWork(CustomerManagementDBContext context)
        {
            this._context = context;
        }

        public IRepository<City> Cities => _CityRepository = _CityRepository ?? new Repository<City>(_context);

        public IRepository<Customer> Customers => _CustomerRepository = _CustomerRepository ?? new Repository<Customer>(_context);

        public async Task<int> CommitAsync()
        {
            return await _context.SaveChangesAsync();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
