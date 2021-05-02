using CustomerManagement.Core.Models;
using CustomerManagement.Web.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerManagement.Web.Mappers
{
    public static class CustomerMapper
    {
        public static Customer ConvertCustomerRequestToCustomerModel(CustomerRequest customerRequest)
        {
            var c = new Customer()
            {
                FullNameEn = customerRequest.FullNameEn,
                FullNameHe = customerRequest.FullNameHe,
                Bank = customerRequest.Bank,
                Brunch = customerRequest.Brunch,
                AccountNumber = customerRequest.AccountNumber,
                BirthDate = customerRequest.BirthDate,
                City = customerRequest.City,
                IdNumber = customerRequest.IdNumber
            };

            return c;
        }

        public static CustomerVw ConvertCustomerModelToCustomerVw(Customer customer)
        {
            var c = new CustomerVw()
            {
                Id = customer.Id,
                FullNameEn = customer.FullNameEn,
                FullNameHe = customer.FullNameHe,
                Bank = customer.Bank,
                Brunch = customer.Brunch,
                AccountNumber = customer.AccountNumber,
                BirthDate = customer.BirthDate,
                City = customer.CityObj.Description,
                IdNumber = customer.IdNumber
            };

            return c;
        }
    }
}
