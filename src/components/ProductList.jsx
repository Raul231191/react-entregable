
import { useState } from "react";
import ProductCard from "./ProductCard";

function ProductList() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Notebook", price: 500000 },
    { id: 2, name: "Mouse", price: 15000 },
    { id: 3, name: "Teclado", price: 25000 }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h2>Lista de Productos</h2>

      <div className="row">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>

      <div className="mt-4">
        <h4>Carrito</h4>
        <ul className="list-group">
          {cart.map((item, index) => (
            <li key={index} className="list-group-item">
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductList;
