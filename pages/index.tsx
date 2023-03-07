import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const variants = {
  initial: { opacity: 0, scale: 0, x: "100vw" },
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: .7,
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const firstLine = "Веб-разработчик";
  const secondLine = "Дизайнер";
  const thirdLine = "Иллюстратор";

  function arrayFromLine(line: string) {
    return line.split("");
  }

  return (
    <>
      <Head>
        <title>Сергей Возыка - веб-разработчик, дизайнер, иллюстратор</title>
        <meta
          name="description"
          content="Сайт-портфолио Сергея Возыки, веб-разработчика, дизайнера, иллюстратора. Здесь можно посмотреть его графические и прочие работы, а также ряд сайтов и приложений, которые он сделал."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <motion.div
          className={styles.hero}
          variants={variants}
          initial="initial"
          animate="animate"
        >
          {arrayFromLine(firstLine).map((character) => {
            return (
              <motion.div className={styles.first_line} variants={variants}>
                <motion.p
                  whileHover={{ scale: 0.8, rotate: 90, }}
                  whileTap={{
                    rotateY: 270,
                    scaleY: 2,
                    scale: 0.8,
                    y: 50,
                  }}
                >
                  {character}
                </motion.p>
              </motion.div>
            );
          })}
          <br />
          {arrayFromLine(secondLine).map((character) => {
            return (
              <motion.div className={styles.second_line} variants={variants}>
                <motion.p
                  whileHover={{ scale: 1.2, rotate: -90 }}
                  whileTap={{
                    width: "20vw",
                  }}
                >
                  {character}
                </motion.p>
              </motion.div>
            );
          })}
          <br />
          {arrayFromLine(thirdLine).map((character) => {
            return (
              <motion.div className={styles.third_line} variants={variants}>
                <motion.p
                  whileHover={{ scale: 1.7, y: 10, x: 20, rotateY: 180 }}
                  whileTap={{
                    rotateZ: 270,
                    scaleX: 2,
                    scale: 2,
                  }}
                >
                  {character}
                </motion.p>
              </motion.div>
            );
          })}

          <motion.div variants={variants}>
            <motion.div
              className={styles.forth_line}
              whileHover={{
                color: "rgb(var(--light-rgb))",
                backgroundColor: "rgb(var(--primary-rgb))",
              }}
            >
              <Link href={"about"}>и другое</Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className={styles.line}></div>
      </main>
    </>
  );
}
