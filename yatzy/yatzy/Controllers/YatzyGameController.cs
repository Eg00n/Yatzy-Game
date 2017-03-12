using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using yatzy.Models;
using Newtonsoft.Json;
//using System.Web.Mvc;

namespace yatzy.Controllers
{
    public class YatzyGameController : ApiController
    {
        YatzyGame newGame = new YatzyGame();
        public YatzyGameController() { }
        public YatzyGameController(int amountOfPlayers)
        {
            //newGame = new YatzyGame();
            newGame.StartGame(amountOfPlayers);
        }

        [HttpGet]
        public Die[] rollDice()
        {
            return (newGame.DiceList);
        }
        [HttpPost]
        public Die[] rollDice(Die[] value)
        {
            try
            {
                return newGame.RollDice(value);
            }
            catch (Exception)
            {
                throw;
            }
        }

        // POST: api/YatzyGame
        public void Post([FromBody]string value)
        {
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
