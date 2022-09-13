export interface TokenGenerator {
  generate: (param: { id: string }) => string
}
