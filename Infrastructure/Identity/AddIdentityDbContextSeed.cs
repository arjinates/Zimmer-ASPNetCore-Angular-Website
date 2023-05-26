using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AddIdentityDbContextSeed
    {
     public static async Task SeedUserAsync(UserManager<AppUser> userManager)
     {
        if (!userManager.Users.Any())
        {
            var user = new AppUser 
            {
                DisplayName = "Ates",
                Email = "ates@test.com",
                UserName = "ates@test.com",
                Adress = new Adress 
                {
                    FirstName = "Arjin",
                    LastName = "Ates",
                    Street = "Akdeniz",
                    City = "Antalya",
                    State = "ANT",
                    ZipCode = "07090"
                }
            };
            
            await userManager.CreateAsync(user, "Pa$$w0rd07");
        }
     }
    }
}