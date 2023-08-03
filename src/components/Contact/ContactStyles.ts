import styled from 'styled-components';

export const ContactContainer = styled.div`
  background-color: #f5f5f5;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ContactLabel = styled.label`
  font-size: 16px;
  color: #333;
`;

export const ContactInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
`;

export const ContactMessage = styled.textarea`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
`;

export const ContactButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
`;
