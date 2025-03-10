"use client";

import { useState, useEffect } from "react";
import DashboardNavbar from "@/components/dashboard-navbar";
import ProductGrid from "@/components/product-grid";
import OrderSummary from "@/components/order-summary";
import { getProducts } from "@/app/register/product-service";
import { Product, CartItem } from "@/types/product";

// Fallback products data in case API fails
const fallbackProducts: Product[] = [
  { id: "1", name: "Coffee", price: 3.99 },
  { id: "2", name: "Sandwich", price: 8.99 },
  { id: "3", name: "Muffin", price: 4.01 },
];

export default function Register() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [total, setTotal] = useState<number>(0);

  // Fetch products from Supabase
  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        if (data && data.length > 0) {
          setProducts(data);
        } else {
          setProducts(fallbackProducts);
        }
      } catch (error) {
        console.error("Error loading products:", error);
        setProducts(fallbackProducts);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  // Calculate total whenever cart changes
  useEffect(() => {
    const newTotal = cart.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0,
    );
    setTotal(newTotal);
  }, [cart]);

  // Add product to cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.product.id === product.id,
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        return [...prevCart, { product, quantity: 1 }];
      }
    });
  };

  // Remove product from cart
  const removeFromCart = (productId: string) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.product.id !== productId),
    );
  };

  // Update quantity
  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return;

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: newQuantity }
          : item,
      ),
    );
  };

  // Reset cart
  const resetCart = () => {
    setCart([]);
  };

  // Complete sale
  const completeSale = () => {
    if (cart.length === 0) return;

    alert(`Sale completed! Total: ${total.toFixed(2)}`);
    resetCart();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNavbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Cash Register</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product List */}
          <div className="lg:col-span-2">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              </div>
            ) : (
              <ProductGrid products={products} onProductClick={addToCart} />
            )}
          </div>

          {/* Order Summary */}
          <div>
            <OrderSummary
              cart={cart}
              total={total}
              onUpdateQuantity={updateQuantity}
              onRemoveItem={removeFromCart}
              onReset={resetCart}
              onCompleteSale={completeSale}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
