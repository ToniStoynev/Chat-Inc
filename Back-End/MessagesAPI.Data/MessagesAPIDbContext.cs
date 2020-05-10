using JetBrains.Annotations;
using MessagesAPI.Domain;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace MessagesAPI.Data
{
    public class MessagesAPIDbContext : DbContext
    {
        public DbSet<Message> Messages { get; set; }
        public MessagesAPIDbContext(DbContextOptions options) : base(options)
        {
        }
    }
}
