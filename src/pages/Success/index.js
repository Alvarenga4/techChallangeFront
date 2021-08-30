import React, {useState, useEffect} from 'react';
import Lottie from 'react-lottie';
import { useHistory } from 'react-router-dom';

import success from '../../assets/success.json';
import api from '../../services/api';

import { Container, Label, SubLabel } from './styles';

function Success(props) {
  const [simulation, setSimulation] = useState(null);
  const [count, setCount] = useState(5);
  const history = useHistory();

  useEffect(() => {
    getSimulation();
  }, []);

  const getSimulation = async () => {
    try {
      const { data } = await api.get(`/simulation/${props.match.params.id}`);
      console.log(data);
      if (data) {
        setSimulation(data);
        setTimeout(() => history.push('/'), 5000)
      }
    } catch(error) {
      console.log(error);
    }

  }
  const defaultOptions = {
    loop: false,
    autoplay: true, 
    animationData: success,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <Container>
      <Lottie options={defaultOptions}
        height={400}
        width={400}
      />

      <Label>
        Parabéns, seu finacimento foi aprovado com {simulation ? simulation.prohibited : '0'}%
        de entrada.
      </Label>

      <br />

      <SubLabel>
       Não se preocupe, entraremos em contato com mais detalhes!
      </SubLabel>

      <br />
      <p>Você será redirecionado para página principal em 5 segundos</p>
    </Container>
  )
}

export default Success;