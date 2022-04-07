package com.company;

import java.util.HashMap;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        HashMap dict = new HashMap();
        String contacts = "Me=+12345;You=+54321;We=+67890;They=+09876";
        String[] pairs = contacts.split(";");

        for (String pair : pairs) {
            String[] w = pair.split("=");
            String name = w[0];
            String phone = w[1];
            dict.put(name, phone);
        }

        System.out.println("Enter a contact name to get a number:");
        String sentence = scanner.nextLine();
        String[] names = sentence.split(" ");
        String result = "";

        for (String w : names) {
            result += dict.get(w);
            result += " ";
        }

        System.out.println(result);
    }
}
