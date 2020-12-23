import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 32px;
  letter-spacing: 1px;
  margin: 20px 0;
  color: white;
`;

export const Formulario = styled.div`
  margin: 20px 0;
  background-color: #15202b;
  color: #232f39;
  padding: 30px 35px;
  border-radius: 5px;
  border: 2px solid #232f39;
`;

export const ButtonPlus = styled.button`
  width: 23px;
  height: 23px;
  border: none;
  border-radius: 50%;
  background-color: #1da1f2;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;

  &:hover{
    background: ${shade(0.2, '#1da1f2')}
  }
`;

export const Button = styled.button`
  display: block;
  min-width: 120px;
  border: none;
  background-color: #1da1f2;
  color: white;
  border-radius: 25px;
  margin: auto;
  padding: 7px;

  &:hover{
    background: ${shade(0.2, '#1da1f2')}
  }
`;





