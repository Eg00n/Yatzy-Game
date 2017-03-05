using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace yatzy.Models
{
    public class Die
    {
        public int Eyes { get; set; }
        public bool Checked { get; set; }

        public Die(int eyes, bool @checked)
        {
            Eyes = eyes;
            Checked = @checked;
        }
    }
}