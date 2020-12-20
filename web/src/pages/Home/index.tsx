import React from 'react';
import { FiPlus } from 'react-icons/fi';
import Input from '../../components/Input';

import { Container, Title, Formulario, ButtonPlus, Button } from './styles';

const Home: React.FC = () => {
  return(
    <>
      <Container>
        <Title>Cadastre uma nova enquete:</Title>

        <Formulario>
         
          <Input name="Title" placeholder="Title da enquete" />
          
          <Input name="Opção" placeholder="Opção 01" />
          <Input name="Opção" placeholder="Opção 02" />
          <Input name="Opção" placeholder="Opção 03" />
         

          <ButtonPlus>
            <FiPlus />
          </ButtonPlus>

          <Button>Cadastrar</Button>
        </Formulario>
      </Container>
    </>
  )
}

export default Home;