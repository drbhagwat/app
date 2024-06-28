import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header id={styles.mainHeader}>
        <div className={styles.container}>
          <h1>Welcome to the TestGenius</h1>
        </div>
      </header>

      <nav id={styles.navbar}>
        <div className={styles.container}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Register (new)</a>
            </li>
            <li>
              <a href="#">Login (member)</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
