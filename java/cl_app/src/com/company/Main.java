package com.company;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Hello I'm a converter!");
        System.out.println("What is dollar exchange rate today?");

        double rate = sc.nextDouble();

        System.out.println("Enter amount of $:");

        double usd = sc.nextDouble();
        double uah = rate * usd;

        System.out.println("Result: " + uah);
    }
}
