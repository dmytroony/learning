package com.company;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("What is your year of birth?/nEnter a day:");
        int birthYear = sc.nextInt();

        int currentYear = 2022;

        int age = currentYear - birthYear;

        System.out.println("Your age is: " + age);
    }
}
