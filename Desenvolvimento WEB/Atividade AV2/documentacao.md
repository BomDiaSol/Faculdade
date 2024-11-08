# Documentação: Sistema de Busca e Exibição de Drinks

Este sistema permite que o usuário busque informações sobre drinks e ingredientes através da API TheCocktailDB. A aplicação permite realizar buscas por nome de drink, por inicial do nome do drink e por ingrediente, e exibe os detalhes de cada item encontrado de forma interativa.

---

## Tabela de Conteúdos

- [Documentação: Sistema de Busca e Exibição de Drinks](#documentação-sistema-de-busca-e-exibição-de-drinks)
  - [Tabela de Conteúdos](#tabela-de-conteúdos)
  - [Visão Geral](#visão-geral)
  - [Estrutura do Código](#estrutura-do-código)
    - [1. Carregar Drink por Nome](#1-carregar-drink-por-nome)
      - [Fluxo](#fluxo)
      - [Exemplo de uso](#exemplo-de-uso)
    - [2. Listar Drinks por Nome](#2-listar-drinks-por-nome)
      - [Fluxo](#fluxo-1)
      - [Exemplo de uso](#exemplo-de-uso-1)
    - [3. Exibir Detalhes do Drink](#3-exibir-detalhes-do-drink)
      - [Fluxo](#fluxo-2)
      - [Exemplo de uso](#exemplo-de-uso-2)
    - [4. Carregar Drinks por Inicial](#4-carregar-drinks-por-inicial)
      - [Fluxo](#fluxo-3)
      - [Exemplo de uso](#exemplo-de-uso-3)
    - [5. Listar Drinks por Inicial](#5-listar-drinks-por-inicial)
      - [Fluxo](#fluxo-4)
      - [Exemplo de uso](#exemplo-de-uso-4)
    - [6. Carregar Ingrediente](#6-carregar-ingrediente)
      - [Fluxo](#fluxo-5)
      - [Exemplo de uso](#exemplo-de-uso-5)
    - [7. Exibir Detalhes do Ingrediente](#7-exibir-detalhes-do-ingrediente)
      - [Fluxo](#fluxo-6)
      - [Exemplo de uso](#exemplo-de-uso-6)
  - [Interação do Usuário](#interação-do-usuário)
    - [1. **Busca por Nome:**](#1-busca-por-nome)
    - [2. **Busca por Inicial:**](#2-busca-por-inicial)
    - [3. **Busca por Ingrediente:**](#3-busca-por-ingrediente)
    - [4. **Fechamento de Detalhes:**](#4-fechamento-de-detalhes)
  - [Exemplo Completo de Uso](#exemplo-completo-de-uso)
  - [Requisitos](#requisitos)
  - [Conclusão](#conclusão)

---

## Visão Geral

A aplicação oferece três principais funcionalidades:

1. **Busca por Nome de Drink**: Permite buscar drinks com base no nome.
2. **Busca por Inicial de Drink**: Permite buscar drinks que começam com uma letra específica.
3. **Busca por Ingrediente**: Permite buscar ingredientes específicos.

Após a busca, o sistema exibe os resultados em uma lista. O usuário pode clicar em um item da lista para visualizar mais detalhes sobre o drink ou ingrediente. Detalhes como nome, categoria, tipo de drink, copo, instruções e ingredientes (para drinks) ou descrição, tipo e teor alcoólico (para ingredientes) são apresentados.

---

## Estrutura do Código

O código está estruturado de forma a realizar três tipos de busca:

### 1. Carregar Drink por Nome

A função `carregarDrinkPorNome` permite ao usuário buscar um drink específico com base no nome.

#### Fluxo

- O nome do drink é capturado do campo de entrada.
- Realiza-se uma requisição `fetch` para a API, buscando o drink com o nome informado.
- Se drinks forem encontrados, são listados.
- Caso contrário, é exibida uma mensagem de "Drink não encontrado".

#### Exemplo de uso

```javascript
document.getElementById("btnPorNome").addEventListener("click", carregarDrinkPorNome);
```

### 2. Listar Drinks por Nome

A função `listarDrinks` exibe os drinks encontrados em uma lista. Cada item da lista inclui a imagem e o nome do drink.

#### Fluxo

- A lista de drinks é percorrida.
- Para cada drink, é criado um item de lista com imagem e nome.
- Adiciona um evento de clique para exibir os detalhes do drink.

#### Exemplo de uso

```javascript
listarDrinks(data.drinks);  // Chamado após a resposta da API.
```

### 3. Exibir Detalhes do Drink

A função `exibirDrink` exibe todos os detalhes de um drink selecionado, como nome, categoria, tipo, copo, instruções e ingredientes.

#### Fluxo

- Adiciona a classe `mostrar-detalhes` ao `body` para exibir a área de detalhes.
- Cria os elementos HTML necessários para exibir as informações do drink.
- Cria um botão para fechar os detalhes e retornar à tela inicial.

#### Exemplo de uso

```javascript
exibirDrink(drink);  // Chamado quando um item da lista de drinks é clicado.
```

### 4. Carregar Drinks por Inicial

A função `carregarDrinksPorInicial` permite buscar drinks que comecem com uma letra específica.

#### Fluxo

- A inicial do drink é capturada do campo de entrada.
- Realiza-se uma requisição `fetch` para a API, buscando drinks com a letra informada.
- Se existirem drinks, são listados. Caso contrário, é exibida uma mensagem de "Não há drinks com essa inicial".

#### Exemplo de uso

```javascript
document.getElementById("btnBuscarDrinksPorInicial").addEventListener("click",carregarDrinksPorInicial);
```

### 5. Listar Drinks por Inicial

Esta função exibe os drinks encontrados com a inicial informada. O processo é semelhante à função `listarDrinks`.

#### Fluxo

- A lista de drinks é percorrida.
- Para cada drink, é criado um item de lista com imagem e nome.
- Um evento de clique é adicionado para exibir os detalhes do drink.

#### Exemplo de uso

```javascript
listarDrinksPorInicial(data.drinks);  // Chamado após a resposta da API.
```

### 6. Carregar Ingrediente

A função `carregarIngrediente` permite ao usuário buscar informações sobre um ingrediente específico digitando seu nome.

#### Fluxo

- O nome do ingrediente é capturado do campo de entrada.
- Realiza-se uma requisição fetch à API para buscar as informações do ingrediente.
- Se o ingrediente for encontrado, exibe-se os detalhes. Caso contrário, é exibida uma mensagem de "Ingrediente não encontrado".

#### Exemplo de uso

```javascript
document.getElementById("btnBuscarIngrediente").addEventListener("click", carregarIngrediente);
```

### 7. Exibir Detalhes do Ingrediente

A função `exibirIngrediente` exibe os detalhes do ingrediente selecionado, incluindo descrição, tipo e teor alcoólico.

#### Fluxo

- Exibe as informações detalhadas sobre o ingrediente.
- Cria um botão de "Fechar" para permitir que o usuário retorne à tela anterior.

#### Exemplo de uso

```javascript
exibirIngrediente(ingrediente);  // Chamado quando um ingrediente é encontrado.
```

## Interação do Usuário

O sistema possui a seguinte interação:

### 1. **Busca por Nome:**
- O usuário digita o nome de um drink e clica no botão de busca.
- Os resultados são exibidos com o nome e a imagem dos drinks encontrados.
- O usuário pode clicar em um drink para visualizar os detalhes completos.

### 2. **Busca por Inicial:**
- O usuário digita uma letra e clica no botão de busca.
- A lista de drinks que começam com essa letra é exibida.
- O usuário pode clicar em um drink para ver seus detalhes.

### 3. **Busca por Ingrediente:**
- O usuário digita o nome de um ingrediente e clica no botão de busca.
- Se o ingrediente for encontrado, seus detalhes são exibidos.
- O usuário pode visualizar a descrição, tipo e teor alcoólico do ingrediente.

### 4. **Fechamento de Detalhes:**
- Em qualquer momento, o usuário pode fechar a visualização de detalhes clicando no botão "Fechar".

---

## Exemplo Completo de Uso

1. O usuário digita o nome de um drink e clica no botão de "Buscar Drink por Nome".
2. O sistema realiza a busca e exibe os drinks encontrados.
3. O usuário clica em um drink da lista.
4. O sistema exibe os detalhes do drink, incluindo ingredientes.
5. O usuário clica no botão "Fechar" para voltar à lista de drinks.

Ou, se o usuário preferir buscar por inicial:

1. O usuário digita uma letra no campo "Buscar por Inicial".
2. O sistema exibe os drinks que começam com essa letra.
3. O usuário clica em um drink para ver seus detalhes.

---

## Requisitos

- **Navegador moderno**: O sistema utiliza a API `fetch` para realizar requisições HTTP e exibir resultados de forma dinâmica.
- **Acesso à internet**: A aplicação depende da API pública TheCocktailDB para buscar informações sobre drinks e ingredientes.
- **HTML/CSS**: O sistema é construído com HTML e CSS para exibição da interface do usuário.

---

## Conclusão

Este sistema interativo oferece uma forma prática de buscar e visualizar informações sobre drinks e ingredientes. O código é organizado de maneira modular, o que facilita a expansão e a personalização. Além disso, ele pode ser integrado a outros sistemas ou adaptado para diferentes necessidades de busca e exibição de dados.
