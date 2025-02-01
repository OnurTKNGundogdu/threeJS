import React from 'react';
import { Modal } from 'antd';
import './FoodModal.css';

const FoodModal = ({ isVisible, image, onClose }) => {
  return (
    <Modal visible={isVisible} footer={null} onCancel={onClose} centered className='food-modal'>
      <img src={image} alt='Modal Content' className='modal-image' />
    </Modal>
  );
};

export default FoodModal;
