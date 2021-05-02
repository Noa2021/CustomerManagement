using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using CustomerManagement.Core.Models;
using CustomerManagement.Web.ViewModels;
using FluentValidation;

namespace CustomerManagement.Web.Validators
{
    public class CustomerManagementValidator : AbstractValidator<CustomerRequest>
    {
        public CustomerManagementValidator()
        {
            RuleFor(m => m.FullNameHe)
                .NotEmpty()
                .MaximumLength(20)
                .Matches(new Regex("^[-'\u0590-\u05fe ]+$"));
            RuleFor(m => m.FullNameEn)
                .NotEmpty()
                .MaximumLength(15)
                .Matches(new Regex("^[-'a-zA-Z ]+$"));
            RuleFor(m => m.BirthDate)
                .NotEmpty()
                .WithMessage("'Artist Id' must not be 0.");
            RuleFor(m => m.IdNumber)
                .NotEmpty()
                .GreaterThan(100000000)
                .LessThan(1000000000);
            RuleFor(m => m.City)
                .NotEmpty();
            RuleFor(m => m.Bank)
                .NotEmpty();
            RuleFor(m => m.Brunch)
                .NotEmpty();
            RuleFor(m => m.AccountNumber)
                .NotEmpty()
                .LessThan(1000000000);
        }
    }
}
