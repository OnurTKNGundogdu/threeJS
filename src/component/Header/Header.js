import React from 'react';
import './Header.css';
import { WhatsAppOutlined } from '@ant-design/icons';
import { Typography } from 'antd';

export const Header = () => {
  return (
    <header className='header'>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 20px',
        }}
      >
        <Typography style={{ flex: 1, left: '50%', textAlign: 'center' }} className='header-title'>
          Restaurant Name
          <div style={{ display: 'inline-flex' }}>
            <Typography className='footer-text' id='footerText'>
              Contact Us: 0776-025-9130
            </Typography>
            <a
              href='https://wa.me/07760259130'
              className='wp-icon'
              id='wpIcon'
              target='_blank'
              rel='noopener noreferrer'
            >
              <WhatsAppOutlined style={{ fontSize: '40px', color: '#9A3D3D' }} />
            </a>
          </div>
        </Typography>
      </div>
    </header>
  );
};
