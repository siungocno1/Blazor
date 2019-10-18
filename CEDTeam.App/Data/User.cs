using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CEDTeam.App.Data
{
    public class UserService
    {
        public async Task<string> GetUser()
        {
            var a = new List<dynamic>
            {
                new {name = "Phuong", age = 23},
                new {name = "Ngan", age = 23}
            };
            return JsonConvert.SerializeObject(a);
        }
    }
}
