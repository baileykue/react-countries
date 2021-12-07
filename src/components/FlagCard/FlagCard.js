import React from 'react';
import './FlagCard.css';

export default function FlagCard({ country, image }) {
  return (
    <>
      <div>
        <img src={image} />
        <h2>{country}</h2>
      </div>
    </>
  );
}
