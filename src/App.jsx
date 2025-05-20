
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CountryDetails from './pages/CountryDetails';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:name" element={<CountryDetails />} />
      </Routes>
    </Router>
  );
}
