#include <stdio.h>

char board [3][3];

void iniciarTabuleiro(){
    for(int i = 0; i < 3; i++){
        for(int j = 0; j < 3; j++){
            board[i][j] = ' ';
        }
    }
}

void printarTabuleiro(){
    printf(" %c | %c | %c \n", board[0][0], board[0][1], board[0][2]);
    printf("---|---|---\n");
    printf(" %c | %c | %c \n", board[1][0], board[1][1], board[1][2]);
    printf("---|---|---\n");
    printf(" %c | %c | %c \n", board[2][0], board[2][1], board[2][2]);
}

char verVencedor(){
    for (int i = 0; i < 3; i++){
        if(board[i][0] == board [i][1] && board [i][1] == board[i][2] && board[i][0] != ' '){
            return board[i][0];
        };

        if(board [0][i] == board[1][i] && board[1][i] == board[2][i] && board[0][i] != ' '){
            return board[0][i];
        }
    }

    if(board[0][0] == board [1][1] && board[1][1] == board[2][2] && board[0][0] != ' '){
        return board[0][0];
    }

    if(board[0][2] == board[1][1] && board[1][1] == board[2][0] &&board[0][2] != ' '){
        return board[0][2];
    }

    return ' ';
        
}

int main(){

    int linha, coluna;
    char jogador = 'X';
    char vencedor = ' ';

    iniciarTabuleiro();

    for(int movimento = 0; movimento < 9 && vencedor == ' '; movimento++){
        printarTabuleiro();

        printf("Jogador %c digite uma linha (0 até 2) e uma coluna(0 até 2): ");
        scanf("%d %d", &linha, &coluna);

        if (linha < 0 || linha > 2 || coluna < 0 || coluna > 2 || board[linha][coluna] != ' '){
            printf("Movimento inválido");
            movimento--;

            continue;
        }

        board[linha][coluna] = jogador;
        vencedor = verVencedor();
        jogador = (jogador == 'X') ? 'O' : 'X';

        printarTabuleiro();

        if(vencedor == ' '){
            printf("O jogo terminou em um empate");
        } else {
            printf("Você ganhou %c", vencedor);
        }
    }

    return 0;
}