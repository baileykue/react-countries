import React, { useState, useEffect } from 'react';
import './Main.css';
import FlagCard from '../FlagCard/FlagCard';
import { getFlags } from '../../services/flags';

export default function Main() {
  const [flags, setFlags] = useState([]);
  const [query, setQuery] = useState('');
  const [continent, setContinent] = useState('all');
  const [order, setOrder] = useState('default');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFlags();
      setFlags(data);
    };
    fetchData();
  }, []);

  const filterFlags = () => {
    return flags
      .sort((a, b) => {
        if (order === 'asc') {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }

          return 0;
        } else if (order === 'dsc') {
          if (a.name > b.name) {
            return -1;
          }
          if (a.name < b.name) {
            return 1;
          }

          return 0;
        }
      })
      .filter((flag) => {
        return (
          flag.name.toLowerCase().includes(query) &&
          (flag.continent === continent || continent === 'all')
        );
      });
  };

  return (
    <>
      <div>
        <label>
          Search for Flag
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </label>

        <label>
          Filter by Continent
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
        </label>

        <label>
          Sort Alphabetically
          <select
            value={order}
            onChange={(e) => {
              setOrder(e.target.value);
            }}
          >
            <option value="default">Default</option>
            <option value="asc">A-Z</option>
            <option value="dsc">Z-A</option>
          </select>
        </label>
      </div>

      <div className="flag-display">
        {filterFlags().map((flag) => {
          return <FlagCard key={flag.name} {...flag} />;
        })}
      </div>
    </>
  );
}
