# Cookin' Up

Aplicacao web para encontrar receitas a partir dos ingredientes disponiveis em casa. O usuario seleciona ingredientes por categoria e recebe uma lista de receitas compativeis, podendo voltar e editar a selecao quando quiser.

Este projeto foi desenvolvido durante o curso de Vue.js da [Alura](https://www.alura.com.br/), como pratica de desenvolvimento de interfaces com Vue 3, TypeScript e componentes reutilizaveis.

## Funcionalidades

- Exibicao de ingredientes organizados por categorias.
- Selecao e remocao de ingredientes da lista atual.
- Busca de receitas compativeis com os ingredientes selecionados.
- Contagem dos resultados encontrados.
- Tratamento visual para combinacoes sem receitas.
- Opcao de editar a lista de ingredientes e realizar uma nova busca.
- Layout responsivo para telas maiores e dispositivos moveis.

## Tecnologias

- [Vue 3](https://vuejs.org/) com Composition API e `<script setup>`.
- [TypeScript](https://www.typescriptlang.org/).
- [Vite](https://vite.dev/) para desenvolvimento e build.
- CSS com variaveis e estilos responsivos.
- Dados de categorias e receitas consumidos de arquivos JSON publicados em gists.

## Como executar

### Pre-requisitos

- Node.js 22 ou superior.
- npm.

### Instalacao

```sh
npm install
```

### Desenvolvimento

Inicie o servidor local com hot reload:

```sh
npm run dev
```

Depois, acesse a URL exibida pelo Vite no terminal.

### Validacao e build

Para executar a verificacao de tipos:

```sh
npm run type-check
```

Para gerar a versao de producao:

```sh
npm run build
```

Para visualizar localmente o build gerado:

```sh
npm run preview
```

## Estrutura principal

```text
src/
├── components/       # Componentes da interface
├── http/              # Funcoes de acesso aos dados remotos
├── interfaces/        # Tipos TypeScript de categorias e receitas
├── operacoes/         # Regras para comparar listas de ingredientes
├── assets/            # Estilos e imagens usadas pela aplicacao
├── App.vue            # Composicao principal da pagina
└── main.ts            # Ponto de entrada da aplicacao
```

## Aprendizados

O desenvolvimento reforca conceitos fundamentais do Vue.js, como composicao de componentes, props, eventos customizados, estado reativo com `ref`, ciclo de vida com `onMounted`, renderizacao condicional e tipagem de dados com TypeScript.

## Licenca

Projeto desenvolvido para fins educacionais durante a formacao em Vue.js da Alura.
