import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.container}>
      <section id={styles.main}>
        <h1>Welcome</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus beatae similique excepturi velit, consequatur magni
          tenetur, aliquam, ipsa eveniet nam tempore minima repudiandae. Ipsa
          odit maiores nihil tenetur nulla suscipit?
        </p>
      </section>

      <aside id={styles.sidebar}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus beatae similique excepturi velit, consequatur magni
          tenetur
        </p>
      </aside>
    </div>
  );
};

export default Main;
