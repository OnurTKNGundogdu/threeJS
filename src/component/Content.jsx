import React from 'react';
import { Card, Row, Col } from 'antd';
import { foodsAndDescs } from '../constants/foodsAndDesc';
import '@google/model-viewer';

const renderDetail = (item, i) => {
  return (
    <Card key={i} id={item.label && `#${item.label}`} className='container-card' title={item.title}>
      <Row style={{ flexDirection: item.isReverse && 'row-reverse' }} gutter={[24, 24]}>
        <Col span={14}>{item.desc}</Col>
        <Col span={9} style={{ background: '#9ad284' }}>
          <model-viewer
            src={`./models/${item.modelName}/scene.gltf`}
            alt='A 3D model'
            auto-rotate
            key2={i}
            camera-controls
            style={{ width: '100%', height: '500px' }}
          ></model-viewer>
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
