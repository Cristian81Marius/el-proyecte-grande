using dec1.Models.Enums;
using System;
using System.ComponentModel.DataAnnotations;

namespace dec1.Models
{
    public class Employee : PrincipalUser
    {
        [Required]
        public RoleEmployee Role { get; set; }
        [Required]
        public float Salary { get; set; }
        public int NrOfHours { get; set; }
        [Required]
        [DataType(DataType.DateTime)]
        public DateTime DateOfEmployment { get; set; }
    }
}
