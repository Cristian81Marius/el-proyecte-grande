using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace dec1.Models
{
    public class User
    {
        public int Id { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [DataType(DataType.PhoneNumber)]
        public string Phone { get; set; }

        [Required]
        [ForeignKey(nameof(Account))]
        public string AccountId { get; set; }
        public ApiUser Account { get; set; }
    }
}
