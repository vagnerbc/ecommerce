# Como instalar o design system no meu projeto?

## 1° - Ter acesso ao repositório da biblioteca e ter SSH configurado no Bitbucket

&nbsp;

## 2° - Instalar pacote com npm ou yarn

### #branch, #tag, #commit-hash

```bash
yarn add git+ssh://git@bitbucket.org:netsuperdev/design-system.git#develop

# ou

npm install git+ssh://git@bitbucket.org:netsuperdev/design-system.git#develop
```

---

&nbsp;

## 3° - Configurar ThemeProvider e importar os estilos CSS

#### Deve-se adicionar o encapsulamento do ThemeProvider e importar o CSS no arquivo principal da aplicação, ou seja, o arquivo no qual vai ter acesso a todas as telas/componentes.

### Exemplo: arquivo "\_app.js"

```js
import { ThemeProvider } from '@ecommerce/design-system'

import '@ecommerce/design-system/src/styles/index.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
```

### Outro exemplo: arquivo "index.js"

```js
import Routes from './routes'
import { ThemeProvider } from '@ecommerce/design-system'

import '@ecommerce/design-system/src/styles/index.css'

export default function App() {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  )
}
```

---

&nbsp;

## 4° - Pronto, agora basta importar os componentes do design system e começar a usar nos componentes ou telas desejados

```js
import { Flex, Button, Icon } from '@ecommerce/design-system'

export default function MinhaTela() {
  return (
    <Flex>
      <Icon name="insert_drive_file" size="sm" color="feedback.error-default" />
      <Button variant="brand-primary-solid">Hello World</Button>
    </Flex>
  )
}
```
