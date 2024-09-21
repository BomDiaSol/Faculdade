public class iPhone implements ReprodutorMusical, AparelhoTelefonico, NavegadorInternet {

    public void tocar(){
        System.out.println("A música está tocando");
    }

    public void pausar(){
        System.out.println("A música foi pausada");
    }

    public String selecinarMusica(String musica){
        System.out.println("A música " + musica + " está tocando");
        return musica;
    }

    public String ligar(String numero){
        System.out.println("Ligando para o núemro " + numero);
        return numero;
    }

    public void atender(){
        System.out.println("Atendendo ligação");
    }

    public void iniciarCorreioVoz(){
        System.out.println("Iniciando correio de voz");
    }

    public String exibirPagina(String url){
        System.out.println("Exibindo a página " + url);
        return url;
    }

    public void adicionarNovaAba(){
        System.out.println("Adicionando nova aba");
    }

    public void atualizarPagina(){
        System.out.println("Atualizando página");
    }
}
