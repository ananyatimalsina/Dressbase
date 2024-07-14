import Navbar from "./components/Navbar/Navbar";
import Home from "./sections/Home/home";
import About from "./sections/About/about";
import Plan from "./sections/Plan/plan";

function App() {
  return (
    <>
      <Navbar />
      <div className="container" id="home">
        <section>
          <Home />
        </section>
        <section>
          <Plan />
        </section>
        <section id="about">
          <About />
        </section>
      </div>
    </>
  );
}

export default App;
