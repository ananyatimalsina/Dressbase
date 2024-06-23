import Navbar from "./components/Navbar/Navbar";
import Home from "./sections/Home/home";
import About from "./sections/About/about";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <section>
          <Home />
        </section>
        <section>
          <h1>The Plan</h1>
        </section>
        <section>
          <About />
        </section>
      </div>
    </>
  );
}

export default App;
