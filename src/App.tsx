import Navbar from "./components/Navbar/Navbar";
import Home from "./sections/Home/home";
import About from "./sections/About/about";
import Plan from "./sections/Plan/plan";

function App() {
  return (
    <>
      <Navbar />
      <div className="container" id="home">
        <section style={{ marginBottom: "10rem" }}>
          <Home />
        </section>
        <section id="plan">
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
