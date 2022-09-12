import { render, screen } from 'jest/utils/test-utils'

import Header from '../header'
import CustomModal from '../index'

describe('Componente CustomHeader do ModalWrapper', () => {
  test('Deve renderizar corretamente', () => {
    render(
      <CustomModal
        isOpen={true}
        onClose={jest.fn()}
        headerSlot={<Header title="title" rightSlot={<div>right slot</div>} />}
      >
        <div>content</div>
      </CustomModal>
    )

    expect(screen.getByText('title')).toBeTruthy()
    expect(screen.getByText('right slot')).toBeTruthy()
    expect(screen.getByLabelText('Close')).toBeTruthy()
  })
})
