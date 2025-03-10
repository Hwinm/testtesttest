"use client";

import { useState, useEffect } from "react";
import DashboardNavbar from "@/components/dashboard-navbar";
import { createClient } from "../../../../supabase/client";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pencil, Trash2, Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [newProduct, setNewProduct] = useState({ name: "", price: "" });
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const supabase = createClient();
  const router = useRouter();

  // Fetch products
  const fetchProducts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("name");

    if (error) {
      console.error("Error fetching products:", error);
    } else {
      setProducts(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Add new product
  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price) return;

    const price = parseFloat(newProduct.price);
    if (isNaN(price)) return;

    const { error } = await supabase.from("products").insert({
      name: newProduct.name,
      price: price,
    });

    if (error) {
      console.error("Error adding product:", error);
    } else {
      setNewProduct({ name: "", price: "" });
      fetchProducts();
    }
  };

  // Update product
  const handleUpdateProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct) return;

    const { error } = await supabase
      .from("products")
      .update({
        name: editingProduct.name,
        price: editingProduct.price,
      })
      .eq("id", editingProduct.id);

    if (error) {
      console.error("Error updating product:", error);
    } else {
      setEditingProduct(null);
      fetchProducts();
    }
  };

  // Delete product
  const handleDeleteProduct = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    const { error } = await supabase.from("products").delete().eq("id", id);

    if (error) {
      console.error("Error deleting product:", error);
    } else {
      fetchProducts();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNavbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Manage Products</h1>
          <Button onClick={() => router.push("/dashboard/register")}>
            Go to Register
          </Button>
        </div>

        {/* Add Product Form */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
          <form onSubmit={handleAddProduct} className="flex flex-wrap gap-4">
            <div className="w-full md:w-1/3">
              <Label htmlFor="name">Product Name</Label>
              <Input
                id="name"
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
                placeholder="Product name"
                required
              />
            </div>
            <div className="w-full md:w-1/3">
              <Label htmlFor="price">Price</Label>
              <Input
                id="price"
                type="number"
                step="0.01"
                min="0"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
                placeholder="0.00"
                required
              />
            </div>
            <div className="w-full md:w-1/3 flex items-end">
              <Button type="submit" className="mt-6">
                <Plus className="mr-2 h-4 w-4" /> Add Product
              </Button>
            </div>
          </form>
        </div>

        {/* Products List */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <h2 className="text-xl font-semibold p-6 border-b">Products</h2>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : products.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              No products found. Add some products above.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {editingProduct?.id === product.id ? (
                          <Input
                            value={editingProduct.name}
                            onChange={(e) =>
                              setEditingProduct({
                                ...editingProduct,
                                name: e.target.value,
                              })
                            }
                          />
                        ) : (
                          product.name
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {editingProduct?.id === product.id ? (
                          <Input
                            type="number"
                            step="0.01"
                            min="0"
                            value={editingProduct.price}
                            onChange={(e) =>
                              setEditingProduct({
                                ...editingProduct,
                                price: parseFloat(e.target.value),
                              })
                            }
                          />
                        ) : (
                          `$${product.price.toFixed(2)}`
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        {editingProduct?.id === product.id ? (
                          <div className="flex justify-end gap-2">
                            <Button
                              onClick={handleUpdateProduct}
                              size="sm"
                              className="bg-green-600 hover:bg-green-700"
                            >
                              Save
                            </Button>
                            <Button
                              onClick={() => setEditingProduct(null)}
                              variant="outline"
                              size="sm"
                            >
                              Cancel
                            </Button>
                          </div>
                        ) : (
                          <div className="flex justify-end gap-2">
                            <Button
                              onClick={() => setEditingProduct(product)}
                              variant="outline"
                              size="sm"
                            >
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button
                              onClick={() => handleDeleteProduct(product.id)}
                              variant="outline"
                              size="sm"
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
