import React from 'react';
import { Card } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import './FoodCard.css';
import Typography from 'antd/es/typography/Typography';

const FoodCard = ({ item, on3DClick }) => {
  return (
    <Card
      title={<span className='food-card-title'>{item.name}</span>}
      className='food-card'
      cover={<img alt={item.name} src={item.image} onClick={on3DClick} className='food-card-image' />}
    >
      <p className='food-card-description'>{item.description ?? ` `}</p>
      <div className='food-card-footer'>
        <Typography className='food-card-price'>{item.price}</Typography>
        <EyeOutlined className='food-card-icon' onClick={on3DClick} />
      </div>
    </Card>
  );
};

export default FoodCard;
