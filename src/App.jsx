
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import Formulario from "./components/Formulario";

function App() {
  return (
    <BrowserRouter>
      <div className="container mt-4">
        <nav className="mb-4">
          <Link className="btn btn-primary me-2" to="/">Productos</Link>
          <Link className="btn btn-success" to="/formulario">Formulario</Link>
        </nav>

        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/formulario" element={<Formulario />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
