import React from 'react';
import './style.css';
import { palettes } from '../../src/palettes';
import { SchemeColor } from '../SchemeColor';

export const PaletteData = ({ name, image, attribution, description }) => {
  return (
    <div className="palette">
      <div className="palette-scheme palette-scheme--vertical">
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
      </div>
    </div>
  );
};
