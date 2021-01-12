import React from 'react';
import { Typography, Divider, Card, Col, Row } from 'antd';
import { factorialCapradyCode, factorialJava, comparacionCapradyCode, comparacionJava, sumatoriaCapradyCode, sumatoriaJava } from '../assets/static/Programas';
import '../assets/styles/pages/Tutorials.css';

const { Title, Paragraph } = Typography;

const paragraphStyle = {
  fontSize: '18px',
};

const Tutorials = () => (
  <div className='tutorials__container'>
    <Title level={2}>Programas en Caprady Code</Title>
    <Paragraph style={paragraphStyle}>
      En este apartado, veremos algunas implementaciones de programas sencillos hechos en el lenguaje Caprady Code y
      por cada ejemplo veremos su implementación equivalente en java.
    </Paragraph>
    <Divider>Ejemplos</Divider>
    <Row gutter={16}>
      <Col span={12}>
        <Card title='Factorial en CapradyCode' bordered={true}>
          <pre className='language-java'>
            {factorialCapradyCode}
          </pre>
        </Card>
      </Col>
      <Col span={12}>
        <Card title='Factorial en Java' bordered={true}>
          <pre className='language-java'>
            {factorialJava}
          </pre>
        </Card>
      </Col>
    </Row>
    <Row gutter={16}>
      <Col span={12}>
        <Card title='Comparacion en CapradyCode' bordered={true}>
          <pre className='language-java'>
            {comparacionCapradyCode}
          </pre>
        </Card>
      </Col>
      <Col span={12}>
        <Card title='Comparacion en Java' bordered={true}>
          <pre className='language-java'>
            {comparacionJava}
          </pre>
        </Card>
      </Col>
    </Row>
    <Row gutter={16}>
      <Col span={12}>
        <Card title='Sumatoria en CapradyCode' bordered={true}>
          <pre className='language-java'>
            {sumatoriaCapradyCode}
          </pre>
        </Card>
      </Col>
      <Col span={12}>
        <Card title='Sumatoria en Java' bordered={true}>
          <pre className='language-java'>
            {sumatoriaJava}
          </pre>
        </Card>
      </Col>
    </Row>
  </div>
);

export default Tutorials;
