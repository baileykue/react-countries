import React from 'react';
import './FlagCard.css';

export default function FlagCard({ name, iso2 }) {
  console.log(iso2);
  return (
    <>
      <div className="flag">
        <img src={`https://flagcdn.com/80x60/${iso2.toLowerCase()}.png`} />
        <h2>{name}</h2>
      </div>
    </>
  );
}
