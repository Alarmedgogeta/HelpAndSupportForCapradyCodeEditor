import React from 'react';
import { Typography, Divider } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import MenuDisplayer from '../components/MenuDisplayer';
import '../assets/styles/pages/GetStarted.css';

const { Title, Paragraph } = Typography;

const paragraphStyle = {
  fontSize: '18px',
};

const GetStarted = () => (
  <div className='getstarted__container'>
    <Title level={2}>Introducción al lenguaje Caprady Code</Title>
    <Paragraph style={paragraphStyle}>
      Este lenguaje fue desarrollado para funcionar en el editor de código CapradyCodeEditor, dicho editor fue desarrollado en el ambiente de java.
      En su mayoria, el lenguaje está definido en español (salvo unas cuantas excepciones), lo cual lo hace accesible y recomendable para usuarios
      hispanohablantes que tengan deseo de aprender las bases de programación.
    </Paragraph>
    <Paragraph style={paragraphStyle}>
      Caprady Code cuenta con los operadores lógicos y matemáticos basicos, asi mismo cuenta con sentencias de declaración, asignación, eleccion y
      ciclos que te permitirán desarrollar programas básicos que te ayudarán a entender las bases de la programación.
    </Paragraph>
    <Divider />
    <Title level={2}>Caprady Code Editor</Title>
    <Paragraph style={paragraphStyle}>
      El lenguaje Caprady Code cuenta con su propio editor que viene preparado con los analizadores léxicos y sintácticos con el propósito de ofrecer
      al usuario retroalimentacion de como percibe un compilador el código que generó.
      <br />
      El editor funciona generando y leyendo archivos con extensión .txt lo cual lo hace amigable con los usuarios.
    </Paragraph>
    <Title level={3}>Atajos del teclado</Title>
    <Paragraph style={paragraphStyle}>
      El editor de código del lenguaje pone a disposición del usuario una serie de atajos del teclado para facilidar y optimizar el uso de sus funciones
      a los usuarios, a continuación se listan los atajos del teclado disponibles:
    </Paragraph>
    <Divider />
    <MenuDisplayer isShortCuts />
  </div>
);

export default GetStarted;
