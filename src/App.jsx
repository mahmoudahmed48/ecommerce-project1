import "./App.css";
import Categories from "./components/Categories";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <Products />
    </div>
  );
}

export default App;
