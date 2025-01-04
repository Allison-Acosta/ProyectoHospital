import { useState } from "react";
import Modal from "./Modal";

const withModal = (WrappedComponent) => {
    return function WithModalComponent(props) {

        const [isModalOpen, setIsModalOpen] = useState(false);
        const [medicoSeleccionado, setMedicoSeleccionado] = useState(null);

        const openModal = (medico) => {
            setIsModalOpen(true);
            setMedicoSeleccionado(medico);
        }
            
        const closeModal = () => setIsModalOpen(false);
        

        

        return (
            <>
                <WrappedComponent {...props} openModal={openModal} />
                {isModalOpen && (
                    <Modal onClose={closeModal}>
                        {/* Mostrar el nombre del médico seleccionado */}
                        {medicoSeleccionado && (
                            <>
                                <h2>{medicoSeleccionado.nombre}</h2>
                                <h4>Horarios:</h4>
                                <p><strong>AM:</strong> {medicoSeleccionado.horarios.AM.join(", ")}</p>
                                <p><strong>PM:</strong> {medicoSeleccionado.horarios.PM.join(", ")}</p>
                                <h4>Contacto:</h4>
                                <p><strong>Teléfono:</strong> {medicoSeleccionado.contacto.telefono}</p>
                                <p><strong>Email:</strong> <a href={`mailto:${medicoSeleccionado.contacto.mail}`}>{medicoSeleccionado.contacto.mail}</a></p>
                            </>
                        )}
                    </Modal>
                )}
            </>
        );
    };
};

export default withModal;