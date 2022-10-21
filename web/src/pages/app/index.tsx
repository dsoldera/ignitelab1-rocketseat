import { getSession, useUser  } from '@auth0/nextjs-auth0';
import { GetServerSideProps } from 'next';


export default function Home() {
  const {user } = useUser()

  return (
    <div>
      <h1>Hello World</h1>
      <pre>
        {JSON.stringify(user , null, 2)}
      </pre>

      <a href='/api/auth/logout'>Logout</a>
    </div>
  )
}

// igual o codigo da index.tsc -> ja que o usuario é encaminhado.
export const getServerSideProps: GetServerSideProps  = async ({ req, res }) => {

  /**
   * usado para pegar o token do usuario no auth0
   * e conseguir logar no backend
   */
  // const token = getAccessToken(req, res);
  // console.log(token);
  // return {
  //   props: {}
  // }

  const session = getSession(req, res);

  // se o usuario tentar acessar direto a url e nao estiver logado, voltara para o login
  if(!session) {
    return {
      redirect: {
        destination: '/api/auth/login',
        permanent: false
      }
    }
  }

  return {
    props: {},
  }
}

// mesmo codigo que o auth0 ja deixa pronto
// export const getServerSideProps = withPageAuthRequired(); 