import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import Pagination from "./components/Pagination";

function App() {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [viewType, setViewType] = useState("list");
  const [searchText, setSearchText] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  // debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchValue(searchText);
      setCurrentPage(1);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchText]);

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  function handleSaveProduct(product) {
    if (product.id) {
      const updated = products.map((p) =>
        p.id === product.id ? product : p
      );
      setProducts(updated);
    } else {
      setProducts([...products, { ...product, id: Date.now() }]);
    }
    setEditProduct(null);
  }

  function handleEdit(product) {
    setEditProduct(product);
  }

  function handleDelete(id) {
    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <Navbar />

      <div className="flex justify-center p-4">
        <div className="bg-white w-full max-w-6xl rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-center text-purple-600">
            Product Management
          </h2>

          <ProductForm onSave={handleSaveProduct} editProduct={editProduct} />

          <div className="flex flex-col md:flex-row gap-3 mt-4">
            <input
              className="border p-2 rounded"
              placeholder="Search product..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />

            <button
              className="bg-purple-600 text-white px-4 py-2 rounded"
              onClick={() =>
                setViewType(viewType === "list" ? "grid" : "list")
              }
            >
              {viewType === "list" ? "Grid View" : "List View"}
            </button>
          </div>

          <ProductList
            products={visibleProducts}
            viewType={viewType}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />

          <Pagination
            total={filteredProducts.length}
            perPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
