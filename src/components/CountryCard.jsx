
import { Link } from 'react-router-dom';

export default function CountryCard({ country }) {
  return (
    <Link to={`/country/${country.name.common}`}>
      <div className="border rounded-xl shadow-md p-4 hover:shadow-lg transition">
        <img src={country.flags.svg} alt={country.name.common} className="h-32 w-full object-cover rounded" />
        <h3 className="mt-2 font-semibold">{country.name.common}</h3>
      </div>
    </Link>
  );
}
