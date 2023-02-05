using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace dec1.Models
{
    public class Prescription
    {

        public int Id { get; set; }
        public string MedicalSupplies { get; set; }
        public string Activites { get; set; }
        public string Recomandation { get; set; }

        [Required]
        [ForeignKey(nameof(Patient))]
        public int PatientId { get; set; }
        public Patient Patient { get; set; }
    }
}
