using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace dec1.Models
{
    public class Patient : PrincipalUser
    {
        [Required]
        [ForeignKey(nameof(House))]
        public int HouseId { get; set; }
        public House House { get; set; }
    }
}
