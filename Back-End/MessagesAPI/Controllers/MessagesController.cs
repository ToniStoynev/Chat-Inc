namespace MessagesAPI.Controllers
{
    using MessagesAPI.Data;
    using MessagesAPI.Domain;
    using MessagesAPI.Models;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    [Route("api/[controller]")]
    [ApiController]
    public class MessagesController : ControllerBase
    {
        private readonly MessagesAPIDbContext context;

        public MessagesController(MessagesAPIDbContext context)
        {
            this.context = context;
        }

        [HttpGet("all")]
        public async Task<ActionResult<IEnumerable<Message>>> All()
        {
            return  this.context.Messages.OrderBy(x => x.CreatedOn).ToList();
        }

        [HttpPost("create")]
        public async  Task<ActionResult> Create(MessageCreateBindingModel message)
        {
            if (message == null)
            {
                return this.BadRequest();
            }

            var user = await this.context.Users
                .SingleOrDefaultAsync(username => username.Username == message.User);

            var messageForDb = new Message
            {
                Content = message.Content,
                User = user,
                CreatedOn = DateTime.UtcNow
            };

            context.Messages.Add(messageForDb);
            await this.context.SaveChangesAsync();

            return this.Ok();
        }
    }
}