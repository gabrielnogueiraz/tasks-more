import { getProviders, signIn, getSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import styles from "./styles.module.css";

interface SignInProps {
  providers: any;
}

export default function SignIn({ providers }: SignInProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Entrar - Tasks More</title>
      </Head>
      
      <main className={styles.main}>
        <h1>Entrar na sua conta</h1>
        <p>Faça login para acessar suas tarefas</p>
        
        {Object.values(providers).map((provider: any) => (
          <div key={provider.name}>
            <button
              className={styles.googleButton}
              onClick={() => signIn(provider.id, { callbackUrl: '/dashboard' })}
            >
              Entrar com {provider.name}
            </button>
          </div>
        ))}
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  
  if (session) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
    };
  }

  const providers = await getProviders();
  
  return {
    props: {
      providers,
    },
  };
};
