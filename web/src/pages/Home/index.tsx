import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import Input from '../../components/Input';
import Time from '../../components/Time';

import { Container, Title, Formulario, ButtonPlus, Button } from './styles';

const Home: React.FC = () => {
  const [options, setOptions] = useState([{name: "Opção" }]);

  const [stack, setStack ] = useState(1) 
  function newOption() {
    setOptions([
      ...options, {name: "Opção"}
     
    ])
    setStack(stack + 1)
  }

  function upDate(positon: number, value: string) {
    const optionUpdate = options.map((option, index) => {
      if(index === positon){
        return{
          name : value
        }
      }else{
        return option;
      }
    })
      setOptions(optionUpdate)
      console.log(options)
  }

  return(
    <>
      <Container>
        <Title>Cadastre uma nova enquete:</Title>

        <Formulario>
         
          <Input name="Title" placeholder="Titulo da enquete" />
          { options.map((option, index) => {
            return(
              <Input name={option.name} placeholder={`Opcao${index + 1}`} onChange={(event) => {
                upDate(index, event.target.value)
              }}/>
            )
          })}
      
        
          <ButtonPlus onClick={newOption} disabled={stack === 4}>
            <FiPlus  />
          </ButtonPlus>

          <Time />

          <Button>Cadastrar</Button>

        </Formulario>
      </Container>
    </>
  )
}

export default Home;