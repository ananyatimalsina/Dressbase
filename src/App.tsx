import Navbar from "./components/Navbar/navbar";
import Home from "./sections/home";

function App() {
  return (
    <div className="container">
      <Navbar />
      <section>
        <Home />
      </section>
      <section>
        <h1>The Plan</h1>
      </section>
      <section>
        <h1>Über uns</h1>
      </section>
    </div>
  );
}

export default App;
