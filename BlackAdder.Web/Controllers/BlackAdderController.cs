using BlackAdder.Domain;
using Microsoft.AspNetCore.Mvc;

namespace BlackAdder.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlackAdderController : ControllerBase
    {
        [HttpPost]
        [Route("Add")]
        public IActionResult Add(long one, long two)
        {
            return Ok(new Edmund().Add(one, two));
        }

        [HttpPost]
        [Route("Multiply")]
        public IActionResult Multiply(long one, long two)
        {
            return Ok(new Edmund().Multiply(one, two));
        }
    }
}