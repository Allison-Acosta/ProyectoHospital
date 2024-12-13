import { useState, useEffect } from "react";
import PropertyList from "./components/PropertyList";
import ContactForm from "./components/ContactForm";

function App() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Simular una API
    setProperties([
      { id: 1, name: "Casa Moderna", location: "Ciudad A", price: 120000 },
      { id: 2, name: "Departamento", location: "Ciudad B", price: 95000 },
      { id: 3, name: "Casa de Campo", location: "Ciudad C", price: 150000 },
    ]);
  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-center">Plataforma Inmobiliaria</h1>
      <div className="row">
        <div className="col">
          <PropertyList properties={properties} />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default App;
