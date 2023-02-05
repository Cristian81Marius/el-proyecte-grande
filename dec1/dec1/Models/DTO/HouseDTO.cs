using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace dec1.Models.DTO
{
    public class HouseDTO
    {
        public string Street { get; set; }
        public string City { get; set; }
        public int NrStreet { get; set; }
        [DataType(DataType.Url)]
        public string LinkLocation { get; set; }

        public ICollection<Patient> Patients { get; set; }
    }
}
