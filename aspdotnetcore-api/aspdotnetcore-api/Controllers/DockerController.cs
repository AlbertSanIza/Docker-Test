using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace aspdotnetcore_api.Controllers {
    [Produces("application/json")]
    [Route("api/Docker")]
    public class DockerController : Controller {
        // GET: api/Docker
        [HttpGet]
        public IEnumerable<string> Get() {
            return new string[] {
                "Albert Sanchez", "Will Young"
            };
        }
        // GET: api/Docker/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id) {
            return "value" + id;
        }
        // POST: api/Docker
        [HttpPost]
        public void Post([FromBody]string value) {
        }
        // PUT: api/Docker/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value) {
        }
        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id) {
        }
    }
}
