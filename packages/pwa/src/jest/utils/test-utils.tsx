import { ThemeProvider } from '@ecommerce/design-system'
import { render, RenderOptions } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { Provider } from 'react-redux'
import { StoreMockBuilder } from 'store/__mock__'
import { StateMockBuilder } from 'store/__mock__/state-mock-builder'
import { State } from 'store/ducks'
import { QueryClient, QueryClientProvider } from 'react-query'
import {
  ControllerFieldState,
  ControllerProps,
  FieldValues,
  UseFormStateReturn
} from 'react-hook-form'

const queryClient = new QueryClient()

interface CustomRenderOptions extends RenderOptions {
  initialState: State
}

type FormControllerMockProps = ControllerProps & {
  onChangeSpy?: () => void
}

const FormControllerMock = (props: FormControllerMockProps) => {
  return (
    <>
      {props.render({
        field: {
          onChange: props.onChangeSpy || jest.fn(),
          name: props.name,
          onBlur: jest.fn(),
          value: props.defaultValue || null,
          ref: jest.fn()
        },
        fieldState: {} as ControllerFieldState,
        formState: {} as UseFormStateReturn<FieldValues>
      })}
    </>
  )
}

export const wrapperProvider = (initialState: State) => {
  const store = new StoreMockBuilder().withState(initialState).build()

  const wrapper = ({ children }: any) => {
    return (
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <ThemeProvider>{children}</ThemeProvider>
        </Provider>
      </QueryClientProvider>
    )
  }

  return wrapper
}

const customRender = (
  component: React.ReactElement,
  options: CustomRenderOptions = {
    initialState: new StateMockBuilder().build()
  }
) => {
  const wrapper = wrapperProvider(options.initialState)

  return render(component, { wrapper, ...options })
}

function customRenderHook<T = any>(
  hook: any,
  options: CustomRenderOptions = {
    initialState: new StateMockBuilder().build()
  }
) {
  const wrapper = wrapperProvider(options.initialState)

  return renderHook<any, T>(hook, { wrapper })
}

export * from '@testing-library/react'
export {
  customRender as render,
  customRenderHook as renderHook,
  renderHook as baseRenderHook,
  act as hookAct,
  userEvent,
  FormControllerMock
}
