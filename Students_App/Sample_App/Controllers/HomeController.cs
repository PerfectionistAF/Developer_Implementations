using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Sample_App.Controllers
{
    public class HomeController : Controller
    {
        [HttpPost]      //From view to controller
        [ActionName("About")]  //Edit About.cshtml
        public ActionResult Post_Method()
        {
            return Content("From View to Controller");
        }
        [HttpGet]       //From controller to view
        [ActionName("About")]  //Edit Contact.cshtml
        public ActionResult Get_Method()
        {
            return View();
        }
        [NonAction]     //Treated 
        public ActionResult toStudent()
        {
            return Content("Send to Student Controller");
        }
        [ActionName("Test")]
        public string MyAge ()
        {
            return "My age is 22";
        }
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}