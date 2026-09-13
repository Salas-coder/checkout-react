<div align="center">

# 🛒 Checkout React

### Simulação de processo de compra desenvolvida com React

[![React](https://img.shields.io/badge/React-2026-blue?logo=react)](https://react.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Vite](https://img.shields.io/badge/Vite-Frontend-646CFF?logo=vite)](https://vite.dev/)
[![Zod](https://img.shields.io/badge/Zod-Validação-3E67B1)](https://zod.dev/)

</div>

---

## 📌 Sobre o projeto

O **Checkout React** é uma aplicação web desenvolvida para simular um processo de finalização de compra.

A aplicação possui um carrinho com produtos fixos, uma tela de pagamento com validação dos dados e telas de sucesso e falha de acordo com o resultado do processamento simulado.

Todo o processo acontece diretamente no navegador, sem back-end ou integração com serviços reais de pagamento.

---

## 🎯 Objetivo

O objetivo do projeto é colocar em prática conceitos de desenvolvimento Front-End utilizando React, incluindo:

- Componentização
- Props
- React Router
- React Hook Form
- Zod
- Custom Hooks
- `useState`
- `useRef`
- Programação assíncrona
- Arrays e objetos JavaScript
- Renderização de listas com `map`
- CSS e responsividade
- Git e GitHub

---

## ⚙️ Funcionalidades

### 🛍️ Carrinho

- Exibição dos produtos.
- Quantidade de cada produto.
- Cálculo do subtotal.
- Cálculo do valor total da compra.
- Valores formatados em reais.

### 💳 Pagamento

- Formulário de dados do cartão.
- Validação utilizando React Hook Form e Zod.
- Validação do titular.
- Validação do número do cartão.
- Validação da validade.
- Validação do CVV.
- Aceita espaços ou hífens no número do cartão.

### 🔄 Processamento

Após o envio de um formulário válido:

```text
Processando compra…
```

O botão de pagamento fica desabilitado durante o processamento para evitar múltiplos envios.

O resultado é determinado pelo número do cartão:

| Situação               | Resultado  |
| ---------------------- | ---------- |
| 16 dígitos iguais      | `/falha`   |
| Outros números válidos | `/sucesso` |

Na situação de falha, a aplicação exibe:

```text
tentativa de golpe
```

---

## 🧭 Rotas

| Rota         | Página    | Função                              |
| ------------ | --------- | ----------------------------------- |
| `/`          | Carrinho  | Exibe os produtos e o total         |
| `/pagamento` | Pagamento | Formulário de pagamento             |
| `/sucesso`   | Sucesso   | Confirmação da compra               |
| `/falha`     | Falha     | Resultado de tentativa identificada |

---

## 🧩 Estrutura do projeto

```text
checkout-react/
│
├── src/
│   ├── components/
│   │   ├── ItemCarrinho.jsx
│   │   └── ResumoCompra.jsx
│   │
│   ├── data/
│   │   └── produtos.js
│   │
│   ├── hooks/
│   │   └── usePagamento.js
│   │
│   ├── pages/
│   │   ├── Carrinho.jsx
│   │   ├── Carrinho.css
│   │   ├── Pagamento.jsx
│   │   ├── CheckoutPages.css
│   │   ├── Sucesso.jsx
│   │   └── Falha.jsx
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

---

## 🧱 Organização do código

### Components

Os componentes reutilizáveis ficam dentro de `src/components/`.

**`ItemCarrinho.jsx`**

Responsável pela exibição das informações de cada produto utilizando props.

**`ResumoCompra.jsx`**

Responsável pelo resumo da compra e pelo cálculo do valor total.

### Pages

As páginas da aplicação ficam dentro de `src/pages/`.

- `Carrinho.jsx`
- `Pagamento.jsx`
- `Sucesso.jsx`
- `Falha.jsx`

Cada página representa uma das etapas do checkout.

### Hooks

O arquivo:

```text
src/hooks/usePagamento.js
```

concentra a lógica relacionada ao processamento simulado do pagamento.

---

## 🛠️ Tecnologias

| Tecnologia      | Utilização                   |
| --------------- | ---------------------------- |
| React           | Construção da interface      |
| JavaScript      | Lógica da aplicação          |
| JSX             | Estrutura dos componentes    |
| CSS             | Estilização e responsividade |
| Vite            | Ambiente de desenvolvimento  |
| React Router    | Rotas e navegação            |
| React Hook Form | Controle do formulário       |
| Zod             | Validação dos dados          |
| Git             | Controle de versão           |
| GitHub          | Repositório e versionamento  |

---

## 🚀 Como executar

### Pré-requisitos

É necessário ter o **Node.js** instalado.

### 1. Instalar as dependências

Dentro da pasta do projeto:

```bash
npm install
```

### 2. Iniciar o projeto

```bash
npm run dev
```

Depois, acesse no navegador o endereço disponibilizado pelo Vite no terminal.

### 3. Gerar o build

Para verificar a versão de produção:

```bash
npm run build
```

### 4. Visualizar o build

```bash
npm run preview
```

---

## 🌿 Organização das branches

O desenvolvimento foi organizado utilizando uma branch `develop` para concentrar os merges e branches de funcionalidade para as diferentes etapas do projeto.

```text
main
└── develop
    ├── feature/carrito
    ├── feature/navegacao
    ├── feature/ui
    ├── feature/pagamento
    └── feature/processamento
```

### Branches

| Branch                  | Objetivo                                                 |
| ----------------------- | -------------------------------------------------------- |
| `main`                  | Versão final do projeto                                  |
| `develop`               | Concentração dos merges durante o desenvolvimento        |
| `feature/carrito`       | Desenvolvimento do carrinho                              |
| `feature/navegacao`     | Implementação da navegação e rotas                       |
| `feature/ui`            | Desenvolvimento da interface                             |
| `feature/pagamento`     | Formulário e validações de pagamento                     |
| `feature/processamento` | Processamento assíncrono e prevenção de múltiplos envios |

---

## 🔀 Fluxo de desenvolvimento

As funcionalidades foram desenvolvidas em branches próprias e posteriormente integradas à `develop`.

```text
feature/*
     │
     ▼
 develop
     │
     ▼
   main
```

As branches de funcionalidade foram mantidas após os merges.

---

## 🧪 Testes do fluxo de pagamento

### ✅ Pagamento aprovado

Um número de cartão com 16 dígitos válidos e que não sejam todos iguais deve resultar em:

```text
Processando compra…
        ↓
     /sucesso
```

### ❌ Tentativa identificada

Um número com os 16 dígitos iguais deve resultar em:

```text
Processando compra…
        ↓
      /falha
        ↓
tentativa de golpe
```

---

## 📱 Responsividade

A interface foi desenvolvida utilizando CSS e possui adaptação para diferentes tamanhos de tela.

---

## 🔮 Melhorias futuras

Algumas melhorias que poderiam ser implementadas futuramente:

- Adicionar um back-end.
- Utilizar um banco de dados.
- Permitir produtos dinâmicos.
- Implementar um catálogo de produtos.
- Permitir alteração de quantidades no carrinho.
- Integrar um serviço de pagamento real.
- Adicionar novas funcionalidades ao processo de checkout.

---

## 📋 Trello

Quadro utilizado para organização das tarefas:

> 🔗 **Adicionar aqui o link do Trello**

---

## 🎥 Vídeo de apresentação

Vídeo de apresentação do projeto:

> 🎬 **Adicionar aqui o link do vídeo**

---

## 👨‍💻 Projeto acadêmico

Projeto desenvolvido como parte da atividade avaliativa de **Front-End React T1 e T2 — Módulo 2, Semana 07**.

---

<div align="center">

### 🛒 Checkout React

Desenvolvido com React, JavaScript e Vite.

</div>
