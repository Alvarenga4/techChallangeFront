import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Row,
  Col,
  CardWrapper,
  CardHeader,
  CardPrice,
  CardInfo,
  CardImageHeader,
  CardHeading,
  CardBody,
  CardFieldset,
  CardLabelHeading,
  CardKmInfo,
  CardButton,
} from "./styled";

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
    {annuncements.map(annuncement => (
      <CardWrapper key={annuncement.id}>
        <CardHeader>
          <CardImageHeader src="https://i.stack.imgur.com/6M513.png" />
          <CardHeading>{annuncement.brand.name} {annuncement.model.name}</CardHeading>
          <CardLabelHeading>{annuncement.version.name}</CardLabelHeading>
        </CardHeader>

        <CardBody>
    
          <CardInfo>
            <CardPrice>R$ {annuncement.sale_value}</CardPrice>
            <Row>
              <Col>
                <CardKmInfo>Km: {annuncement.km}</CardKmInfo>
              </Col>
              <Col>
                <CardKmInfo>Km: {annuncement.km}</CardKmInfo>
              </Col>
            </Row>
          </CardInfo>

          <CardFieldset>
            <CardButton onClick={() => goToSimuation(annuncement.id)} type="button">Fazer uma simulação</CardButton>
          </CardFieldset>
        </CardBody>
      </CardWrapper>
    ))}
    </>
  )
}