using dec1.Models.Enums;
using Microsoft.AspNetCore.Identity;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace dec1.Models
{
    public class Account
    {
        public int Id { get; set; }

        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        public byte[] PasswordHash { get; set; } = new byte[32];

        public byte[] PasswordSalt { get; set; } = new byte[32];

        public string? VerificationToken { get; set; }

        [DataType(DataType.DateTime)]
        public DateTime? VerificatedAt { get; set; } 

        public string PasswordResetToken { get; set; }

        [DataType(DataType.DateTime)]
        public DateTime? PasswordTokenExpires { get; set; }

        public TypeUser TypeUser { get; set; }

        public bool EmailConfirmed { get; set; }
    }
}
