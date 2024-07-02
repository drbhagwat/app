import "./App.css";

import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import ShowCase from "./components/ShowCase/Showcase.tsx";
import Main from "./components/Main/Main.tsx";

function App() {
  return (
    <>
      <Header />
      <ShowCase />
      <Main />
      <Footer />
    </>
  );
}

export default App;
