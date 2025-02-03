import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import './Tabs.css';

const { TabPane } = Tabs;

const TabsMenu = ({ tabTitles, contentRef }) => {
  const [activeKey, setActiveKey] = useState();

  const handleTabClick = (key) => {
    const section = document.getElementById(key);
    if (section && contentRef.current) {
      const yOffset = -200;
      const yPosition = section.offsetTop + yOffset; // Use offsetTop relative to the content container
      contentRef.current.scrollTo({ top: yPosition, behavior: 'smooth' }); // Scroll within the content container
    }
    setActiveKey(key);
  };

  useEffect(() => {
    setActiveKey(tabTitles[0].toLowerCase());
    handleTabClick(tabTitles[0].toLowerCase());
  }, [tabTitles]);

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;

      let closestSection = activeKey;
      let minDistance = Infinity;

      tabTitles.forEach((title) => {
        const section = document.getElementById(title.toLowerCase());
        if (section) {
          const rect = section.getBoundingClientRect();
          const distance = Math.abs(rect.top - contentRef.current.getBoundingClientRect().top - 150);

          if (distance < minDistance && rect.top < window.innerHeight / 2) {
            minDistance = distance;
            closestSection = title.toLowerCase();
          }
        }
      });

      setActiveKey(closestSection);
    };

    const contentElement = contentRef.current;
    if (contentElement) {
      contentElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (contentElement) {
        contentElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, [tabTitles, activeKey, contentRef]);

  useEffect(() => {
    // Ant Tabs tıklandığında focus'u kaldır
    document.querySelectorAll(".ant-tabs-tab-btn").forEach((tab) => {
      tab.addEventListener("mousedown", (e) => e.preventDefault());
    });
  }, []);

  return (
    <Tabs activeKey={activeKey} centered onTabClick={handleTabClick} onChange={handleTabClick} className='tabs-menu'>
      {tabTitles.map((title) => (
        <TabPane tab={title} key={title.toLowerCase()} />
      ))}
    </Tabs>
  );
};

export default TabsMenu;