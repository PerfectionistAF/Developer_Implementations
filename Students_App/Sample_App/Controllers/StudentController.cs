using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Sample_App.Models;
using System.Collections.Generic;

namespace Sample_App.Controllers
{
    public class StudentController : Controller
    {
        public ActionResult mySession()
        {
            Session["ss"] = "This is my first session";
            return View();
        }
        public ActionResult Action()
        {
            ViewBag.Name = "This calls the action view";
            List<string> mydata = new List<string>();
            mydata.Add("HTML");
            mydata.Add("CSS");
            mydata.Add("JavaScript");

            ViewBag.vb = mydata;

            ViewData["myKey"]= "My first ViewData";
            List<string> keydata = new List<string>();
            keydata.Add("1");
            keydata.Add("2");
            keydata.Add("3");

            ViewData["keydata"] = keydata;

            IList<Student> students = new List<Student>();
            {
                students.Add(new Student {StudentName="Bob" });
                students.Add(new Student { StudentName = "Tim" });
                    //StudentId = 8484, 
                    //, 
                    //Age = 28 
            }
            ViewData["stds"] = students;
            return View();
        }
        //GET : Student
        public ActionResult Index()
        {
            //string ans = "This is Index Action method of StudentController";
            //return ans;
            Student st = new Student()
            {
                /* ENTER DATA IN VIEW INSTEAD
                StudentId = 19_7343,
                StudentName = "Sohayla",
                Age = 21
                */
            };
            return View(st);
            //HomeController obj = new HomeController();
            //obj.toStudent();
            //return obj.toStudent();
        }

        /*************************************
        public HttpUnauthorizedResult Index()*
        {                                    *
            return View();                   *
        }                                    *
        **************************************/
    }
}