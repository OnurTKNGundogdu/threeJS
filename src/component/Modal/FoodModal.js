import React from 'react';
import { Modal } from 'antd';
import '@google/model-viewer';
import './FoodModal.css';

const FoodModal = ({ isVisible, image, onClose }) => {
  console.log(image)
  return (
    <Modal visible={isVisible} footer={null} onCancel={onClose} centered className='food-modal'>
      <model-viewer
        src={'./models/cheese/scene.gltf'}
        alt='A 3D model'
        auto-rotate
        camera-controls
        style={{ width: '100%', height: '500px' }}
      ></model-viewer>
    </Modal>
  );
};

export default FoodModal;
