import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Modal, Button } from 'antd';
import { foodsAndDescs } from '../constants/foodsAndDesc';
import ThreeDScene from '../component/ThreeDScene';

const renderDetail = (item, i, modelName) => {
  return (
    <Card key={i} id={item.label && `#${item.label}`} className='container-card' title={item.title}>
      {item.desc}
    </Card>
  );
};

export const CustomContent = () => {
  const [modelName, setModelName] = useState('dino');
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    console.log(isOpen);
  }, []);
  return (
    <>
      <Modal
        title={'foodName'}
        okButtonProps={{ style: { display: 'none' } }}
        onCancel={() => {
          setIsOpen(false);
        }}
        cancelText={'OK'}
        onClose={() => {
          setIsOpen(false);
        }}
        destroyOnClose={true}
        closable={true}
        open={isOpen}
      >
        <ThreeDScene key={'keeeeeeeyyy'} modelName={modelName} />
      </Modal>
      <Col className='full-width'>
        <Row>
          <Col>
            <Button
              onClick={() => {
                setModelName('eye');
                setIsOpen(true);
              }}
            >
              render Eye
            </Button>
          </Col>
          <Col>
            <Button
              onClick={() => {
                setModelName('dino');
                setIsOpen(true);
              }}
            >
              render dino
            </Button>
          </Col>
        </Row>
        <Row> {renderDetail(foodsAndDescs[0], 'keeye123', modelName)}</Row>
      </Col>
    </>
  );
};
