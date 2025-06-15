import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  max-width: 90rem;
  margin: 0 auto;
  padding: 2rem;
`;

export const TopRightButtonContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export const Input = styled.input`
  background-color: #15171a;
  color: #eee;
  border: none;
  border-radius: 0.8rem;
  padding: 1.2rem 1.6rem;
  font-size: 5.2rem;
  font-weight: 600;
  outline-offset: 0.2rem;
  font-weight: 800;
  &::placeholder {
    color: #555;
    font-weight: 900;
  }

  &:focus {
    outline: 0rem solid #4ade80;
    background-color: #15171a;
  }
`;

export const TextArea = styled.textarea`
  background-color: #15171a;
  color: #eee;
  border: none;
  border-radius: 0.8rem;
  padding: 1.6rem 1.6rem;
  font-size: 2.1rem;
  font-weight: 400;
  min-height: 30rem;
  resize: vertical;
  outline-offset: 0.2rem;

  &::placeholder {
    color: #555;
    font-weight: 400;
  }

  &:focus {
    outline: 0px solid #4ade80;
    background-color: #15171a;
  }
`;
