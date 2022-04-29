import { getSession, useUser, getAccessToken } from '@auth0/nextjs-auth0';
import { GetServerSideProps } from "next";

export default function Home() {
  return null
  // const { user } = useUser()

  // return (
  //   <div>
  //     <pre>
  //       {JSON.stringify(user, null, 2)}
  //     </pre>
  //   </div>
  // )
}

export const getServerSideProps: GetServerSideProps  = async ({ req, res }) => {

    // const token = getAccessToken(req, res);
    // console.log(token);

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
          destination: '/app',
          permanent: false
        }
      }
    }

    // return {
    //   props: {}
    // }
}