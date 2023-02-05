using System.ComponentModel.DataAnnotations;

namespace dec1.Models.DTO
{
    public class UserDTO
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        [DataType(DataType.PhoneNumber)]
        public string Phone { get; set; }

        public int IdAccount { get; set; }
    }
}
