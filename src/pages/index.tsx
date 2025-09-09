import styles from "../../styles/Home.module.css";
import heroImg from "../../public/assets/hero.png";
import Image from "next/image";
import { StatsCounter } from "../components/StatsCounter";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.logoContent}>
          <Image
            className={styles.hero}
            src={heroImg}
            alt="Tasks logo"
            priority
          />
        </div>
        <h1 className={styles.title}>
          Sistema feito para você organizar <br />
          seus estudos e tarefas!
        </h1>

        <StatsCounter className={styles.infoContent} />
      </main>
    </div>
  );
}
