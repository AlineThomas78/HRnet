import { Form, Row } from 'react-bootstrap';
import styled from 'styled-components';


export const SubTitle = styled.h2`
  text-align: center;
  font-size: 1.8rem;
  color: #636e72;
  margin-bottom: 2rem;
  letter-spacing: 0.5px;
  font-weight: 400;
`;

export const StyledRow = styled(Row)`
  width: 80%;
  margin: 0 auto; 
`;

export const StyledFormGroup = styled(Form.Group)`
  width: 80%;         
  margin: 0 auto;    
`;

export const StyledLabel = styled(Form.Label)`
  text-align: left;
  padding-left:10px;
  display: block;  
`;

export const Button = styled.button`
  // background-image: linear-gradient(to right, #DAD299 0%, #B0DAB9 51%, #DAD299 100%);
  // background-size: 200% auto;
  // color: black;
  // padding: 10px 20px;
  // border: 2px solid black;
  // border-radius:10px;
  // cursor: pointer;
  // transition: 0.5s;
  
  background-image: linear-gradient(to right, #B0DAB9, #DAD299);
  padding: 0.75rem 1.5rem;
  border-radius: 20px;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  color: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    background-position: right center; /* Effet de transition */
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

// Conteneur du formulaire avec deux colonnes
export const FormContainer = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 2rem;
  max-width: 800px;
  margin: 2rem auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

// export const Title = styled.h1`
//   text-align: center;
//   font-size: 2.5rem;
//   color: #2d3436;
//   margin-bottom: 1.5rem;
// `;



export const SectionTitle = styled.h3`
  font-size: 1.5rem;
  color: #2d3436;
  margin-top: 2rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #dfe6e9;
  padding-bottom: 0.5rem;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  display: block;
  color: #2d3436;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #dfe6e9;
  border-radius: 8px;
  font-size: 1rem;
  margin-bottom: 1rem;
  transition: border 0.3s;

  &:focus {
    border-color: #74b9ff;
    box-shadow: 0 0 8px rgba(116, 185, 255, 0.2);
    outline: none;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #dfe6e9;
  border-radius: 8px;
  font-size: 1rem;
  margin-bottom: 1rem;

  &:focus {
    border-color: #74b9ff;
    box-shadow: 0 0 8px rgba(116, 185, 255, 0.2);
    outline: none;
  }
`;

export const AddressSection = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #b2bec3;
`;

