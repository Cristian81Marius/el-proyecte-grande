using System.Threading.Tasks;
using dec1.Models.DTO;

namespace dec1.Services
{
    public interface IAuthManager
    {
        Task<bool> ValidateUser(UserLoginRequest user);
        Task<string> CreateToken();
    }
}
