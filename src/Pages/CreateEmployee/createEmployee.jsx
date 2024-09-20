import { useState } from "react";
import Form from "../../Components/Form/form";
import { Title } from "./CreateEmployee.styled";
import Modale from 'react-aline-modal';
import 'react-aline-modal/dist/Modale.css'

function CreateEmployee() {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <Title
        style={{
          fontSize: "2rem",
          color: "#2C3E50",
          fontFamily: "Lora",
          marginBottom: "1.5rem",
        }}
      >
        Create Employee
      </Title>
      <Form setShowModal={setShowModal} />

      <Modale open={showModal} onClose={handleCloseModal} />
    </>
  );
}
export default CreateEmployee;
