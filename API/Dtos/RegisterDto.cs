using System.ComponentModel.DataAnnotations;

namespace API.Dtos
{
    public class RegisterDto 
    {
        [Required]
        public string DisplayName { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        [RegularExpression("^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$", 
        ErrorMessage = "Password must have contain at least one letter, one number and be longer than six characters!")]
        public string Password { get; set; }
    }
}