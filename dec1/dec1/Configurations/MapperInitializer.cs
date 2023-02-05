using AutoMapper;
using dec1.Models;
using dec1.Models.DTO;

namespace dec1.Configurations
{
    public class MapperInitializer: Profile
    {
        public MapperInitializer()
        {
            CreateMap<ApiUser, UserRegisterRequest>().ReverseMap();
            CreateMap<ApiUser, UserLoginRequest>().ReverseMap();
        }
    }
}
