import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
  };

  return (
    <div className="card mt-5">
      <div className="card-body">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Tu correo"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
          <textarea
            name="message"
            rows="4"
            placeholder="Tu mensaje"
            className="form-control"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          </div>


          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;