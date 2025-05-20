
export default function SearchBar({ value, onChange }) {
  return (
    <input
      className="border p-2 w-full mb-4"
      type="text"
      placeholder="Поиск страны..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
