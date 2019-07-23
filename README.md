# Burger Queen

## 1. O que é?

O Projeto Burger Queen foi desenvolvido como um desafio do Bootcamp da Laboratoria para a criação de uma Single-Page-Application utilizando **React**.

A proposta foi criar uma interface para a realização de pedidos via tablet, de maneira coordenada e eficiente e que atendesse tanto o garçon/garçonete para as anotações do pedido e checagem de valor total, quanto para o Chef receber os pedidos e atualizar seus estados de preparação.

O site pode ser testado clicando [aqui!](https://react-78d64.firebaseapp.com/)

## 2. Objetivo:
O Objetivo principal: Aprender a construir uma interface web usando **React**, adquirindo a experiência de como manter a interface e o estado sincronizados.

## 3. Como funciona?
O Burger Queen foi desenvolvido visando atender um "cliente" pré definido: Um pequeno restaurante de hambúrgueres, que está crescendo, necessita uma interface em que se possa realizar pedidos utilizando um _tablet_.

#### Para o Garçon/Garçonete:

```
A interface apresenta dois menus, um com café da manhã e outro com o restante do dia, 
cada um com seus produtos específicos.
O usuário pode escolher quais produtos adicionar e a interface mostra o resumo do pedido, 
junto do custo total.
```

#### Para o/a Chef:
```
A interface apresenta a lista de pedidos em ordem a serem preparados e 
dois botões para atualizar o estado do pedido para: "Em preparação" e "Pronto".
```

## 4. Protótipo de Média Fidelidade:

### Login
![prototipo](https://uploaddeimagens.com.br/images/002/147/681/full/1_-_Login.png)
### Tela Inicial Salão
![prototipo](https://uploaddeimagens.com.br/images/002/147/680/full/LOGIN.png)

O ``protótipo`` pode ser testado clicando [aqui!](https://marvelapp.com/5jj096f/screen/57704023)

#### Resultado Obtido:
![site](https://uploaddeimagens.com.br/images/002/147/694/full/%C3%ADndice.jpeg)
![site](https://uploaddeimagens.com.br/images/002/147/695/full/%C3%ADndice2.jpeg)

## 5. Considerações gerais

* Este projeto foi individual.
* A lógica do projeto foi totalmente implementada em JavaScript (ES6 +), HTML e CSS. Neste projeto foi utilizado [React](https://reactjs.org/).
* O aplicativo é um _Single Page App_.
* Pensado no UX para aqueles que vão receber os pedidos, o tamanho e a aparência dos botões, a visibilidade do estado atual do pedido.
* Trabalho produzido através das seguintes histórias de usuários: 

**História de usuário 1** 
Usuário deve ter seu perfil (login/senha) para acessar o sistema.
Eu como funcionário do restaurante quero entrar na plataforma e ver apenas a
tela imporante para o meu trabalho.
* [x] Criar login e senha.
* [x] Criar tipo de usuário (cozinha / salão).
* [x] Entrar na tela correta para cada usuário.

**História de usuário 2** 
Garçom/Garçonete deve ser capaz de anotar o pedido do cliente
Eu como garçom/garçonete quero poder anotar o pedido de um cliente para não
depender da minha memória, saber quanto cobrar e poder enviar os pedidos para a
cozinha para serem preparados em ordem.
* [x] Digite o nome do cliente.
* [x] Filtre _menu_ para _café da manhã_ e _almoço/jantar_.
* [x] Adicionar item ao pedido.
* [x] Excluir item do pedido.
* [x] Mostra _resumo_ do pedido com todos os itens e o total.
* [x] Enviar para a cozinha (isso deve salvar o pedido).

**História de usuário 3** 
Chefe de cozinha deve ver os pedidos
Eu como chefe de cozinha quero ver os pedidos dos clientes em ordem, poder marcar que estão prontos e poder notificar os garçons/garçonetes que o pedido está pronto para ser entregue ao cliente.
* [x] Visualização de pedidos pendentes para produção.
* [x] Marcar pedido como como pronto para entrega.
* [ ] Ver histórico dos pedidos.

**História de usuário 4** 
Garçom/Garçonete deve ver os pedidos prontos para servir
Eu como garçom/garçonete quero ver os pedidos que estão prontos para entregá-los rapidamente aos clientes.
* [ ] Visualização de pedidos pendentes para entrega.
* [ ] Marcar pedido como entregue ao cliente.
