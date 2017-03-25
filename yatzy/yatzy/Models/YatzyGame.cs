using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;

namespace yatzy.Models
{
    public class YatzyGame
    {
        public void StartGame(int amountOfPlayers)
        {
            PlayerList = new List<YatzyPlayer>();

            SetAmountOfPlayers(amountOfPlayers);
            currentPlayer = 1;
        }

        int amountOfPlayers = 0;
        int currentPlayer = 0;

        List<YatzyPlayer> PlayerList;

        public void SetAmountOfPlayers(int amount)
        {
            amountOfPlayers = amount;
            for (int i = 0; i < amount; i++)
            {
                PlayerList.Add(new YatzyPlayer(i, 0));
            }

        }
        public void NextPlayer(int currentPlayer)
        {
            if (currentPlayer == PlayerList.Count())
            {
                currentPlayer = 1;
            }
            else
            {
                currentPlayer++;
            }
        }

        //public Die[] ConvertStringToDiceList(string value)
        //{
        //    Die[] tempDiceList = JsonConvert.DeserializeObject<Die[]>(value);
        //    var jsonInput = value;
        //    return tempDiceList;
            
        //}

        int rollCounter = 0;

        Random rng = new Random();

        public Die[] DiceList = new Die[5] { new Die(0, false), new Die( 0, false), new Die(0, false), new Die(0, false), new Die(0, false) };
        int[] checkList = new int[5] { 6, 6, 6, 6, 6 };

        public Die[] RollDice(Die[] newDiceList)
        {
            if (newDiceList == null)
            {
                return DiceList;
            }
            if (rollCounter <= 2)
            {
                if (newDiceList[0].Checked == false)
                {
                    newDiceList[0].Eyes = rng.Next(1, 7);
                    DiceList[0] = newDiceList[0];
                    checkList[0] = DiceList[0].Eyes;
                }
                if (newDiceList[1].Checked == false)
                {
                    newDiceList[1].Eyes = rng.Next(1, 7);
                    DiceList[1] = newDiceList[1];
                    checkList[1] = DiceList[1].Eyes;
                }
                if (newDiceList[2].Checked == false)
                {
                    newDiceList[2].Eyes = rng.Next(1, 7);
                    DiceList[2] = newDiceList[2];
                    checkList[2] = DiceList[2].Eyes;
                }
                if (newDiceList[3].Checked == false)
                {
                    newDiceList[3].Eyes = rng.Next(1, 7);
                    DiceList[3] = newDiceList[3];
                    checkList[3] = DiceList[3].Eyes;
                }
                if (newDiceList[4].Checked == false)
                {
                    newDiceList[4].Eyes = rng.Next(1, 7);
                    DiceList[4] = newDiceList[4];
                    checkList[4] = DiceList[4].Eyes;
                }
                ++rollCounter;
            }

            Array.Sort(checkList);
            Array.Reverse(checkList);

            return DiceList;
        }
        public string StartCheck(int row, int currentPlayer)
        {
            int checkForZeroPointsCounter = 0;
            int rowToPlaceZeroIn = 0;
            //check any rolls 
            if (rollCounter != 0)
            {
                //check table for choosen field
                if (CheckTable(currentPlayer, row) == true)
                {
                    //check eyes conditions, takes row as parameter to switch
                    #region

                    int points = 0;
                    switch (row)
                    {
                        case 1:
                            points = CheckForEyes(row);
                            break;
                        case 2:
                            points = CheckForEyes(row);
                            break;
                        case 3:
                            points = CheckForEyes(row);
                            break;
                        case 4:
                            points = CheckForEyes(row);
                            break;
                        case 5:
                            points = CheckForEyes(row);
                            break;
                        case 6:
                            points = CheckForEyes(row);
                            break;
                        case 7:
                            points = checkForOnePair(row);
                            break;
                        case 8:
                            points = checkForTwoPair(row);
                            break;
                        case 9:
                            points = checkForThreeOfAKind(row);
                            break;
                        case 10:
                            points = checkForFourOfAKind(row);
                            break;
                        case 11:
                            points = checkForLow(row);
                            break;
                        case 12:
                            points = checkForHigh(row);
                            break;
                        case 13:
                            points = checkForHouse(row);
                            break;
                        case 14:
                            points = checkForChance(row);
                            break;
                        case 15:
                            points = checkForYatzy(row);
                            break;
                    }
                    #endregion
                    if (points == 0)
                    {
                        if (checkForZeroPointsCounter == 1 && row == rowToPlaceZeroIn)
                        {
                            PlacePoints(currentPlayer, row, 0);
                        }
                        checkForZeroPointsCounter++;
                        rowToPlaceZeroIn = row;
                        return ("Are you sure to place 0 point here? Click again");
                    }
                    else
                    {
                        PlacePoints(currentPlayer, row, points);
                    }
                }
                else
                {
                    return ("You can't place point here!");
                }
            }
            else
            {
                return ("Roll first!");
            }
            return null;
        }
        public bool CheckTable(int currentPlayer, int rowToCheck)
        {

            foreach (YatzyPlayer player in PlayerList)
            {
                if (player.Number == currentPlayer)
                {
                    if (player.PlayerPointList[rowToCheck] == 0)
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
            }
            return false;
        }
        public void PlacePoints(int currentPlayer, int row, int points)
        {
            foreach (YatzyPlayer player in PlayerList)
            {
                if (player.Number==currentPlayer)
                {
                    player.PlayerPointList[row] = points;
                }
            }
        }
        public int CheckForEyes(int row)
        {
            int pointSum = 0;

            if (DiceList[1].Eyes == row)
            {
                pointSum = pointSum + DiceList[1].Eyes;
            }
            if (DiceList[2].Eyes == row)
            {
                pointSum = pointSum + DiceList[2].Eyes;
            }
            if (DiceList[3].Eyes == row)
            {
                pointSum = pointSum + DiceList[3].Eyes;
            }
            if (DiceList[4].Eyes == row)
            {
                pointSum = pointSum + DiceList[4].Eyes;
            }
            if (DiceList[5].Eyes == row)
            {
                pointSum = pointSum + DiceList[5].Eyes;
            }
           
            return pointSum;
        }
        public int checkForOnePair(int row)
        {
            int pair;

            for (int i = 0; i < checkList.Count(); i++)
            {
                for (int j = i + 1; j < checkList.Count(); j++)
                {
                    if (j != i && checkList[j] == checkList[i])
                    {
                        pair = checkList[j] + checkList[i];
                        return pair;
                    }
                }
            }

            return 0;
        }
        public int checkForTwoPair(int row)
        {
            int pairSum = 0;
            int pair = 0;
            int pairCounter = 0;

            for (int i = 0; i < checkList.Count(); i++)
            {
                for (int j = i + 1; j < checkList.Count(); j++)
                {
                    if (j != i && checkList[j] == checkList[i] && pair != checkList[i] || pair == 0)
                    {
                        pair = checkList[i];
                        pairSum = pairSum + checkList[i] + checkList[j];

                        pairCounter++;
                        if (pairCounter == 2)
                        {
                            return pairSum;
                        }
                    }
                }
            }

            return 0;
        }
        public int checkForThreeOfAKind(int row)
        {
            int tripleSum = 0;

            for (int i = 0; i < checkList.Count(); i++)
            {
                for (int j = i + 1; j < checkList.Count(); j++)
                {
                    for (int k = j + 1; k < checkList.Count(); k++)
                    {
                        if (j != i && j != k && checkList[j] == checkList[i] && checkList[i] == checkList[k])
                        {
                            tripleSum = tripleSum + checkList[i] + checkList[j] + checkList[k];
                            return tripleSum;

                        }
                    }
                }
            }
            return 0;
        }
        public int checkForFourOfAKind(int row)
        {
            int quadSum = 0;

            for (int i = 0; i < checkList.Count(); i++)
            {
                for (int j = i + 1; j < checkList.Count(); j++)
                {
                    for (int k = j + 1; k < checkList.Count(); k++)
                    {
                        for (int l = k + 1; l < checkList.Count(); l++)
                        {
                            if (j != i && j != k && k != l && checkList[j] == checkList[i] && checkList[i] == checkList[k] && checkList[k] == checkList[l])
                            {
                                quadSum = quadSum + checkList[i] + checkList[j] + checkList[k] + checkList[l];
                                return quadSum;
                            }
                        }
                    }
                }
            }
            return 0;
        }
        public int checkForLow(int row)
        {
            if (checkList.Contains(1) && checkList.Contains(2) && checkList.Contains(3) && checkList.Contains(4) && checkList.Contains(5))
            {
                return 15;
            }
            else
            {
                return 0;
            }
        }
        public int checkForHigh(int row)
        {
            if (checkList.Contains(1) && checkList.Contains(2) && checkList.Contains(3) && checkList.Contains(4) && checkList.Contains(5))
            {
                return 15;
            }
            else
            {
                return 0;
            }
        }
        public int checkForHouse(int row)
        {
            int pointSum = 0;

            for (int i = 0; i < checkList.Count(); i++)
            {
                for (int j = i + 1; j < checkList.Count(); j++)
                {
                    for (int k = j + 1; k < checkList.Count(); k++)
                    {
                        if (j != i && j != k && checkList[j] == checkList[i] && checkList[i] == checkList[k])
                        {
                            for (int l = 0; l < checkList.Count(); l++)
                            {
                                for (int m = l + 1; m < checkList.Count(); m++)
                                {
                                    if (m != l && checkList[m] != checkList[i] && checkList[m] == checkList[i])
                                    {
                                        pointSum = checkList.Sum();
                                        return pointSum;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return 0;
        }
        public int checkForChance(int row)
        {
            return checkList.Sum();
        }
        public int checkForYatzy(int row)
        {
            if (checkList[1] == checkList[2] && checkList[2] == checkList[3] && checkList[3] == checkList[4] && checkList[4] == checkList[5])
            {
                return 50;
            }
            else
            {
                return 0;
            }
        }
    }
}
