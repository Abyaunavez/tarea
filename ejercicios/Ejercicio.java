package org.Ejercicio;
import java.util.Scanner;


public class Ejercicio {
	public static void  main(String[] args){
	Scanner scanner = new Scanner (System.in);
	
	System.out.println("Ingresa tunombre: ");
	String nombre = scanner.nextLine();
	
	for (int i = 0; i < nombre.length(); i++) {
		char letra = nombre.charAt(i);
		System.out.println(letra);
	}
	
	scanner.close();
}
}
