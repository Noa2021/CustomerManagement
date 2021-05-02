using CustomerManagement.Core.Models;

namespace CityManagement.Web.Mappers
{
    public static class CityMapper
    {
        public static CityVw ConvertCityModelToCityVw(City City)
        {
            var c = new CityVw()
            {
                Code = City.Code,
                Description = City.Description,
            };

            return c;
        }
    }
}
