
import { useEffect, useState } from 'react';
import { fetchAllCountries } from '../api';
import SearchBar from '../components/SearchBar';
import CountryList from '../components/CountryList';
import Pagination from '../components/Pagination';

const ITEMS_PER_PAGE = 12;

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchAllCountries().then(setCountries);
  }, []);

  const filtered = countries.filter((c) =>
    c.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="p-4">
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <CountryList countries={paginated} />
      <Pagination
        total={filtered.length}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        itemsPerPage={ITEMS_PER_PAGE}
      />
    </div>
  );
}
