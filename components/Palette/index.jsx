import React from 'react';
import { palettes } from '../../src/palettes';
import { palettes } from './palettes.js';
import './style.css';

export const paletteData = ({
  name,
  image,
  attribution,
  description,
  direction,
}) => {
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
