export interface Cryptography {
  compare: (plaintext: string, digest: string) => Promise<boolean>
  hash: (plaintext: string) => Promise<string>
  random: (bytes: number) => string
}
