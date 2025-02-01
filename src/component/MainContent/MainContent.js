import React, { useState } from 'react';
import Header from '../Header/Header';
import TabsMenu from '../Tabs/Tabs';
import FoodCard from '../Card/FoodCard';
import FoodModal from '../Modal/FoodModal';
import testData from '../../data/testData';
import './MainContent.css';

const tabTitles = ['Main', 'Meal Deal', 'Vegetarian', 'Sides', 'Desserts', 'Drinks', 'Sauces'];

const MainContent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const handle3DIconClick = (modalImage) => {
    setModalImage(modalImage);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <div className='main-content'>
      <div className='header-container'>
        <Header />
        <TabsMenu tabTitles={tabTitles} />
      </div>
      <div className='content'>
        {tabTitles.map((title) => (
          <div id={title.toLowerCase()} key={title} className='section'>
            <h2 className='section-title'>{title}</h2>
            <div className='card-container'>
              {testData
                .filter((data) => data.dishType === title.toLowerCase())
                .map((item, i) => (
                  <FoodCard key={i} item={item} on3DClick={() => handle3DIconClick(item.modalImage)} />
                ))}
            </div>
          </div>
        ))}
      </div>
      <FoodModal isVisible={isModalVisible} image={modalImage} onClose={handleModalClose} />
    </div>
  );
};

export default MainContent;
