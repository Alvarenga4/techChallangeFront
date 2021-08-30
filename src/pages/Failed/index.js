import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Label, SubLabel } from './styles';

function Failed(props) {
  const history = useHistory();

  useEffect(() => {
    getSimulation();
  }, []);

  const getSimulation = async () => {
    try {
      setTimeout(() => history.push('/'), 5000)
    } catch(error) {
      console.log(error);
    }

  }

  return (
    <Container>

      <Label>
        Infelizmente não foi possível aprovar um finacimento para você!
      </Label>

      <br />

      <SubLabel>
       Mas não se preocupe, entraremos em contato com mais detalhes!
      </SubLabel>

      <br />
      <p>Você será redirecionado para página principal em 5 segundos</p>
    </Container>
  )
}

export default Failed;