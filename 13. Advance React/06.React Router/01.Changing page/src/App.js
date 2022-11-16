import "./styles.css";
import React from "react";
import Home from "./Home";
import Product from "./Product";
export default function App() {
  const [page, setPage] = React.useState("");

  function ChangePage(event) {
    setPage(event.target.value);
  }
  return (
    <div className="App">
      <button onClick={ChangePage} value="home">
        Home
      </button>
      <button onClick={ChangePage} value="product">
        Product
      </button>

      <h5>Enter button to go to page</h5>

      {page === "product" ? <Product /> : <Home />}
    </div>
  );
}
