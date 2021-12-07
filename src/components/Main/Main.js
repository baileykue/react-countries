import React, { useState, useEffect } from 'react';
import './Main.css';
import FlagCard from '../FlagCard/FlagCard';
import { getFlags } from '../../services/flags';

export default function Main() {
  const [flags, setFlags] = useState([]);
  const [query, setQuery] = useState('');
  const [continent, setContinent] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFlags();
      setFlags(data);
    };
    fetchData();
  }, []);

  const filterFlags = () => {
    return flags.filter((flag) => {
      return (
        // here is where you will continue to list out different filtering and sorting methods
        flag.name.includes(query) && (flag.continent === continent || continent === 'all')
      );
    });
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />

        <select
          value={continent}
          onChange={(e) => {
            setContinent(e.target.value);
          }}
        >
          <option value="all">All</option>
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Europe">Europe</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      <div className="flag-display">
        {/* here is where you will replace flags.map with your filter function, in order to update page based on user interaction */}
        {filterFlags().map((flag) => {
          return <FlagCard key={flag.name} {...flag} />;
        })}
      </div>
    </>
  );
}
