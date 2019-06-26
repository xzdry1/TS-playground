using System;

namespace _008_方法的定义
{
    class Program
    {
        static void Main(string[] args)
        {
            Calculator c=new Calculator();
            System.Console.WriteLine(c.GetConeVolume(10,100));
        }
    }

    class Calculator{
        public double GetCircleArea(double r){
            return Math.PI*r*r;
        }

        public double GetCylinderVolume(double r,double h){
            return GetCircleArea(r)*h;
        }

        public double GetConeVolume(double r,double h){
            return GetCylinderVolume(r,h)/3;
        }
    }
}
