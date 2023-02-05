/*using dec1.DataBase;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using dec1.Models;
using System.Linq;
using System;
using System.Security.Cryptography;
using Microsoft.EntityFrameworkCore;
using MimeKit;
using MimeKit.Text;
using MailKit.Net.Smtp;
using MailKit.Security;
using System.Collections.Generic;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Extensions.Configuration;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.AspNetCore.Authorization;
using dec1.Models.DTO;

namespace dec1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : BaseController
    {

        public UserController(ProjectContext context, IConfiguration configuration) : base(context, configuration)
        {
        }

        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<IActionResult> Login(UserLoginRequest request)
        {
            var user = await _context.Accounts.FirstOrDefaultAsync(u => u.Email == request.Email);
            if (user == null)
            {
                return BadRequest("User Not Found");
            }

            if (user.VerificatedAt == null)
            {
                return BadRequest("User Not Verified!");
            }

            if (!VerifyPasswordHash(request.Password, user.PasswordHash, user.PasswordSalt))
            {
                return BadRequest("Password is incorect");
            }
            string token = AuthorizationToken(user);

            return Ok(user);
        }
        [Authorize]
        [HttpPost]
        public async Task<IActionResult> Logout(UserLoginRequest request)
        {
            return Ok("logout");
        }


        private string AuthorizationToken(Account user)
        {
            List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.Email, user.Email)
            };

            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(
                _configuration.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: creds);

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);

            return jwt;

        }

        [HttpPost("verify")]
        public async Task<IActionResult> Verify(string token)
        {
            var user = await _context.Accounts.FirstOrDefaultAsync(u => u.VerificationToken == token);
            if(user == null)
            {
                return BadRequest("User is null");
            }

            user.VerificatedAt = DateTime.Now;
            await _context.SaveChangesAsync();
            return Ok(user);

        }

        [HttpPost("GetTokenForPassword")]
        public async Task<IActionResult> GetTokenForPassword(string email)
        {
            var user = await _context.Accounts.FirstOrDefaultAsync(u => u.Email == email);
            if (user == null)
            {
                return BadRequest("User is null");
            }
            user.PasswordResetToken = CreateRandomToken();

            SendEmail(user.Email, user.PasswordResetToken);

            user.PasswordTokenExpires = DateTime.Now.AddDays(1);
            await _context.SaveChangesAsync();
            return Ok(user);
        }

        private void SendEmail(string toEmail, string token)
        {
            var sendemail = new MimeMessage();
            sendemail.From.Add(MailboxAddress.Parse("deja.steuber71@ethereal.email"));
            sendemail.To.Add(MailboxAddress.Parse(toEmail));
            sendemail.Subject = "Reset Password Kanta Company";
            sendemail.Body = new TextPart(TextFormat.Html) { Text = token };

            using var smtp = new SmtpClient();
            smtp.Connect("smtp.ethereal.email", 587, SecureSocketOptions.StartTls);
            smtp.Authenticate("deja.steuber71@ethereal.email", "FmRhmbvdEGd8x6Te2r");
            smtp.Send(sendemail);
            smtp.Disconnect(true);
        }

        [HttpPost("ResetPassword")]
        public async Task<IActionResult> ResetPassword(UserResetPassword request)
        {
            var user = await _context.Accounts.FirstOrDefaultAsync(u => u.PasswordResetToken == request.Token);
            if (user == null || user.PasswordTokenExpires < DateTime.Now)
            {
                return BadRequest("Invalid Token");
            }

            CreatePasswordHash(request.Password, out byte[] passwordHash, out byte[] passwordSalt);

            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;
            user.PasswordResetToken = null;
            user.PasswordTokenExpires = null;
            await _context.SaveChangesAsync();
            return Ok(user);

        }


        [HttpPost("register")]
        public async Task<IActionResult> Register(UserRegisterRequest request)
        {
            if (_context.Accounts.Any(u => u.Email == request.Email))
            {
                return BadRequest("User already exist.");
            }
            CreatePasswordHash(request.Password, out byte[] passwordHash, out byte[] passwordSalt);

            Account account = new Account()
            {
                Email = request.Email,
                PasswordHash = passwordHash,
                PasswordSalt = passwordSalt,
                VerificationToken = CreateRandomToken(),
            };

            _context.Accounts.Add(account);
            await _context.SaveChangesAsync();

            return Ok(account);
        }

        private string CreateRandomToken()
        {
            Guid g = Guid.NewGuid();
            string GuidString = Convert.ToBase64String(g.ToByteArray());
            return GuidString;
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        { 
            using (var hmac = new HMACSHA512(passwordSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                passwordSalt = hmac.Key;
                return computedHash.SequenceEqual(passwordHash);
            }
        }
    }
}
*/