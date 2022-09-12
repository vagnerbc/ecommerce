# **Como ter uma boa performance no React?**

### Pode-se ter uma boa performance no React utilizando alguns dos recursos que são disponibilizados pelo mesmo. Esses recursos são:

### `memo`

### `useMemo`

### `useCallback`

&nbsp;

---

&nbsp;

## Quando usar `memo`?

1. Em componentes funcionais puros (dado as mesmas props, o retorno sempre vai ser o mesmo)

2. Quando o componente renderiza muitas vezes

3. Quando um componente renderiza muitas vezes sempre com as mesmas props

4. Em componentes médios para grandes

&nbsp;

---

&nbsp;

## Sobre o `useMemo`

- Faz com que cálculos dentro de um componente não precise ser executado caso a informação que eles precisam não tenha sido alterada

  **Obs: cálculos não são somente operações matemáticas nesse contexto, mas também operações de manipulação de objetos e arrays**

  ### **Quando usar?**

  - Só compensa utilizar em operações e cálculos grandes(se não fica mais custoso)

  - Resolver o problema da comparação rasa no React

&nbsp;

---

&nbsp;

## Sobre o `useCallback`

- Não faz uma função ser mais rápida, só evita a função de ser criada em cada renderização

- Não compensa usar em funções que só são usadas dentro do mesmo componente que as cria(é mais custoso)

  ### **Quando usar?**

  - Usar em funções que são passadas como props, caso contrario o memo utilizado no componente que receba a função como props não surtirá efeito
