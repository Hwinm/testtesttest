"use client";

import { ShoppingCart } from "lucide-react";

type ProductCardProps = {
  id: string;
  name: string;
  price: number;
  image?: string;
  onClick: () => void;
};

export default function ProductCardClient({
  id,
  name,
  price,
  image,
  onClick,
}: ProductCardProps) {
  return (
    <div
      className="bg-white p-4 rounded-lg border shadow-sm hover:shadow-md transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
        <ShoppingCart size={20} className="text-blue-600" />
      </div>
      <h3 className="font-medium text-center">{name}</h3>
      <p className="text-center text-green-600 font-semibold">
        ${price.toFixed(2)}
      </p>
    </div>
  );
}
