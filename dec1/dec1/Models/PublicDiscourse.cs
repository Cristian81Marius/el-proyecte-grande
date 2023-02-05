using System.ComponentModel.DataAnnotations;

namespace dec1.Models
{
    public class PublicDiscourse : Socialization
    {
        [Required]
        public bool IsMainQuestion { get; set; }
        public int NrLikes { get; set; }
    }
}
