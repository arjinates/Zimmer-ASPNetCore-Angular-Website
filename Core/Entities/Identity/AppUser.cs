using Microsoft.AspNetCore.Identity;

namespace Core.Entities.Identity
{
    public class AppUser : IdentityUser
    {
        public int DisplayName { get; set; }
        public Adress Adress { get; set; }
    }
}