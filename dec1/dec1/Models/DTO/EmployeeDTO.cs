using dec1.Models.Enums;
using System;
using System.ComponentModel.DataAnnotations;

namespace dec1.Models.DTO
{
    public class EmployeeDTO : PrincipalUserDTO
    {
        public RoleEmployee Role { get; set; }
        public float Salary { get; set; }
        public int NrOfHours { get; set; }
        [DataType(DataType.DateTime)]
        public DateTime DateOfEmployment { get; set; }
    }
}
