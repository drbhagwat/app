import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.container}>
      <section id={styles.main}>
        <h1>Test Genius</h1>
        <p>
          It tests the genius in you. We do have decades of experience as
          engineers, computer scientists, and above all educators. This is our
          dream product. We have put in a lot of effort in creating this. We
          hope you will sign-up, subscribe, and take randomized online tests in
          the areas of your interest. We sincerely hope you enjoy exploring
          different facets of our product, as much as we did, in creating it.
        </p>
      </section>

      <aside id={styles.sidebar}>
        <p>
          We are open to you, our cusotmers! Let us know if we have not covered
          your area of interest, or how we could interview. We promise we will
          take a hard look at your feedback and include in our next version if
          it is a win-win. Shoot an email to us at dinesh.bhagwat@gmail.com
        </p>
      </aside>
    </div>
  );
};

export default Main;
