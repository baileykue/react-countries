import React from 'react';
import './FlagCard.css';

export default function FlagCard({ name, iso2, continent }) {
  return (
    <>
      <div className="flag">
        <img src={`https://flagcdn.com/80x60/${iso2.toLowerCase()}.png`} />
        <h2>{name}</h2>
        <h3>{continent}</h3>
      </div>
    </>
  );
}
