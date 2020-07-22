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
            Console.WriteLine("enter your year of birth");
            string text = Console.ReadLine();
            int x = Convert.ToInt32(text);
            bool result = x > 2020;
            if (result)
            {
                Console.WriteLine("Magic!");
            }
            Console.ReadKey();
        }
    }
}
