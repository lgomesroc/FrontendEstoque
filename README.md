# Sistema de Estoque - Frontend

![Sistema de Estoque](f2d52f38-2793-427a-8321-df70e06dab17.webp)

Este é o frontend de um sistema de estoque desenvolvido com **ReactJS** e **TypeScript**. Ele permite registrar, visualizar, editar e remover produtos, bem como realizar operações de entrada e saída de estoque. Além disso, inclui login e cadastro de usuários com autenticação.

## Tecnologias Utilizadas
- **ReactJS** com **TypeScript**: Framework e linguagem base do projeto.
- **Context API**: Gerenciamento de estado e autenticação.
- **Axios** (no arquivo `api.ts`): Para requisições HTTP.
- **CSS**: Estilização básica e responsiva.

## Estrutura de Pastas e Arquivos

```plaintext
frontend/
├── public/                    # Arquivos públicos e estáticos acessíveis diretamente
│   ├── index.html             # HTML principal que serve de base para a aplicação
│   └── favicon.ico            # Ícone da aplicação exibido no navegador
│
├── src/                       # Código principal do projeto
│   ├── components/            # Componentes reutilizáveis da interface
│   │   ├── Login.tsx          # Página de login
│   │   ├── LoginForm.tsx      # Formulário de autenticação de usuário
│   │   ├── ProductList.tsx    # Lista de produtos
│   │   ├── ProductForm.tsx    # Formulário para criação/edição de produtos
│   │   ├── Register.tsx       # Formulário de registro de novos usuários
│   │   ├── UserList.tsx       # Lista de usuários cadastrados
│   │   └── UserForm.tsx       # Formulário para criação/edição de usuários
│   │
│   ├── context/               # Gerenciamento de estado e contexto
│   │   └── AuthContext.tsx    # Contexto de autenticação de usuário
│   │
│   ├── pages/                 # Páginas principais do site
│   │   ├── Home.tsx           # Página inicial
│   │   ├── Products.tsx       # Página de produtos
│   │   └── Users.tsx          # Página de usuários
│   │
│   ├── services/              # Serviços de API e requisições HTTP
│   │   └── api.ts             # Configuração de API para comunicação com o backend
│   │
│   ├── App.tsx                # Componente principal do aplicativo
│   ├── index.tsx              # Ponto de entrada do React
│   ├── main.tsx               # Ponto de entrada alternativo (opcional)
│   └── styles.css             # Arquivo de estilos globais
│
├── .gitignore                 # Arquivo que especifica o que não será versionado no Git
├── package.json               # Lista dependências e scripts de execução do projeto
├── LICENSE                    # Licença de uso do projeto
├── README.md                  # Arquivo de documentação inicial
└── tsconfig.json              # Configuração do TypeScript para o projeto
```
## Detalhamento dos Arquivos

### `public/`
- **index.html**: HTML principal para renderização da aplicação.
- **favicon.ico**: Ícone exibido na aba do navegador.

### `src/`
- **components/**: Componentes reutilizáveis que estruturam a interface.
  - **Login.tsx**: Tela de login.
  - **LoginForm.tsx**: Formulário para autenticação.
  - **ProductList.tsx**: Lista de produtos.
  - **ProductForm.tsx**: Formulário para criação/edição de produtos.
  - **Register.tsx**: Formulário para registro de novos usuários.
  - **UserList.tsx**: Lista de usuários.
  - **UserForm.tsx**: Formulário para criação/edição de usuários.

- **context/**
  - **AuthContext.tsx**: Gerenciamento do contexto de autenticação.

- **pages/**
  - **Home.tsx**: Página inicial com visão geral das funcionalidades.
  - **Products.tsx**: Página de listagem e operações de produtos.
  - **Users.tsx**: Página de gerenciamento de usuários.

- **services/**
  - **api.ts**: Configuração de Axios para comunicação com o backend.

- **App.tsx**: Componente raiz do projeto.
- **index.tsx**: Ponto de entrada para renderizar a aplicação.
- **main.tsx**: Ponto de entrada alternativo (opcional).
- **styles.css**: Estilos globais.

### Arquivos de Configuração
- **.gitignore**: Define arquivos e diretórios a serem ignorados no controle de versão.
- **package.json**: Dependências e scripts de inicialização.
- **LICENSE**: Licença de uso.
- **README.md**: Documentação do projeto.
- **tsconfig.json**: Configuração do TypeScript.

## Funcionalidades

### Autenticação
- **Login e cadastro de usuários com gerenciamento de sessão.**
- **Proteção de rotas para acesso autorizado.**

### Gerenciamento de Produtos
- **Adicionar, editar, remover e listar** produtos com informações de nome, descrição, quantidade e valor.

### Controle de Estoque
- **Operações de entrada e saída de produtos com controle de quantidade.**

## Instalação

### Pré-requisitos
- **Node.js**: v14 ou superior
- **npm**: v6 ou superior

## Passo a Passo
### Clone o repositório:

```bash

clone https://github.com/seu-usuario/nome-do-repositorio-frontend.git

cd nome-do-repositorio-frontend

```
### Instale as dependências:

```bash

npm install

```
### Inicie o servidor de desenvolvimento:

```bash

npm start

```
Acesse a aplicação no navegador através de [http://localhost:3002](http://localhost:3002).

## Contribuição
Faça um fork do repositório.
Crie uma branch para sua feature:

```bash

git checkout -b minha-feature

Commit suas mudanças:

```

```bash

git commit -m 'Minha nova feature'

```
Envie para a branch:

```bash

git push origin minha-feature
```

Abra um Pull Request.

## Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.

