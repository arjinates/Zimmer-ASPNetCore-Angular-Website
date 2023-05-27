using System.Security.Claims;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions
{
    public static class UserManagerExtension
    {
       public static async Task<AppUser> FindUserByClaimsPrincipleWithAdress(this UserManager<AppUser> userManager, ClaimsPrincipal user)
       {
            var email = user.FindFirstValue(ClaimTypes.Email);

            return await userManager.Users.Include(x => x.Adress)
                .SingleOrDefaultAsync(x => x.Email == email);
       } 

       public static async Task<AppUser> FindByEmailFromClaimsPrincipal(this UserManager<AppUser> userManager, ClaimsPrincipal user)
       {
            return await userManager.Users.FirstOrDefaultAsync(x => x.Email == user.FindFirstValue(ClaimTypes.Email));
       }
    }
}