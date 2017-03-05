using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace yatzy.Models
{
    public class YatzyGame
    {

        //-- dice functions
        int rollCounter = 0;

        Random rng = new Random();

        Die[] DiceList = new Die[5] { new Die(0, false), new Die(0, false), new Die(0, false), new Die(0, false), new Die(0, false) };
        int[] checkList = new int[5] { 0, 0, 0, 0, 0 };


        public Die[] RollDice(Die die1, Die die2, Die die3, Die die4, Die die5)
        {
            if (rollCounter <= 2)
            {
                if (die1.Checked == false)
                {
                    die1.Eyes = rng.Next(1, 6);
                    DiceList[1] = die1;
                    checkList[1] = DiceList[1].Eyes;
                }
                if (die2.Checked == false)
                {
                    die2.Eyes = rng.Next(1, 6);
                    DiceList[2] = die2;
                    checkList[2] = DiceList[2].Eyes;
                }
                if (die3.Checked == false)
                {
                    die3.Eyes = rng.Next(1, 6);
                    DiceList[3] = die3;
                    checkList[3] = DiceList[3].Eyes;
                }
                if (die4.Checked == false)
                {
                    die4.Eyes = rng.Next(1, 6);
                    DiceList[4] = die4;
                    checkList[4] = DiceList[4].Eyes;
                }
                if (die5.Checked == false)
                {
                    die5.Eyes = rng.Next(1, 6);
                    DiceList[5] = die5;
                    checkList[5] = DiceList[5].Eyes;
                }
                ++rollCounter;
            }

            Array.Sort(checkList);
            Array.Reverse(checkList);

            return DiceList;
        }

        public void StartCheck(int row)
        {
            switch (row)
            {
                case 1:

                    break;

            }
        }
        //-- Checks
        public void Check(int row, int pointSum)
        {
            if (rollCounter != 0)
            {
                //checks if points is already given for field
                if (GetPointsFromSingleRowInTable(currentPlayer, row) == 0)
                {

                    //checks for any checked dice
                    if (pointSum == 0)
                    {
                        //checks for zero points confirmation
                        if (ZeroPointConfirmed == 1 && ZeroPointChoiceConfirmed == row)
                        {
                            addPointsToTable(pointSum, currentPlayer, row);
                            EndTurn();
                        }
                        else
                        {
                            document.getElementById("message").innerHTML = "Are you sure you want to commit 0 points? <br>- Click choice again if you are";
                            ZeroPointConfirmed++;
                            ZeroPointChoiceConfirmed = row;
                        }
                    }
                    else
                    {
                        addPointsToTable(pointSum, currentPlayer, row);
                        EndTurn();
                    }
                }
                else
                {
                    document.getElementById("message").innerHTML = "You can't add points to this field";
                }
            }
            else
            {
                document.getElementById("message").innerHTML = "You have to roll first!";
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
            Check(row, pointSum);

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
                return checkList.Sum();
            }
            else
            {
                return 0;
            }
        }
    }
}
