import React from 'react';
import './Header.css';
import { WhatsAppOutlined, PhoneOutlined } from '@ant-design/icons';
import { Typography } from 'antd';

export const Header = () => {
  return (
    <header className='header'>
      <div className='header-content'>
        <div className='header-title'>The Gyros & Kebabs</div>
        <div className='contact-info'>
          <Typography className='footer-text' id='footerText'>
            Contact Us: 0776-025-9130
          </Typography>
          <a
            href='https://wa.me/+447909225031'
            className='wp-icon'
            id='wpIconContainer'
            target='_blank'
            rel='noopener noreferrer'
          >
            <WhatsAppOutlined className='wp' />
          </a>
          <a href='tel:+447760259130' className='wp-icon' id='wpIcon' target='_blank' rel='noopener noreferrer'>
            <PhoneOutlined className='phone' style={{}} />
          </a>
        </div>
      </div>
    </header>
  );
};
