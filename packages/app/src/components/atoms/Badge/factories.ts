import { radius } from 'presentation/themes/borders'

type RoundStylesOptions = {
  bgColor: string
  textColor: string
  borderRadius?: keyof typeof radius
  opacity?: number
}

export const getRoundStyles = (options: RoundStylesOptions) => {
  return {
    borderRadius: options.borderRadius ?? 'pill',
    _text: { color: options.textColor, fontWeight: 'bold', fontSize: 'xxxs' },
    bgColor: options.bgColor,
    py: 'quarck',
    px: 'nano',
    opacity: options.opacity ?? 1
  }
}
