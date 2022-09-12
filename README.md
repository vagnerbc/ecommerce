# Ecommerce

Projeto monorepo, utilizando Lerna, Yarn Workspaces e Typescript.

## Front end

- ### PWA com NextJS

## Back end

- ### API com NodeJS, Express e MySQL

---

&nbsp;

## Configuração do ambiente

- ### Node: 14.18.3 ou a versão LTS mais recente
- ### Yarn: 1.22.4 ou mais recente

---

&nbsp;

## Comandos

### `Instala e faz link das dependências do monorepo`

```bash
yarn bootstrap
```

#### Limpa todas as denpendências dos pacotes do monorepo

```bash
yarn clean
```

#### Limpa todas as denpendências dos pacotes do monorepo e do root

```bash
yarn clean:root
```

#### Inicia o servidor de desenvolvimento do pacote `pwa`

```bash
yarn run:pwa
```

#### Inicia o storybook do pacote `design-system`

```bash
yarn run:storybook
```

#### Executa testes de todos os pacotes do monorepo

```bash
yarn test
```

#### Executa testes de todos os pacotes do monorepo com coverage

```bash
yarn test:coverage
```

#### Executa a verificação de estilos de código e tipagem em todos os pacotes do monorepo

```bash
yarn check:lint
```

#### Corrige identação e estilos de código em todos os pacotes do monorepo

```bash
yarn prettify:all
```

---

&nbsp;

# Extensões requeridas

- ### ESLint (<https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint>);
- ### Prettier (<https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode>);

---

&nbsp;
