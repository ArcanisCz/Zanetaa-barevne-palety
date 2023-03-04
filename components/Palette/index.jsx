import React from 'react';
import { palettes } from '../../src/palettes';
import { palettes } from './palettes.js';
import './style.css';

export const SchemeColor = ({ color }) => {
  return (
    <div className="scheme_color" style={{ backgroundColor: color }}>
      {palettes.colors}
    </div>
  );
};
