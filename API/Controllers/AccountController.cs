using API.Dtos;
using API.Errors;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class AccountController : BaseApiController
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;
        public AccountController(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager)   
        {
            _signInManager = signInManager;
            _userManager = userManager;
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {
            var user = await _userManager.FindByEmailAsync(loginDto.Email);

            if (user == null) return Unauthorized(new ApiResponse(401));
            
            if (await _userManager.IsLockedOutAsync(user))
            {
                return Unauthorized(new ApiResponse(401, "Your account is lock down. Please try again later."));
            }

            var result = await _signInManager.CheckPasswordSignInAsync(user, loginDto.Password, false);

            if (!result.Succeeded)
            {
                // Başarısız giriş denemesi durumunda hesabın kilitlenmesini kontrol edin
                if (result.IsLockedOut)
                {
                    await _userManager.AccessFailedAsync(user);
                    return Unauthorized(new ApiResponse(401, "Your account is lock down. Please try again later."));
                }

                // Başarısız giriş durumunda hesap için hatalı giriş denemesi kaydedin
                await _userManager.AccessFailedAsync(user);
                return Unauthorized(new ApiResponse(401, "Wrong email or password."));
            }

            return new UserDto 
            {
                Email = user.Email,
                Token = "this will be the token",
                DisplayName = user.DisplayName
            };
        }

        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
        {
            var user = new AppUser
            {
                DisplayName = registerDto.DisplayName,
                Email = registerDto.Email,
                UserName = registerDto.DisplayName
            };

            var result = await _userManager.CreateAsync(user, registerDto.Password);

            if (!result.Succeeded) return BadRequest(new ApiResponse(400));

            return new UserDto
            {
                DisplayName = user.DisplayName,
                Token = "this is the token",
                Email = user.Email  
            };
        }
    }
}