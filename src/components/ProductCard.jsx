
function ProductCard({ product, addToCart }) {
  return (
    <div className="col-md-4">
      <div className="card p-3 mb-3">
        <h5>{product.name}</h5>
        <p>${product.price}</p>

        <button
          className="btn btn-primary"
          onClick={() => addToCart(product)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
