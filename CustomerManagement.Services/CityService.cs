using CustomerManagement.Core;
using CustomerManagement.Core.Models;
using CustomerManagement.Core.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CustomerManagement.Services
{
    public class CityService : ICityService
    {
        private readonly IUnitOfWork _unitOfWork;
        public CityService(IUnitOfWork unitOfWork)
        {
            this._unitOfWork = unitOfWork;
        }

        public async Task<IEnumerable<City>> GetAllCities()
        {
            return await _unitOfWork.Cities
                .GetAllAsyncFromSql("SelectAllCities");
        }
    }
}
