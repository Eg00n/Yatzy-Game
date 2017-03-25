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
            return newGame.RollDice(value);
        }

        [HttpGet]
        public Die[] Get(object value)
        {
            dynamic tempList = JsonConvert.DeserializeObject<dynamic>(value.ToString());

            return newGame.RollDice(tempList);
        }

        //public Die[] Create(dynamic tempValue)
        //{
        //    return tempValue.GetType().IsArray ? tempValue as Die[] : new Die[] { tempValue };
        //}

        //public class DynamicWrapper<T> : DynamicObject
        //{
        //    public T Instance { get; private set; }
        //    public DynamicWrapper(T instance)
        //    {
        //        this.Instance = instance;
        //    }

        //    public override bool TryConvert(ConvertBinder binder, out object result)
        //    {
        //        if (binder.ReturnType == typeof(T))
        //        {
        //            result = Instance;
        //            return true;
        //        }
        //        if (binder.ReturnType == typeof(T[]) && binder.Explicit)
        //        {
        //            result = new[] { Instance };
        //            return true;
        //        }
        //        return base.TryConvert(binder, out result);
        //    }

        //    public override string ToString()
        //    {
        //        return Convert.ToString(Instance);
        //    }
        //}

        //[HttpPost]
        //public void Post(JsonToken value)
        //{
        //    Console.WriteLine("value");
        //    //newGame.RollDice(value);
        //    Console.ReadLine();
        //}
        //[HttpPost]

        //// POST: api/YatzyGame
        //public Die[] Post(string value)
        //{

        //   // return newGame.RollDice(value);
        //    return newGame.DiceList;
        //}

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
