using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using yatzy.Models;
using Newtonsoft.Json;
using System.Dynamic;

//using System.Web.Mvc;

namespace yatzy.Controllers
{
    public class YatzyGameController : ApiController
    {
        YatzyGame newGame = new YatzyGame();
        public YatzyGameController() { }
        public YatzyGameController(int amountOfPlayers)
        {
            newGame.StartGame(amountOfPlayers);
        }

        [HttpPost]
        public Die[] Post(Die[] value)
        {
            return newGame.RollDice(value/*, newGame.rollCounter*/);
        }
        // PUT: api/YatzyGame/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/YatzyGame/5
        public void Delete(int id)
        {
        }
    }
}
