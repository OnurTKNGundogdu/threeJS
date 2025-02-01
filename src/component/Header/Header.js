import React from 'react';
import './Header.css';
import { WhatsAppOutlined } from '@ant-design/icons';
import { Col, Row, Typography } from 'antd';

const Header = () => {
  return (
    <header className='header'>
      <Row style={{ width: '100%' }}>
        <Col span={14} style={{ margin: '1%', textAlign: 'end', alignContent: 'end' }}>
          <Typography className='header-title'>Restaurant Name</Typography>
        </Col>

        <Col span={9} style={{ margin: '1%' }}>
          <Row align={'bottom'} justify={'end'} style={{ width: '100%' }}>
            <Col>
              <Typography className='footer-text' id='footerText'>
                Contact Us: 0776-025-9130
              </Typography>
            </Col>
            <Col>
              <a
                href='https://wa.me/07760259130'
                className='wp-icon'
                id='wpIcon'
                target='_blank'
                rel='noopener noreferrer'
              >
                <WhatsAppOutlined style={{ fontSize: '40px', color: '#9A3D3D' }} />
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
