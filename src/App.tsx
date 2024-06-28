import styles from "./App.module.css";

import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import ShowCase from "./components/ShowCase/Showcase.tsx";

function App() {
  return (
    <>
      <Header />
      <ShowCase />
      <div className={styles.container}>
        <section id="main">
          <h1>Welcome</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus beatae similique excepturi velit, consequatur magni
            tenetur, aliquam, ipsa eveniet nam tempore minima repudiandae. Ipsa
            odit maiores nihil tenetur nulla suscipit?
          </p>
        </section>

        <aside id="sidebar">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus beatae similique excepturi velit, consequatur magni
            tenetur
          </p>
        </aside>
      </div>
      <Footer />
    </>
  );
}

export default App;
