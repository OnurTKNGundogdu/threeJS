import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import './Tabs.css';

const { TabPane } = Tabs;

const TabsMenu = ({ tabTitles, onTabClick }) => {
  const [activeKey, setActiveKey] = useState(); // Initialize with the first tab

  const handleTabClick = (key) => {
    const section = document.getElementById(key);
    if (section) {
      const yOffset = -120;
      const yPosition = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: 'smooth' });
    }
    setActiveKey(key);
  };

  useEffect(() => {
    setActiveKey(tabTitles[0].toLowerCase());
    handleTabClick(tabTitles[0].toLowerCase()); // Call the onTabClick function
  }, []);

  return (
    <Tabs
      activeKey={activeKey}
      centered
      onTabClick={handleTabClick}
      onChange={handleTabClick}
      className='tabs-menu'
    >
      {tabTitles.map((title) => (
        <TabPane tab={title} key={title.toLowerCase()} />
      ))}
    </Tabs>
  );
};

export default TabsMenu;
