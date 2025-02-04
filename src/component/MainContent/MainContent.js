import React, { useState, useRef } from 'react';
import { Header as CustomHeader } from '../Header/Header';
import TabsMenu from '../Tabs/Tabs';
import FoodCard from '../Card/FoodCard';
import FoodModal from '../Modal/FoodModal';
import testData from '../../data/testData';
import { Layout } from 'antd';
import './MainContent.css';

const tabTitles = ['Main', 'Meal Deal', 'Vegetarian', 'Sides', 'Desserts', 'Drinks', 'Sauces'];
const { Header, Content } = Layout;

const MainContent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const contentRef = useRef(null); // Add a ref for the Content section

  const handle3DIconClick = (item) => {
    const data = item?.modalImage ? item?.modalImage : item.image;
    setModalImage(data);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <Layout className='main-content'>
      <Header>
        <CustomHeader />
        <TabsMenu tabTitles={tabTitles} contentRef={contentRef} /> {/* Pass the ref to TabsMenu */}
      </Header>
      <Content className='content' ref={contentRef}>
        <>
          {tabTitles.map((title) => (
            <div id={title.toLowerCase()} key={title} className='section'>
              <h2 className='section-title'>{title}</h2>
              <div className='card-container'>
                {testData
                  .filter((data) => data.dishType === title.toLowerCase())
                  .map((item, i) => (
                    <FoodCard key={i} item={item} on3DClick={() => handle3DIconClick(item)} />
                  ))}
              </div>
            </div>
          ))}
        </>
      </Content>
      {isModalVisible && <FoodModal isVisible={isModalVisible} image={modalImage} onClose={handleModalClose} />}
    </Layout>
  );
};

export default MainContent;
