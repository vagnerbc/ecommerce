# Como fazer deploy da biblioteca?

## 1° - Gerar tipagens de tema e componentes
### **Obs:** Caso o tema seja alterado, ou tenha criado um novo componente, ou tema/variante do componente for alterado

```bash
yarn generate:theme-tokens
```

&nbsp;

## 2° - Fazer o build da biblioteca

```bash
yarn build
```

&nbsp;

## 3° - Fazer commit da versão com os arquivos gerados/modificados

### Alterar a versão no package.json:

```bash
git commit -m "Versão <x.y.z>" -a
```

&nbsp;

## 4° - Fazer push do commit com a versão, para a branch alvo

```bash
# develop usada como exemplo nesse caso
git push origin develop
```

&nbsp;

## 5° - Criar tag da versão e fazer o push

### Criar a tag com a versão:
```bash
git tag v<x.y.z>
```

### Enviar a tag para o repositório remoto:
```bash
git push --tags
```

&nbsp;
