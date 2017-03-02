using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(YatzyBackEnd.Startup))]
namespace YatzyBackEnd
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
