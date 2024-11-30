using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Sample_App.Models;

namespace Sample_App.Controllers
{
    public class DefaultController : Controller
    {
        // GET: Default
        public ActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Index(Table obj)

        {
            if (ModelState.IsValid)
            {
                testdbEntities db = new testdbEntities();
                db.Tables.Add(obj);
                db.SaveChanges();
            }
            return View(obj);
        }
    }
}