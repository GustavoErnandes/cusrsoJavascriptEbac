# Flux Architecture
Padrão arquitetura de desenvolvimento focado no gerenciamento de estado de aplicações front-end.

## Motivação
Uma das partes mais essenciais de qualquer aplicativo é o gerenciamento de estado . Ele determina o que os usuários veem, a aparência do aplicativo, quais dados são salvos e assim por diante.
No React possui componentes, states, que são estados internos para armazenar propriedades. O problema ocorre quando é preciso compartilhar esse estado interno para outros componentes. As principais soluções para esse problema são: Redux, Hooks e Recoil.

## Redux
Actions, Reducers, Store
- https://redux.js.org/

Redux é uma biblioteca de gerenciamento de estados e para usa-lo é preciso entender alguns conceitos: 
    - Store: Onde ficam armazenados os estados compartilhados. Pode ser acessado por todos os componentes.
    - Actions: são funções que alteram algum estado dentro da aplicação.
    - Reducers: são funções que recebem um estado e o atualizam com a devida Action.
    - Dispatch é quem presta atenção em eventos dentro da aplicação (trata-se de um event listener ou "ouvinte de eventos" do Redux). Ou seja, quando um evento for chamado - um clique em botão, por exemplo -, ele executa um reducer com a devida action.

O redux tem algumas dificuldades:
    - Não foi planejado para trabalhar com requisições assincrónas. Caso seja necessário, será preciso instalar middlewares de terceiros, como redux-thux e redux-sagas.
    - Não existe relação direta entre Actions e os estados, tornando qualquer forma de encapsulamento ineficaz.
    - Precisa de vários passos para implementar.
    - É uma ferramenta muito complexa para projetos mais simples.


## Hooks
Hooks (useState), Context, State, props...
- https://pt-br.reactjs.org/docs/hooks-intro.html
- https://pt-br.reactjs.org/docs/context.html

Hooks permitem que você divida um componente em funções menores baseadas em pedaços que são relacionados (como configurar uma subscription ou captura de dados). Eles permitem reutilizar lógica com estado sem mudar sua hierarquia de componentes. Isso torna fácil de compartilhar Hooks com vários outros componentes.

Algumas desvantagens são:
    - Quando muitas propriedades/objetos precisam ser passadas para diversos componentes.
    - Quando a aplicação tem várias regras de negócios que precisam alterar vários estados de propriedades/objetos.


## Recoil (experimental)
Atom, useRecoil, State
- https://recoiljs.org/

Recoil js é uma nova biblioteca de gerenciamento de estado para React. É “mínimo e Reativo” como o site diz. O objetivo é compartilhar um estado de forma rápida e flexivel. Usar funções puras para controlar dados derivados e consultas assíncronas.
Os principais conceitos são:
    - atom: um pedaço de estado; cada átomo é como uma mini-loja, já que os átomos são completamente desacoplados e visam armazenar dados que serão atualizados de uma só vez.
    - selector: a base onde um pedaço de estado é calculado.

# Redux vs Hooks Vs Recoil

Hooks é a mais simples e objetivo, para coisas mais pontuais. Redux por ser mais completo e ter ferramentas que permitem uma maior estruturação para o gerenciamento de estado torna-se mais voltado para projetos maiores e mais complexos. Já o Recoil possui a simplicidade do hooks e uma abrangência muito parecida com a do redux, fazendo que ela seja uma ótima solução para projetos de médio porte, como desenvolver um site para aluguéis de imóveis.
