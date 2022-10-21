import { getSession, useUser, getAccessToken } from '@auth0/nextjs-auth0';
import { GetServerSideProps } from "next";

export default function Home() {
  // esse é um codigo inicial para pegar os dados do usuario
  // const { user } = useUser()

  // return (
  //   <div>
  //     <pre>
  //       {JSON.stringify(user, null, 2)}
  //     </pre>
  //   </div>
  // )

  return null
}

// esse é um codigo para redirecionar sempre o usuario para o login no inicio da aplicação
export const getServerSideProps: GetServerSideProps  = async ({ req, res }) => {
  /**
   * Use para pegar o token do usuario do auth0 no console
   * pegar o accesstoken do console e jogo no jwt.io
   */
  // const token = getAccessToken(req, res);
  //console.log(token);
  // return {
  //   props: {}
  // }
    
    const session = getSession(req, res);

    if(!session) {
      return {
        redirect: {
          destination: '/api/auth/login',
          permanent: false
        }
      }
    } else {
      return {
        redirect: {
          destination: '/app', // redirecionar para a pagina app que será a home
          permanent: false
        }
      }
    }
}