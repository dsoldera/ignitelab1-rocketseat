import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps }) {
  return (
    //this UserProvider form auth0 will allow me to access the user logged access in all app
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp
