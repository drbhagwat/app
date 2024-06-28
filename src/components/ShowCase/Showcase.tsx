import styles from "./Showcase.module.css";

const ShowCase = () => {
  return (
    <>
      <section id={styles.showcase}>
        <div className={styles.container}>
          <h1>
            Sign up, take our randomized online test in the area of your
            interest, get instant result, and fluant your achievement to the
            Whole World!
          </h1>
        </div>
      </section>
    </>
  );
};

export default ShowCase;
