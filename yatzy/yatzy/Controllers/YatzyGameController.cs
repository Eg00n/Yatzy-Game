using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using yatzy.Models;

namespace yatzy.Controllers
{
    public class YatzyGameController : ApiController
    {
        YatzyGame newGame;
        public YatzyGameController() { }
        public YatzyGameController(int amountOfPlayers)
        {
            newGame = new YatzyGame();
            newGame.StartGame(amountOfPlayers);
        }

        // GET: api/YatzyGame/5
        public Die[] rollDice([FromBody] Die die1, Die die2, Die die3, Die die4, Die die5)
        {
            return newGame.RollDice(die1, die2, die3, die4, die5);
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
