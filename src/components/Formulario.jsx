
import { useState } from "react";

function Formulario() {
  const [form, setForm] = useState({
    nombre: "",
    correo: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulario enviado");
  };

  return (
    <div className="card p-4">
      <h2>Formulario</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Correo</label>
          <input
            type="email"
            className="form-control"
            name="correo"
            onChange={handleChange}
          />
        </div>

        <button className="btn btn-success">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default Formulario;
