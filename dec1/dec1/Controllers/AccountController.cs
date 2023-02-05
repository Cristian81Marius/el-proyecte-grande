using dec1.DataBase;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using System;
using AutoMapper;
using dec1.Services;
using dec1.Models.DTO;
using dec1.Models;

namespace dec1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : BaseController
    {
        private readonly UserManager<ApiUser> _userManager;
        private readonly ILogger<AccountController> _logger;
        private readonly IAuthManager _authManager;
        private readonly IMapper _mapper;


        public AccountController(ProjectContext context, IConfiguration configuration,
            UserManager<ApiUser> userManager, ILogger<AccountController> logger, IMapper mapper, IAuthManager authManager) : base(context, configuration)
        {
            _userManager = userManager;
            _logger = logger;
            _mapper = mapper;
            _authManager = authManager;
        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register([FromBody] UserRegisterRequest userReg)
        {
            _logger.LogInformation($"Register attempt for {userReg.Email}");
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                var user = _mapper.Map<ApiUser>(userReg);
                user.UserName = userReg.Email;
                var result = await _userManager.CreateAsync(user, userReg.Password);
                if (!result.Succeeded)
                {
                    return BadRequest($"User registration fail, Attempt later");
                }
                await _userManager.AddToRolesAsync(user, userReg.Roles);
                return Accepted();

            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Something went wrong in the {nameof(Register)}");
                return Problem($"Something went wrong in the{nameof(Register)}", statusCode: 500);
            }
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] UserLoginRequest userLog)
        {
            _logger.LogInformation($"Register attempt for {userLog.Email}");
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                if (!await _authManager.ValidateUser(userLog))
                {
                    return Unauthorized(userLog);
                }
                return Accepted(new { Token = await _authManager.CreateToken() });

            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Something went wrong in the {nameof(Login)}");
                return Problem($"Something went wrong in the{nameof(Login)}", statusCode: 500);
            }

        }
    }
}

