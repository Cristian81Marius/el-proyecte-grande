using System.ComponentModel.DataAnnotations;

namespace dec1.Models.DTO
{
    public class UserResetPassword
    {
        [Required, MinLength(6)]
        public string Password { get; set; } = string.Empty;

        [Required, Compare("Password")]
        public string ConfirmPassword { get; set; } = string.Empty;

        public string Token { get; set; } = string.Empty;

    }
}
