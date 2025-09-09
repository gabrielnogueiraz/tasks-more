import { useRouter } from "next/router";
import Head from "next/head";
import styles from "./styles.module.css";

export default function AuthError() {
  const router = useRouter();
  const { error } = router.query;

  const getErrorMessage = (error: string | string[] | undefined) => {
    switch (error) {
      case "Configuration":
        return "Há um problema com a configuração do servidor.";
      case "AccessDenied":
        return "Você não tem permissão para fazer login.";
      case "Verification":
        return "O token de verificação expirou ou já foi usado.";
      case "OAuthSignin":
        return "Erro ao iniciar o processo de login.";
      case "OAuthCallback":
        return "Erro no callback do OAuth.";
      case "OAuthCreateAccount":
        return "Não foi possível criar a conta OAuth.";
      case "EmailCreateAccount":
        return "Não foi possível criar a conta de email.";
      case "Callback":
        return "Erro no callback de autenticação.";
      case "OAuthAccountNotLinked":
        return "Email já está sendo usado por outra conta.";
      case "EmailSignin":
        return "Erro ao enviar email de login.";
      case "CredentialsSignin":
        return "Falha na autenticação com as credenciais fornecidas.";
      case "SessionRequired":
        return "Você precisa estar logado para acessar esta página.";
      default:
        return "Ocorreu um erro inesperado durante o login.";
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Erro de Login - Tasks More</title>
      </Head>
      
      <main className={styles.main}>
        <h1>Erro de Autenticação</h1>
        <div className={styles.errorMessage}>
          <p>{getErrorMessage(error)}</p>
        </div>
        
        <div className={styles.actions}>
          <button 
            className={styles.retryButton}
            onClick={() => router.push('/auth/signin')}
          >
            Tentar Novamente
          </button>
          <button 
            className={styles.homeButton}
            onClick={() => router.push('/')}
          >
            Voltar ao Início
          </button>
        </div>
      </main>
    </div>
  );
}
