package org.Ejercicio2;
import java.util.Scanner;

public class ejercicio2 {

	    public static void main(String[] args)
	    {
	        Scanner console = new Scanner(System.in);
	        int num;

	        System.out.print("Ingresa un numero: ");
	        num = console.nextInt();

	        System.out.println("Esta es la tabla de multiplicar del numero " + num);

	        int i = 1;
	        while (i <= 10) {  
	            System.out.println(num + " x " + i + " = " + (num * i));
	            i++;
	        }

	        console.close();
	    }
	}



	

