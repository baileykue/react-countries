import React, { useState, useEffect } from 'react';
import './Main.css';
import FlagCard from '../FlagCard/FlagCard';

export default function Main() {
  const [flags, setFlags] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFlags();
      setFlags(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {flags.map((flag) => {
        return <FlagCard key={flag.country} {...flag} />;
      })}
    </div>
  );
}
