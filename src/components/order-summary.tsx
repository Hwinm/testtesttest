"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CartItem from "@/components/cart-item";

type Product = {
  id: string;
  name: string;
  price: number;
};

type CartItem = {
  product: Product;
  quantity: number;
};

type OrderSummaryProps = {
  cart: CartItem[];
  total: number;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onReset: () => void;
  onCompleteSale: () => void;
};

export default function OrderSummary({
  cart,
  total,
  onUpdateQuantity,
  onRemoveItem,
  onReset,
  onCompleteSale,
}: OrderSummaryProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent>
        {cart.length === 0 ? (
          <p className="text-gray-500 text-center py-6">
            No items in cart. Click on products to add them.
          </p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <CartItem
                key={item.product.id}
                id={item.product.id}
                name={item.product.name}
                price={item.product.price}
                quantity={item.quantity}
                onUpdateQuantity={onUpdateQuantity}
                onRemove={onRemoveItem}
              />
            ))}
          </div>
        )}

        <div className="mt-6 pt-4 border-t">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">Subtotal:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="font-bold text-lg">Total:</span>
            <span className="font-bold text-lg text-green-600">
              ${total.toFixed(2)}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={onReset}>
          Reset
        </Button>
        <Button
          onClick={onCompleteSale}
          disabled={cart.length === 0}
          className="bg-green-600 hover:bg-green-700"
        >
          Complete Sale
        </Button>
      </CardFooter>
    </Card>
  );
}
