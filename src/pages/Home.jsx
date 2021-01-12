import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Typography } from 'antd';
import '../assets/styles/pages/Home.css';

const { Title } = Typography;
const { Grid } = Card;
const gridStyle = {
  width: '50%',
  textAlign: 'center',
};

const Home = () => (
  <div className='home__container'>
    <Title level={2}>Documentacion de Caprady Code</Title>
    <Card title='Modulos'>
      <Grid style={gridStyle}>
        <Link to='GetStarted'>
          <Card title='Para comenzar'>Mira una introduccion al lenguaje</Card>
        </Link>
      </Grid>
      <Grid style={gridStyle}>
        <Link to='Tutorials'>
          <Card title='Tutoriales'>Ejemplos de código de programas sencillos</Card>
        </Link>
      </Grid>
      <Grid style={gridStyle}>
        <Link to='LanguajesReferences'>
          <Card title='Referencias de otros lenguajes'>Mira las inspiraciones del lenguaje</Card>
        </Link>
      </Grid>
      <Grid style={gridStyle}>
        <Link to='About'>
          <Card title='Acerca de'>Aprende sobre el creador y el propósito del lenguaje</Card>
        </Link>
      </Grid>
    </Card>
  </div>
);

export default Home;
