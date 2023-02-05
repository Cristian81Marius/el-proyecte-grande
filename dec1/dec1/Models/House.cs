using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace dec1.Models
{
    public class House
    {
        public int Id { get; set; }
        [Required]
        public string Street { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        public int NrStreet { get; set; }
        [DataType(DataType.Url)]
        public string LinkLocation { get; set; }

        public ICollection<Patient> Patients { get; set; }
    }
}
