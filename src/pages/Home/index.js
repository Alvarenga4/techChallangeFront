import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import ImageSlider from '../../components/ImageSlider';
import { SliderData } from '../../components/ImageSlider/SliderData';
import {
  Container,
  Card,
  CardTitle,
  CardDescription,
  CardBody,
  CardBodyTitle,
  CardButton,
} from "./styles";

import api from '../../services/api';

export default function Home() {
  const [annuncements, setAnnuncements] = useState([]);
  const [annuncementCount, setAnnuncementCount] = useState('');
  const history = useHistory();

  useEffect(() => {
    getAnnuncements()
  }, [])

  async function getAnnuncements() {
    try {
      const response = await api.get('/annoucement');
      const { count, rows } = response.data.annoucement;

      setAnnuncements(rows);
      setAnnuncementCount(count);
    } catch(e) {
      console.log(e);
    }
  }

 function goToSimuation(annoucementId) {
   history.push(`/simulation/${annoucementId}`)
 }

  return (
    <>
    <Container mt={120}>
      <Grid container spacing={8}>
        {annuncements.map(annuncement => (
          <Grid item md={3} xs={12} sm={12}>
            <Card height={55} width={100} key={annuncement.id}>
              <ImageSlider width={100} height={200} slides={SliderData} />
              <CardBody>
                <CardTitle size={16}>
                  {annuncement.brand.name}
                  <CardTitle ml={5} size={16} color={'#273479'}>{annuncement.model.name}</CardTitle>
                </CardTitle>
              </CardBody>
              <CardDescription>{annuncement.version.name}</CardDescription>
              <CardBody>

                <CardBodyTitle color={'#000'} size={18}>
                  R$ {annuncement.sale_value} 
                </CardBodyTitle> 
                <Grid container spacing={10}>
                  <Grid item sm={12} md={6} xs={12}>
                    <CardDescription>Km: {annuncement.km}</CardDescription>
                  </Grid>
                  <Grid item sm={12} md={6} xs={12}>
                    <CardDescription>Km: {annuncement.km}</CardDescription>
                  </Grid>
                    
                </Grid>
                <CardBody>
                  <CardButton mt={20} onClick={() => goToSimuation(annuncement.id)} variant="contained" color="primary">
                    Mais detalhes
                  </CardButton>
                </CardBody>
              </CardBody>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    </>
  )
}