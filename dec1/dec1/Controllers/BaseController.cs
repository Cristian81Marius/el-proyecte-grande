using dec1.DataBase;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace dec1.Controllers
{
    public class BaseController : Controller
    {
        protected readonly ProjectContext _context;
        protected readonly IConfiguration _configuration;
/*        protected readonly IWebHostEnvironment _env;
*/
        public BaseController(ProjectContext context, IConfiguration configuration)
        {
/*            _env = env;
*/          _configuration = configuration;
            _context = context;
        }
    }
}
