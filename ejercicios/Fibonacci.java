package org.Ejercicio2;
import java.util.Scanner;


public class Fibonacci {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Introduce el valor de n: ");
        int n = scanner.nextInt();

        int a = 0, b = 1;
        int fibonacci = 0;

        if (n == 0) {
            fibonacci = 0;
        } else if (n == 1) {
            fibonacci = 1;
        } else {
            int count = 2; 
            do {
                fibonacci = a + b;
                a = b;
                b = fibonacci;
                count++;
            } while (count <= n);
        }

        System.out.println("Fibonacci(" + n + ") = " + fibonacci);

        scanner.close();
    }
}

	