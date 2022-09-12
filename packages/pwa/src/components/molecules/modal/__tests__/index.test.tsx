import { Box } from '@ecommerce/design-system'
import { render, screen } from 'jest/utils/test-utils'

import ModalWrapper from '..'

describe('Componente básico de Modal', () => {
  const footer = <Box>Footer content</Box>

  test('deve renderizar corretamente', () => {
    render(
      <ModalWrapper
        isOpen={true}
        onClose={jest.fn()}
        footerSlot={footer}
        modalTitle="Header content"
      >
        <div>Modal content</div>
      </ModalWrapper>
    )

    expect(screen.getByText('Header content')).toBeTruthy()
    expect(screen.getByText('Modal content')).toBeTruthy()
    expect(screen.getByText('Footer content')).toBeTruthy()
  })

  test('Deve renderizar o header customizável quando o headerSlot for fornecido', () => {
    const customHeader = <h1>Custom header</h1>

    render(
      <ModalWrapper isOpen={true} onClose={jest.fn()} headerSlot={customHeader}>
        <div>Modal content</div>
      </ModalWrapper>
    )

    expect(screen.getByText('Custom header')).toBeTruthy()
  })
})
