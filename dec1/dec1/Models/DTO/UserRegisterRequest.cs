using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace dec1.Models.DTO
{
    public class UserRegisterRequest : UserLoginRequest
    {

        public string FirstName { get; set; }

        public string LastName { get; set; }

        [DataType(DataType.PhoneNumber)]
        public string PhoneNumber { get; set; }

        public ICollection<string> Roles { get; set; }
    }
}
