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
            Console.WriteLine("enter a number 1-3");
            string text = Console.ReadLine();
            int x = Convert.ToInt32(text);

            switch (x)
            {
                case 1:
                    Console.WriteLine("Number 1");
                    break;
                case 2:
                    Console.WriteLine("Number 2");
                    break;
                case 3:
                    Console.WriteLine("Number 3");
                    break;
                default:
                    Console.WriteLine("wtf number");
                    break;
            }

            Console.ReadKey();
        }
    }
}
