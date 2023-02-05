using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace dec1.Models
{
    public class Socialization
    {
        public int Id { get; set; }
        [Required]
        public string Message { get; set; }
        [DataType(DataType.DateTime)]
        public DateTime DateTime { get; set; }

        [Required]
        [ForeignKey(nameof(Account))]
        public string AccountId { get; set; }
        public ApiUser Account { get; set; }
    }
}
