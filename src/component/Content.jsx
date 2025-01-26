import React from 'react';
import { Card, Row, Col } from 'antd';
import { foodsAndDescs } from '../constants/foodsAndDesc';
import ThreeDScene from '../component/ThreeDScene';
import * as THREE from "three";

const renderDetail = (item, i) => {
    const renderer = new THREE.WebGLRenderer({ alpha: true });
  return (
    <Card key={i} id={item.label && `#${item.label}`} className='container-card' title={item.title}>
      <Row style={{ flexDirection: item.isReverse && 'row-reverse' }} gutter={[24, 24]}>
        <Col span={14}>{item.desc}</Col>
        <Col span={9} style={{ background: '#9ad284' }}>
          <ThreeDScene modelName={item.modelName} key2={i} renderer={renderer} />
        </Col>
      </Row>
    </Card>
  );
};

export const CustomContent = () => {
  return (
    <>
      <Col className='full-width'>
        {foodsAndDescs.map((item, i) => {
          return renderDetail(item, i);
        })}
      </Col>
    </>
  );
};
