import { useAuth } from 'contexts/auth'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

type Props = {
  children: any
}

function RouteGuard({ children }: Props) {
  const { logged } = useAuth()

  const router = useRouter()
  const [authorized, setAuthorized] = useState(false)

  const authCheck = useCallback(
    (url: string) => {
      // redirect to login page if accessing a private page and not logged in
      const publicPaths = ['/login']
      const path = url.split('?')[0]

      console.log({ url, publicPaths, path, logged })
      if (!logged && !publicPaths.includes(path)) {
        setAuthorized(false)

        router.push({
          pathname: '/login',
          query: { returnUrl: router.asPath }
        })
      } else {
        setAuthorized(true)
      }
    },
    [logged, router]
  )

  useEffect(() => {
    // on initial load - run auth check
    authCheck(router.asPath)

    // on route change start - hide page content by setting authorized to false
    const hideContent = () => setAuthorized(false)
    router.events.on('routeChangeStart', hideContent)

    // on route change complete - run auth check
    router.events.on('routeChangeComplete', authCheck)

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off('routeChangeStart', hideContent)
      router.events.off('routeChangeComplete', authCheck)
    }
  }, [authCheck, router.asPath, router.events])

  return authorized && children
}

export { RouteGuard }
