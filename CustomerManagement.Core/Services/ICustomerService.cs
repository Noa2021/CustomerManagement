using CustomerManagement.Core.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CustomerManagement.Core.Services
{
    public interface ICustomerService
    {
        Task<IEnumerable<Customer>> GetAllCustomers();
        Task<Customer> CreateCustomer(Customer newCustomer);
    }
}
