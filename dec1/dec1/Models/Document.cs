using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace dec1.Models
{
    public class Document
    {
        public int Id { get; set; }
        [Required]
        public string Contract { get; set; }
        [Required]
        public string NameContract { get; set; }

        [Required]
        [ForeignKey(nameof(Patient))]
        public int PatientId { get; set; }
        public Patient Patient { get; set; }
    }
}
