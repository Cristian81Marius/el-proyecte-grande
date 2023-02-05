using System.ComponentModel.DataAnnotations;

namespace dec1.Models.DTO
{
    public class UserLoginRequest
    {
        [Required]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        [Required]
        [StringLength(15, ErrorMessage = "You pass is limited to {2} to {1} characters", MinimumLength = 6)]
        public string Password { get; set; }
    }
}
