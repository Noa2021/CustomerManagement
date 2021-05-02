using System;

namespace CustomerManagement.Core.Models
{
    public class Customer
    {
        public int Id { get; set; }
        public string FullNameHe { get; set; }
        public string FullNameEn { get; set; }
        public DateTime BirthDate { get; set; }
        public int IdNumber { get; set; }
        public virtual City CityObj { get; set; }
        public int City { get; set; }
        public int Bank { get; set; }
        public int Brunch { get; set; }
        public int AccountNumber { get; set; }
    }
}
