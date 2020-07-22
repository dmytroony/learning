using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppFirstApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("enter a number:");
            string text = Console.ReadLine();
            int x = Convert.ToInt32(text);

            string result = x > 100 ? "more than 100" : "less then 100";
            Console.WriteLine("Result: " + result);
            Console.ReadKey();
        }
    }
}
