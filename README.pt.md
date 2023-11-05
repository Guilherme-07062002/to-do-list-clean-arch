# Protótipo Clean Architecture no Frontend

[English version](README.md)

## Objetivo

O propósito deste projeto é ilustrar a aplicação dos princípios da Clean Architecture em um contexto de desenvolvimento Front-end.

## Clean Architecture

Com o uso de uma arquitetura bem definida, podemos obter uma série de benefícios, como:

- Uma divisão clara entre as camadas de negócio e de infraestrutura. Isso possibilita a substituição de frameworks e bibliotecas sem impactar a lógica de negócio. Por exemplo, é viável trocar o React pelo Vue.js ou pelo React Native, mantendo as camadas mais internas da aplicação intactas.

- Facilidade na implementação de novas funcionalidades. Novos recursos podem ser integrados sem afetar as camadas mais profundas da aplicação, uma vez que as camadas externas dependem somente das interfaces definidas na camada de negócio.

- Facilidade na realização de testes unitários. A adoção de uma arquitetura limpa simplifica a criação de testes unitários, uma vez que as camadas mais internas da aplicação não possuem dependências externas. Isso torna a criação de mocks mais fácil e permite uma cobertura de código mais abrangente.

## Tecnologias

- [React](https://pt-br.reactjs.org/)
- [Redux](https://redux.js.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Material UI](https://material-ui.com/pt/)
- [Next.js](https://nextjs.org/)
- [Vitest](https://vitest.dev/)

## Como executar

Para executar o projeto, basta executar os seguintes comandos:

```bash
# Instalar as dependências
$ yarn

# Executar o projeto
$ yarn dev
```

E caso deseje realizar os testes:

```bash
# Executar os testes
$ yarn test

# Analisar cobertura de testes no código
$ yarn coverage
```

## Descrição

O projeto consiste em uma aplicação simples de lista de tarefas (To-do List), onde o usuário pode adicionar, remover e listar tarefas.

A aplicação foi desenvolvida utilizando o framework [Next.js](https://nextjs.org/), que é um framework React com foco em performance e SEO.

Para o desenvolvimento da interface, foi utilizado o framework [Material UI](https://material-ui.com/pt/), que é um framework de componentes React baseado no Material Design.

Para a execução dos testes, foi utilizado o framework [Vitest](https://vitest.dev/), que é um framework de testes unitários para Javascript.

## Arquitetura

A arquitetura do projeto foi baseada nos conceitos de Clean Architecture, onde temos uma separação clara entre as camadas de negócio e de infraestrutura.

![Clean Architecture](https://miro.medium.com/v2/resize:fit:1400/0*iU9Ks05_GTtGh6zV.jpg)

### Camada Externa (Frameworks e Drivers)

É a camada a mais externa da aplicação e engloba a interface do usuário (UI). Aqui, encontramos a implementação dos componentes React, que têm a responsabilidade de renderizar os elementos visuais que interagem com este.

### Camada de Interface (Adapters)

A camada de interface é responsável por implementar os contratos definidos na camada de negócio. Neste contexto, a camada de interface abrange a implementação dos repositórios e serviços, que realizam a comunicação com a camada de infraestrutura.

Nesse contexto foram implementados dois serviços:

- `ApiService`: responsável por realizar a comunicação com a API REST.
- `StoreService`: responsável por realizar o gerenciamento do estado da aplicação (que neste contexto é utilizado o redux).
  
### Camada de Negócio (Use Cases)

A camada de negócio é responsável por implementar as regras de negócio da aplicação. Nesta camada, temos a implementação dos casos de uso, que são responsáveis por orquestrar as chamadas aos serviços e repositórios.

Nesse contexto foram implementados os casos de uso:

- Criar tarefa
- Listar tarefas
- Remover tarefa

### Camada de Domínio (Entidades e Contratos)

A camada de domínio é responsável pela implementação das entidades e dos contratos da aplicação. Aqui, estão as entidades, que representam os dados da aplicação, bem como os contratos, que definem as interfaces que serão implementadas na camada de interface.

Caso queira testar o resultado final da aplicação, acesse o link: [https://to-do-list-clean-arch.vercel.app/](https://to-do-list-clean-arch.vercel.app/)
