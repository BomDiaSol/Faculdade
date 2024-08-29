import java.security.InvalidParameterException;
import java.util.Scanner;

public class Contador {
    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);

        System.out.println("Digite o primeiro número:");
        int numeroUm = scan.nextInt();

        System.out.println("Digite o segundo número");
        int numeroDois = scan.nextInt();

        try{
            contar(numeroUm, numeroDois);

        } catch (InvalidParameterException e){
            System.out.println("Error " + e.getMessage());

        }

        scan.close();

    }

    static void contar(int numeroUm, int numeroDois) throws InvalidParameterException{

        if (numeroDois > numeroUm){
            int contagem = numeroDois - numeroUm;
            for (int i = 1; i <= contagem; i++){
                System.out.println(i);
            }

        } else {
            throw new InvalidParameterException("O segundo numero deve ser maior que o primeiro");
        }


    }


}
