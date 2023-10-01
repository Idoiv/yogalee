import React from 'react';
import './OutlineWrapper.css';

const OutlineWrapper = ({ children }) => {
  return (
    <div className="space-wrapper">
      <div className="outline-wrapper">
        <div className="outline">
          {children}
        </div>
      </div>
    </div>
  );
};

export default OutlineWrapper;
