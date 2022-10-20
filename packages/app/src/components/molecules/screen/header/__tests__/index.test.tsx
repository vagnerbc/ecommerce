import { render, fireEvent } from 'jest/utils/test-utils'
import React from 'react'

import Header from '../index'

describe('Testes do header do carrinho', () => {
  test('deve renderizar corretamente', () => {
    const { getByText, queryByTestId } = render(<Header title="Teste title" />)

    expect(queryByTestId('back-button')).toBeFalsy()
    expect(getByText('Teste title')).toBeTruthy()
  })

  test('deve redirecionar para a rota definida ao clicar em voltar', () => {
    const onGoBackSpy = jest.fn()

    const { getByTestId } = render(
      <Header title="Teste title" onGoBack={onGoBackSpy} />
    )

    const backButton = getByTestId('back-button')
    fireEvent.press(backButton)

    expect(backButton).toBeTruthy()
    expect(onGoBackSpy).toBeCalled()
  })
})
