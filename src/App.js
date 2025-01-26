import React from 'react';
import { Layout, Menu } from 'antd';
import { CustomHeader } from './component/Header';
import { CustomContent } from './component/Content';
import { sidebarMenuItem } from './constants/sidebarMenuItem';

const { Footer, Sider, Content } = Layout;

function App() {
  return (
    <Layout className='full-width full-heigh'>
      <CustomHeader />
      <Layout>
        <Sider width='14%' className='sider'>
          <Menu mode='inline' className='menu-container' items={sidebarMenuItem} />
        </Sider>
        <Content style={{ padding: '10px', overflow: 'auto' }}>
          <CustomContent />
        </Content>
      </Layout>
      <Footer className='footer'>Footer</Footer>
    </Layout>
  );
}

export default App;
