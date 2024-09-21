

import React, { useState } from 'react';

// Define the type for the tabs prop
interface Tab {
  label: string;
  content: React.ReactNode; // or any other suitable type for the content
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <ul className="tabs" style={{ overflowX: "scroll" }}>
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </li>
        ))}
      </ul>
      <div className="tab-content">{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
