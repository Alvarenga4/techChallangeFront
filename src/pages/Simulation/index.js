import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ImageSlider from '../../components/ImageSlider';
import { SliderData } from '../../components/SliderData';
import {
  Container,
  HeaderSession,
  Image
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
export default function Simulation() {
  const [annuncement, setAnnuncements] = useState({});
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [state, setState] = useState('');
  const history = useHistory();
  const classes = useStyles();

  useEffect(() => {
    getAnnuncement();
  }, [])

  async function getAnnuncement() {
    try {
      const {data} = await api.get('/annoucement/1');
      console.log(data)
      setAnnuncements(data);
    } catch(e) {
      console.log(e);
    }
  }

 function goToHome() {
   history.push(`/`)
 }

  return (
    <>
      <ImageSlider slides={SliderData} />
    </>
  )
}