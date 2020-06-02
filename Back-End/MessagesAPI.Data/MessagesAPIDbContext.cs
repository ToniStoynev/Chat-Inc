using MessagesAPI.Domain;
using Microsoft.EntityFrameworkCore;

namespace MessagesAPI.Data
{
    public class MessagesAPIDbContext : DbContext
    {
        public DbSet<Message> Messages { get; set; }

        public DbSet<User> Users { get; set; }
        public MessagesAPIDbContext(DbContextOptions options) : base(options)
        {
        }
    }
}
