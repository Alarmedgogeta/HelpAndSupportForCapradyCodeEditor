import React from 'react';
import { Card, Typography } from 'antd';
import me from '../assets/static/yo.jpg';
import '../assets/styles/pages/About.css';

//const { Meta } = Card;

const { Title, Paragraph } = Typography;

const paragraphStyle = {
  fontSize: '18px',
};

const About = () => (
  <div className='about__container'>
    <div className='about__container--me'>
      <Card
        hoverable
        style={{ width: '28vw' }}
        cover={<img alt='Alan Diaz Yañez' src={me} />}
        title='Alan Diaz Yañez'
      >
        <Paragraph style={paragraphStyle}>
          Estudiante de séptimo semestre de la carrera Ingenieria en sistemas
          computacionales en la Universidad del Valle de México,
          desarrollador php, react js y jugador profesional de halo.
        </Paragraph>
      </Card>
    </div>
    <div className='about_container--subject'>
      <Title level={2}>Traductores</Title>
      <Paragraph style={paragraphStyle}>
        Este lenguaje fue desarrollado por el estudiante Alan Diaz Yañez para la materia
        de traductores impartida por el maestro Armando Cruz Cruz
        en la Universidad del Valle de México Campus Villahermosa.
      </Paragraph>
      <Paragraph style={{ ...paragraphStyle, marginBottom: 0 }}>
        Este proyecto ha significado mucho esfuerzo y dedicación para mi, por eso va dedicado a alguien muy especial.
      </Paragraph>
    </div>
  </div>
);

export default About;
