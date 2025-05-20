
export default function Pagination({ total, currentPage, onPageChange, itemsPerPage }) {
  const totalPages = Math.ceil(total / itemsPerPage);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex gap-2 mt-4 flex-wrap">
      {pages.map((page) => (
        <button
          key={page}
          className={`px-3 py-1 rounded ${page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
