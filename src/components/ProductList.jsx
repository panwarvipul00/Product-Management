function ProductList({ products, viewType, onEdit, onDelete }) {
  if (products.length === 0) {
    return <p className="text-center mt-6">No products found</p>;
  }

  if (viewType === "grid") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {products.map((p) => (
          <div key={p.id} className="border p-4 rounded">
            <h4 className="font-semibold">{p.name}</h4>
            <p>₹{p.price}</p>
            <p className="text-sm text-gray-500">{p.category}</p>

            <div className="flex gap-3 mt-2">
              <button className="text-blue-600" onClick={() => onEdit(p)}>
                Edit
              </button>
              <button className="text-red-600" onClick={() => onDelete(p.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <table className="w-full mt-6 border">
      <thead>
        <tr>
          <th className="border p-2">Name</th>
          <th className="border p-2">Price</th>
          <th className="border p-2">Category</th>
          <th className="border p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <tr key={p.id}>
            <td className="border p-2">{p.name}</td>
            <td className="border p-2">₹{p.price}</td>
            <td className="border p-2">{p.category}</td>
            <td className="border p-2">
              <button className="text-blue-600 mr-3" onClick={() => onEdit(p)}>
                Edit
              </button>
              <button className="text-red-600" onClick={() => onDelete(p.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductList;
