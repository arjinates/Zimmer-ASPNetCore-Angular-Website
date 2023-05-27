using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
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
                Address = new Address 
                {
                    FirstName = "Arjin",
                    LastName = "Ates",
                    Street = "Akdeniz",
                    City = "Antalya",
                    State = "ANT",
                    ZipCode = "07090"
                }
            };
            
            await userManager.CreateAsync(user, "Pa$$w0rd0");
        }
     }
    }
}