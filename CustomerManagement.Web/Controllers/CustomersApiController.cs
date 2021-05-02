using CustomerManagement.Core.Models;
using CustomerManagement.Core.Services;
using CustomerManagement.Web.Mappers;
using CustomerManagement.Web.Validators;
using CustomerManagement.Web.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CustomerManagement.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersApiController : ControllerBase
    {
        private readonly ICustomerService _CustomerService;

        public CustomersApiController(ICustomerService CustomerService)
        {
            this._CustomerService = CustomerService;
        }

        [HttpGet("GetAllCustomers")]
        public async Task<ActionResult<IEnumerable<CustomerVw>>> GetAllCustomers()
        {
            var customers = await _CustomerService.GetAllCustomers();
            var customersVW = new List<CustomerVw>();
            foreach (var customer in customers)
            {
                customersVW.Add(CustomerMapper.ConvertCustomerModelToCustomerVw(customer));
            }
            return Ok(customersVW);
        }

        [HttpPost("CreateCustomer")]
        public async Task<ActionResult<IEnumerable<CustomerVw>>> CreateCustomer([FromBody] CustomerRequest customerToAdd)
        {
            var validator = new CustomerManagementValidator();
            var validationResult = await validator.ValidateAsync(customerToAdd);

            if (!validationResult.IsValid)
            {
                return BadRequest(validationResult.Errors);
            }

            var customer = CustomerMapper.ConvertCustomerRequestToCustomerModel(customerToAdd);
            var newCustomer = await _CustomerService.CreateCustomer(customer);
            return Created("", newCustomer);
        }
    }
}
