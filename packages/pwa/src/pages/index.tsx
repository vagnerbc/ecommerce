import { Box, Button } from '@ecommerce/design-system'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Box
      width="100vw"
      height="100vh"
      bgColor="brand.primary-default"
      overflow="hidden"
    >
      Home
      <Button>teste</Button>
    </Box>
  )
}

export default Home
