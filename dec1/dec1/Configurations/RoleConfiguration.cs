using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using dec1.Models.Enums;

namespace dec1.Configurations
{
    public class RoleConfiguration: IEntityTypeConfiguration<IdentityRole>
    {
        public void Configure(EntityTypeBuilder<IdentityRole> builder)
        {
            builder.HasData(
                new IdentityRole
                {
                    Name = TypeUser.Admin.ToString(),
                    NormalizedName = TypeUser.Admin.ToString().ToUpper()
                },

               new IdentityRole
               {
                   Name = TypeUser.Employee.ToString(),
                   NormalizedName = TypeUser.Employee.ToString().ToUpper()
               }, 
               new IdentityRole
               {
                   Name = TypeUser.Patient.ToString(),
                   NormalizedName = TypeUser.Patient.ToString().ToUpper()
               }, 
               new IdentityRole
               {
                   Name = TypeUser.Medic.ToString(),
                   NormalizedName = TypeUser.Medic.ToString().ToUpper()
               });
        }
    }
}
