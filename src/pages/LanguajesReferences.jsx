import React from 'react';
import { Typography, Divider } from 'antd';
import MenuDisplayer from '../components/MenuDisplayer';
import '../assets/styles/pages/LanguajesReferences.css';

const { Title, Paragraph } = Typography;

const paragraphStyle = {
  fontSize: '18px',
};

const LanguajesReferences = () => (
  <div className='lenguaje__container'>
    <Title level={2}>Palabras reservadas</Title>
    <Paragraph style={paragraphStyle}>
      Al igual que cualquier otro lenguaje, CapradyCode cuenta con su conjunto de palabras reservadas que proveen
      al usuario de funciones concretas para programar, a continuacioon podrán ver una lista con todas ellas.
    </Paragraph>
    <Divider />
    <MenuDisplayer isReservedWords />
  </div>
);

export default LanguajesReferences;
