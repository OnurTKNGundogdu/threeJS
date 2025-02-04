import React from 'react';
import { Button, Card } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import './FoodCard.css';
import Typography from 'antd/es/typography/Typography';

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
        {item?.modalImage ? (
          <Button
            className='food-card-pric'
            onClick={() => {
              on3DClick(item);
            }}
          >
            3D View
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
