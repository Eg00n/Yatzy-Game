using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace yatzy.Models
{
    public class YatzyPlayer
    {
        public int Number { get; set; }
        public int Points { get; set; }

        public int[] PlayerPointList;

        public YatzyPlayer(int number, int points)
        {
            Number = number;
            Points = points;
            PlayerPointList = new int[15];
        }
        
        int amountOfPlayers = 0;
        int currentPlayer = 1;

        public void SetPlayers(int amount)
        {
            amountOfPlayers = amount;
        }
    }
}