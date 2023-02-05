using System.ComponentModel.DataAnnotations;

namespace dec1.Models
{
    public class PrincipalUser: User
    {
        [Required]
        public string CNP { get; set; }
        public string Photo { get; set; }
    }
}
