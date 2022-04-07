package com.company;

import java.util.HashMap;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
////        String s1 = "Hello world";
////        System.out.println(s1);
//
//        String[] words = s1.split(" ");
//
//        for (String w : words) {
//            System.out.println(w);
//        }
//
//        HashMap map = new HashMap();
//        map.put("Hello", "Привіт");
//        map.put("World", "Світ");
//
//        System.out.println(map.get("Hello"));
        Scanner scanner = new Scanner(System.in);
        HashMap dict = new HashMap();
        String words = "i=я;love=люблю;java=джаву";
        String[] pairs = words.split(";");

        for (String pair : pairs) {
            String[] w = pair.split("=");
            String en = w[0];
            String ua = w[1];
            dict.put(en, ua);
        }

        System.out.println("Enter a sentence you need to translate:");
        String sentence = scanner.nextLine();
        String[] enWords = sentence.split(" ");
        String result = "";

        for (String w : enWords) {
            result += dict.get(w);
            result += " ";
        }

        System.out.println(result);
    }
}
