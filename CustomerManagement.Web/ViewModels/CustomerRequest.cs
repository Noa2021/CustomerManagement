using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerManagement.Web.ViewModels
{
    public class CustomerRequest
    {
        public string FullNameHe { get; set; }
        public string FullNameEn { get; set; }
        public DateTime BirthDate { get; set; }
        public int IdNumber { get; set; }
        public int City { get; set; }
        public int Bank { get; set; }
        public int Brunch { get; set; }
        public int AccountNumber { get; set; }
    }
}
