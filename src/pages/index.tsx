import styles from "../../styles/home.module.css";
import heroImg from "../../public/assets/hero.png";
import Image from "next/image";

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

        <div className={styles.infoContent}>
          <section className={styles.box}>
            <span>+12 posts</span>
          </section>
          <section className={styles.box}>
            <span>+90 comentários</span>
          </section>
        </div>
      </main>
    </div>
  );
}
