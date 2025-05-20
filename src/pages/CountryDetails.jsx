
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCountryByName } from '../api';

export default function CountryDetails() {
  const { name } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetchCountryByName(name).then(setCountry);
  }, [name]);

  if (!country) return <div>Загрузка...</div>;

  const { flags, name: n, capital, population, area, languages, currencies } = country;

  return (
    <div className="p-6">
      <img src={flags.svg} alt={n.common} className="w-64 mb-4" />
      <h1 className="text-3xl font-bold mb-2">{n.common}</h1>
      <p><strong>Столица:</strong> {capital?.[0]}</p>
      <p><strong>Население:</strong> {population.toLocaleString()}</p>
      <p><strong>Площадь:</strong> {area.toLocaleString()} км²</p>
      <p><strong>Языки:</strong> {Object.values(languages || {}).join(', ')}</p>
      <p><strong>Валюты:</strong> {Object.values(currencies || {}).map(c => `${c.name} (${c.symbol})`).join(', ')}</p>
    </div>
  );
}
