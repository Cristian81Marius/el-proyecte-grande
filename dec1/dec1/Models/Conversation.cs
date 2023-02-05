using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace dec1.Models
{
    public class Conversation : Socialization
    {
        public ICollection<Socialization> Hstory { get; set; }
    }
}
