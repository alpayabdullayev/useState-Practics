import React, { useState } from 'react';

const Tab = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div>
        <nav>
          {children.map((item, index) => (
            <button key={index} onClick={() => setActiveTab(index)}>{item.props.title}</button>
          ))}
        </nav>
        <div>
          {children.map((item, index) => (
            <div key={index} style={{ display: index === activeTab ? 'block' : 'none' }}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

Tab.Panel = ({ children }) => {
  return <>{children}</>;
};

export default Tab;