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
  
  useEffect(() => {
    const handleScroll = () => {
      let closestSection = activeKey;
      let minDistance = Infinity;

      tabTitles.forEach((title) => {
        const section = document.getElementById(title.toLowerCase());
        if (section) {
          const rect = section.getBoundingClientRect();
          const distance = Math.abs(rect.top - 150);

          if (distance < minDistance && rect.top < window.innerHeight / 2) {
            minDistance = distance;
            closestSection = title.toLowerCase();
          }
        }
      });

      setActiveKey(closestSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [tabTitles, activeKey]);

  return (
    <Tabs activeKey={activeKey} centered onTabClick={handleTabClick} onChange={handleTabClick} className='tabs-menu'>
      {tabTitles.map((title) => (
        <TabPane tab={title} key={title.toLowerCase()} />
      ))}
    </Tabs>
  );
};

export default TabsMenu;
