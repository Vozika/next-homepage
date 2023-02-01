import React from "react";
import styles from "../../styles/About.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <div className={styles.hero}>
        <div className={styles.image_container}>
          <Image
            src="../images/about/budka_24.jpg"
            alt="Logo"
            // fill={true}
            width={500}
            height={500}
            className={styles.image}
            //   sizes="(max-width: 800px) 100vw,
            // (max-width: 1200px) 25vw,
            // 33vw"
            priority
          />
          <div className={styles.line}></div>
        </div>

        <div className={styles.image_container}>
          <Image
            src="../images/about/budka_6.jpg"
            alt="Logo"
            // fill={true}
            width={500}
            height={500}
            className={styles.image}
            //   sizes="(max-width: 800px) 100vw,
            // (max-width: 1200px) 25vw,
            // 33vw"
            priority
          />
          <div className={styles.line}></div>
        </div>

        <div className={styles.image_container}>
          <Image
            src="../images/about/budka_0.jpg"
            alt="Logo"
            // fill={true}
            width={500}
            height={500}
            className={styles.image}
            //   sizes="(max-width: 800px) 100vw,
            // (max-width: 1200px) 25vw,
            // 33vw"
            priority
          />
          <div className={styles.line}></div>
        </div>
      </div>

      <br />
      <br />

      <h1>День добрый, дамы и господа. И другие</h1>
      <br />

      <p>
        Полагаю, что уже можно не представляться. Мои имя и фамилия написаны
        наверху страницы, так что их вы уже знаете. Позвольте к этой важной
        информации добавить ещё пару интересных фактов о себе.
        <br />
        <br />
      </p>
      <p>
        Я — графический дизайнер и веб-разработчик. Сначала первое, потом
        второе. Общий опыт работы в обеих областях у меня больше 20-и лет, хотя
        первое заняло значительно больше времени. Данный сайт является моим
        портфолио. В нём собраны мои лучшие и наиболее характерные работы, по
        которым можно составить представление о моём профессиональном уровне.
        <br />
        <br />
      </p>

      <div className={styles.text_accent}>
        <h2>Технологии, которые я использую в веб-разработке</h2>
        <p>
          HTML, CSS, Javascript, SASS, Bootstrap, React, Typescript, Next.js
        </p>
      </div>
      <br />

      <p>
        Имею большой опыт работы с
        Joomla, особенно в сфере создания интернет-магазинов. В меньшей степени
        знаком с Wordpress. Но знаком. Если вас что-то интересует дополнительно,
        напишите мне письмо. Адрес моей электронной почты metasoma@yandex.ru
      </p>

<br />

      <div className={styles.text_accent}>
        <h2>Графические редакторы, которыми я владею</h2>
        <p>
          Adobe Illustrator, Corel Draw, Adobe Photoshop, Adobe InDesign
        </p>
      </div>

    </div>
  );
};

export default About;
