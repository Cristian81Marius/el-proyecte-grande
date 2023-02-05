using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace dec1.Models
{
    public class LegalGuardian : User
    {
        public int IdPatient { get; set; }
        public Patient Patient { get; set; }
    }
}
