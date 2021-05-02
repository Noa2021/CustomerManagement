using CustomerManagement.Core.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CustomerManagement.Core.Services
{
    public interface ICityService
    {
        Task<IEnumerable<City>> GetAllCities();
    }
}
