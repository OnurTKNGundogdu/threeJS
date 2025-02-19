import React from 'react';
import { Button, Card } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import Typography from 'antd/es/typography/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube } from '@fortawesome/free-solid-svg-icons'; // Example icon for 3D
import './FoodCard.css';

const FoodCard = ({ item, on3DClick }) => {
  return (
    <Card
      title={<span className='food-card-title'>{item.name}</span>}
      className='food-card'
      cover={
        <img
          alt={item.name}
          src={item.image}
          onClick={() => {
            on3DClick(item);
          }}
          className='food-card-image'
        />
      }
    >
      <p className='food-card-description'>{item.description}</p>
      <div className='food-card-footer'>
        <Typography className='food-card-price'>{item.price}</Typography>
        {item?.modalImage.includes('glb') ? (
          <Button
            className='food-card-icon'
            onClick={() => {
              on3DClick(item);
            }}
          >
            <FontAwesomeIcon icon={faCube} />
            <Typography className='food-card-icon-text'>3D</Typography>
          </Button>
        ) : (
          <EyeOutlined
            className='food-card-icon'
            onClick={() => {
              on3DClick(item);
            }}
          />
        )}
      </div>
    </Card>
  );
};

export default FoodCard;
