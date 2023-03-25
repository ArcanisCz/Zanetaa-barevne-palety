import React from 'react';
import './style.css';
import { palettes } from '../../palettes';
import { SchemeColor } from '../SchemeColor';

export const PaletteData = ({
  name,
  image,
  attribution,
  description,
  colors,
}) => {
  return (
    <div className="palette">
      <div className="palette-scheme palette-scheme--">
        <img className="scheme-image" src={image} alt={name} />
      </div>

      <div className="palette-info">
        <h2>{name}</h2>
        <p>{description}</p>
        <p>
          Photo by{' '}
          <a href={attribution.url} target="_blank">
            {attribution.name}
          </a>
          .
        </p>
        {colors.map((color) => (
          <SchemeColor key={color.colors} colors={color.colors} />
        ))}
      </div>
    </div>
  );
};
