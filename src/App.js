import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeroBanner from "./Components/HeroBanner";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header shadow-2xl fixed w-full z-50 bg-white">
        <Header />
      </header>

      <div id="banner" className="relative pt-[180px]">
        <HeroBanner />
      </div>
      {/* end */}

      {/* pages */}
      <div>
        <Home />
      </div>

      {/* for banner */}

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
