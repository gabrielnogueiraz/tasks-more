import Head from "next/head";
import style from "./styles.module.css";

export default function Dashboard() {
  return (
    <div className={style.container}>
      <Head>
        <title>Meu painel de tarefas</title>
      </Head>

      <h1>Página de painels</h1>
    </div>
  );
}
