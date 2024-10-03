import { useState } from "react";
import { Title, Container } from "./CreateEmployee.styled";
import Modal from "react-aline-modal";
import "react-aline-modal/dist/Modal.css";
import Formulaire from "../../Components/Form/form";

function CreateEmployee() {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <Container>

        <Title>Create Employee</Title>
        <Formulaire setShowModal={setShowModal}  />
        <Modal open={showModal} onClose={handleCloseModal} title ="Create Employee" textContent ="Employee Created !" />

      </Container>
    </>
  );
}
export default CreateEmployee;
