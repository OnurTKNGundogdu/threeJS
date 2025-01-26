import React, { useState } from 'react';
import { Button, Row, Col, Layout, Drawer, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { sidebarMenuItem } from '../constants/sidebarMenuItem';

const { Header } = Layout;

export const CustomHeader = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };
  return (
    <Header>
      <Row className='full-width'>
        <Col className='hamburger-menu'>
          <Button
            className='hamburger-menu-button'
            type='primary'
            icon={<MenuOutlined />}
            onClick={showDrawer}
            style={{ marginRight: 16 }}
          />
        </Col>
        <Col className='header'>Header</Col>
      </Row>
      <Drawer
        className='sidebar-drawer'
        title='Menu'
        placement='left'
        closable={true}
        onClose={onClose}
        open={drawerVisible}
      >
        <Menu mode='inline' className='menu-container' items={sidebarMenuItem} />
      </Drawer>
    </Header>
  );
};
