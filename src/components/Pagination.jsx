function Pagination({ total, perPage, currentPage, onPageChange }) {
  const totalPages = Math.ceil(total / perPage);

  return (
    <div className="flex justify-center gap-2 mt-6">
      {Array.from({ length: totalPages }).map((_, index) => {
        const page = index + 1;
        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 rounded ${
              page === currentPage
                ? "bg-purple-600 text-white"
                : "border"
            }`}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}

export default Pagination;
