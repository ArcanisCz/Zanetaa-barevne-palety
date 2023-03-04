import React from 'react';
import { palettes } from '../../src/palettes';
import { palettes } from './palettes.js';
import './style.css';

export const paletteData = ({ name, image, atribution }) => {
  return (
    <div className="palette">
      <div className="palette-scheme palette-scheme--vertical">
        <img
          className="scheme-image"
          src="/img/mimosa-retreat.jpg"
          alt="Mimosa Retreat"
        />
      </div>
      <div className="palette-info">
        <h2>Mimose Retreat</h2>
        <p>
          Brown, combined with shades of yellow, is a rather unusual combination
          that can be called really sweet. It is both citrusy, caramel, and has
          a slight hint of cinnamon, which gives it a special versatility. In
          summer it will invigorate, make you act and move, and in winter it
          will warm and relax.
        </p>

        <p>
          Photo by{' '}
          <a href="https://unsplash.com/photos/XkiONXX7i4o" target="_blank">
            Sara Cervera
          </a>
          .
        </p>
      </div>
    </div>
  );
};
