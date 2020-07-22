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
            Console.WriteLine("Enter a number:");
            string x = Console.ReadLine();
            int a = Convert.ToInt32(x);
            a = a * a;
            Console.WriteLine(a);
            Console.ReadKey();
        }
    }
}
