using dec1.Configurations;
using dec1.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace dec1.DataBase
{
    public class ProjectContext : IdentityDbContext<ApiUser>
    {
        public ProjectContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Conversation> Conversations { get; set; }
        public DbSet<Document> Documents { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<House> Houses { get; set; }
        public DbSet<LegalGuardian> LegalGuardians { get; set; }
        public DbSet<Patient> Patients { get; set; }
        public DbSet<Prescription> Prescriptions { get; set; }
        public DbSet<PublicDiscourse> PublicDiscourses { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Document>().ToTable("Documents");
            modelBuilder.Entity<House>().ToTable("House");
            modelBuilder.Entity<LegalGuardian>().ToTable("LegalGuardian");
            modelBuilder.Entity<Patient>().ToTable("Patient");
            modelBuilder.Entity<Prescription>().ToTable("Prescription");
            modelBuilder.Entity<PublicDiscourse>().ToTable("PublicDiscourse");
            modelBuilder.Entity<Conversation>().ToTable("Conversation");

            modelBuilder.ApplyConfiguration(new RoleConfiguration());


        }
    }
}
