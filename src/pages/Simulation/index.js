import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ReactLoading from 'react-loading';

import { formatNumber } from '../../utils/formatNumber';
import ImageSlider from '../../components/ImageSlider';
import { SliderData } from '../../components/ImageSlider/SliderData';
import {
  Card,
  CardTitle,
  CardDescription,
  CardBody,
  CardBodyTitle,
  Input,
  Container,
  CardButton
} from "./styles";


import api from '../../services/api';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));
export default function Simulation(props) {
  const [annuncement, setAnnuncements] = useState(null);
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [state, setState] = useState('');
  const [tellphone, setTellphone] = useState('');
  const [loading, setLoading] = useState(false)
  const history = useHistory();
  const classes = useStyles();

  useEffect(() => {
    getAnnuncement();
  }, [])

  async function getAnnuncement() {
    try {
      const {data} = await api.get(`/annoucement/${props.match.params.id}`);
      setAnnuncements(data);
    } catch(e) {
      console.log(e);
    }
  }

  async function makeSimulation() {
    try {
      setLoading(true)
      const { data } = await api.post(`/simulation/`, {
        email,
        cpf,
        name,
        birthday,
        tellphone,
        state
      }, {
        headers: {
          annoucement_id: props.match.params.id
        }
      });


      if (data.condition.approved) {
        setLoading(false)
        history.push(`/success/${data.simulation.id}`)
      } else {
        setLoading(false)
        history.push(`/failed`)
      }
    } catch(e) {
      console.log(e.response);
      setLoading(false)
    }
  }

 function goToHome() {
   history.push(`/`)
 }

  return (
    <>
      <ImageSlider mt={75} slides={SliderData} />
      <Container>
        <Grid container spacing={0}>
          <Grid item md={8} xs={12} sm={12}>
            <Card height={50} width={90}>
              <CardTitle color={'#000'}>
                {annuncement ? annuncement.brand?.name : 'Não informado'}
                <CardTitle ml={5} color={'#273479'}>
                {annuncement ? annuncement.model?.name : 'Não informado'}
                </CardTitle>
              </CardTitle>
              <CardDescription>
                {annuncement ? annuncement.version?.name : 'Não informado'}
              </CardDescription>
              <CardBody>
                <Grid container spacing={10}>
                  <Grid item sm={12} md={3} xs={12}>
                    <div>
                      <CardBodyTitle>Ano Modelo</CardBodyTitle>
                    </div>
                    <CardBodyTitle color={'#000'} size={18}>
                      {annuncement ? annuncement.year_model : 'Não informado'}  
                    </CardBodyTitle> 
                  </Grid>
                  <Grid item sm={12} md={3} xs={12}>
                    <div>
                      <CardBodyTitle>Ano Fabricação</CardBodyTitle>
                    </div>
                    <CardBodyTitle color={'#000'} size={18}>
                      {annuncement ? annuncement.year_manufacture : 'Não informado'}  
                    </CardBodyTitle> 
                  </Grid>
                  <Grid item sm={12} md={3} xs={12}>
                    <div>
                      <CardBodyTitle>Km</CardBodyTitle>
                    </div>
                    <CardBodyTitle color={'#000'} size={18}>
                      {annuncement ? annuncement.km : 'Não informado'}   
                    </CardBodyTitle> 
                  </Grid>
                  <Grid item sm={12} md={3} xs={12}>
                    <div>
                      <CardBodyTitle>Cor</CardBodyTitle>
                    </div>
                    <CardBodyTitle color={'#000'} size={18}>
                      {annuncement ? annuncement.color?.name : 'Não informado'}   
                    </CardBodyTitle> 
                  </Grid>
                </Grid>

                <Grid container spacing={10}>
                  <Grid item sm={12} md={3} xs={12}>
                    <div>
                      <CardBodyTitle>Combustível</CardBodyTitle>
                    </div>
                    <CardBodyTitle color={'#000'} size={18}>
                      Gasolina
                    </CardBodyTitle> 
                  </Grid>
                  <Grid item sm={12} md={3} xs={12}>
                    <div>
                      <CardBodyTitle>Final Placa</CardBodyTitle>
                    </div>
                    <CardBodyTitle color={'#000'} size={18}>
                      3
                    </CardBodyTitle> 
                  </Grid>
                  <Grid item sm={12} md={3} xs={12}>
                    <div>
                      <CardBodyTitle>Aceita Troca</CardBodyTitle>
                    </div>
                    <CardBodyTitle color={'#000'} size={18}>
                      Sim 
                    </CardBodyTitle> 
                  </Grid>
                  <Grid item sm={12} md={3} xs={12}>
                    <div>
                      <CardBodyTitle>Câmbio</CardBodyTitle>
                    </div>
                    <CardBodyTitle color={'#000'} size={18}>
                      Manual   
                    </CardBodyTitle> 
                  </Grid>
                </Grid>
                <br />
                <hr />

                <CardDescription mt={20} size={16}>Descrição</CardDescription>
                <CardDescription mt={20} size={16} color={'#000'}>
                  {annuncement ? annuncement.description : 'Não informado'}
                </CardDescription>
              </CardBody>
            </Card>
            <Card mt={80} height={20} width={90} >
              <CardBody>
                <CardDescription mt={30} size={16}>Descrição</CardDescription>
                <CardDescription mt={20} size={16} color={'#000'}>
                  {annuncement ? annuncement.description : 'Não informado'}
                </CardDescription>
              </CardBody>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} sm={12}>
            <Card mt={80} height={80} width={90}>
              <CardBody>
                <CardTitle size={36}>
                  {annuncement ? formatNumber(annuncement.sale_value) : 'Não informado'}
                </CardTitle>
                <CardDescription mt={20} size={16} color={'#a1a1a1'}>
                  Faça sua analíse de financiamento
                </CardDescription>
                <Input 
                  placeholder="Nome Completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Input 
                  placeholder="CPF"
                  mask="999.999.999-99"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                />
                <Input 
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input 
                  placeholder="Whatsapp"
                  mask="(99) 99999-9999"
                  value={tellphone}
                  onChange={(e) => setTellphone(e.target.value)}
                />
                <Input 
                  placeholder="Aniversário"
                  mask="99/99/9999"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                />
                <CardBody>
                  {loading ? (
                  <ReactLoading type="bars" color={'#273479'} height={100} width={100} />
                  ) : (
                    <CardButton onClick={makeSimulation} mt={20} variant="contained" color="primary">
                      Realizar simulação
                    </CardButton>
                  )}
                </CardBody>
              </CardBody>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}