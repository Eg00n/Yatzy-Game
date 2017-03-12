using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace yatzy.Models
{
    [DataContract]
    public class Die
    {
        [DataMember]
        public int Eyes { get; set; }
        [DataMember]
        public bool Checked { get; set; }

        public Die(int eyes, bool @checked)
        {
            Eyes = eyes;
            Checked = @checked;
        }
    }
}