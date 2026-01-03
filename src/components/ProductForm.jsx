import { useEffect, useState } from "react";

function ProductForm({ onSave, editProduct }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
    description: ""
  });

  const [error, setError] = useState("");

  useEffect(() => {
    if (editProduct) {
      setForm(editProduct);
    }
  }, [editProduct]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.price || !form.category) {
      setError("Name, Price and Category are required");
      return;
    }

    setError("");
    onSave(form);

    setForm({
      name: "",
      price: "",
      category: "",
      stock: "",
      description: ""
    });
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 grid gap-3 md:grid-cols-2">
      <input name="name" placeholder="Product Name" className="border p-2 rounded"
        value={form.name} onChange={handleChange} />

      <input name="price" type="number" placeholder="Price" className="border p-2 rounded"
        value={form.price} onChange={handleChange} />

      <input name="category" placeholder="Category" className="border p-2 rounded"
        value={form.category} onChange={handleChange} />

      <input name="stock" type="number" placeholder="Stock" className="border p-2 rounded"
        value={form.stock} onChange={handleChange} />

      <input name="description" placeholder="Description"
        className="border p-2 rounded md:col-span-2"
        value={form.description} onChange={handleChange} />

      {error && <p className="text-red-500 md:col-span-2">{error}</p>}

      <button className="bg-pink-500 text-white p-2 rounded md:col-span-2">
        {editProduct ? "Update Product" : "Add Product"}
      </button>
    </form>
  );
}

export default ProductForm;
