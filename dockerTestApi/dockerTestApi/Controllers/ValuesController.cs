using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace dockerTestApi.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        string[] names = new string[] {"ALBERT", "WILL", "BOB", "JACKIE", "ANDREA"};
        string[] lastNames = new string[] {"JOBS", "MUSK", "PICHAI", "BEZOS", "ZUCKERBERG"};
        // GET api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            Random rnd = new Random();
            return new string[] { names[rnd.Next(5)] + " " + lastNames[rnd.Next(5)] };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
