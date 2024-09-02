import java.util.Scanner;


public class ContaTerminal {
    public static void main(String[] args) throws Exception {
        Scanner scan = new Scanner(System.in);

        int numero;
        String agencia, nomeCliente;
        float saldo = 237.48F;

        System.out.println("***BANCO ELETRÔNICO***");
        System.out.println("Bem vindo ao Banco");
        System.out.println("Por favor, digite o número da Agência: ");
        numero = scan.nextInt();

        System.out.println("Digite a Agência (Formato XXX-X)");
        agencia = scan.next();

        System.out.println("Digite seu nome");
        nomeCliente = scan.next();

        System.out.println("Olá, " + nomeCliente + " obrigada por criar uma conta em nosso banco. Sua agência é " + agencia + ", conta " + numero + " e seu saldo " + saldo + " já está disponível para saque");


    }
}
