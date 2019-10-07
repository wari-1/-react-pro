import React from "react";
import ProductsListContainer from "./components/ProductsListContainer";
import CartContainer from "./components/CartContainer";

function App() {
  return (
    <div className="App">
      <ProductsListContainer />
      <hr />
      <br />
      <CartContainer />
    </div>
  );
}
export default App;
