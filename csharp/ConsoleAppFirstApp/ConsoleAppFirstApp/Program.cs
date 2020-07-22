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
            Console.WriteLine("Enter the age of your girlfriend: ");
            string text = Console.ReadLine();
            int years = Convert.ToInt32(text);
            if(years > 16)
            {
                Console.WriteLine("Too old!");
            }
            else
            {
                Console.WriteLine("Azaz!");
            }
            Console.ReadKey();
        }
    }
}
