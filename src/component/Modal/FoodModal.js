import React from 'react';
import { Modal } from 'antd';
import '@google/model-viewer';
import './FoodModal.css';


const FoodModal = ({ isVisible, image, onClose }) => {
  return (
    <Modal
      visible={isVisible}
      footer={null}
      destroyOnClose={true}
      onCancel={onClose}
      centered
      className={image?.includes('.png') ? 'food-modal' : 'food-modal width-max-content'}
    >
      {image?.includes('.png') ? (
        <img src={image} className='food-modal-image' />
      ) : (
        <model-viewer
          src={image}
          alt='A 3D model'
          auto-rotate
          camera-controls
          className='model-viewer custom-model-viewer'
        ></model-viewer>
      )}
    </Modal>
  );
};

export default FoodModal;
