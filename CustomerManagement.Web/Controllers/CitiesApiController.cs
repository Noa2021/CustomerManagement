using CityManagement.Web.Mappers;
using CustomerManagement.Core.Models;
using CustomerManagement.Core.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CustomerManagement.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CitiesApiController : ControllerBase
    {
        private readonly ICityService _CityService;

        public CitiesApiController(ICityService CityService)
        {
            this._CityService = CityService;
        }

        [HttpGet("GetAllCities")]
        public async Task<ActionResult<IEnumerable<CityVw>>> GetAllCities()
        {
            var cities = await _CityService.GetAllCities();
            var citiesVw = new List<CityVw>();

            foreach (var city in cities)
            {
                citiesVw.Add(CityMapper.ConvertCityModelToCityVw(city));
            }
            return Ok(citiesVw);
        }
    }
}
