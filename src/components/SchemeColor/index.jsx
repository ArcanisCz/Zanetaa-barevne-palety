import React from 'react';
import './style.css';

export const SchemeColor = ({ color }) => {
  return (
    <div className="scheme_colors">
      <div className="scheme_color" style={{ backgroundColor: color }}>
        {color}
      </div>
    </div>
  );
};
