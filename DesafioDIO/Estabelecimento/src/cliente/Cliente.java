package cliente;

public class Cliente {
    public void escolherCadeira(){
        System.out.println("Cliente está escolhendo um canto para sentar");
    }

    public void escolherLanche(){
        olharSaldoNoAplicativo();
        System.out.println("Cliente está escolhendo o lanche");
    }


    public void fazerPedido(){
        System.out.println("Cliente está fazendo o pedido");
    }

    public void olharSaldoNoAplicativo(){
        System.out.println("Cliente está olhando o saldo no aplicativo");
    }

    public void irEmbora(){
        System.out.println("Cliente está indo embora");
    }


}
