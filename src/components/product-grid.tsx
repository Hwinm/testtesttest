"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProductCardClient from "@/components/product-card-client";

type Product = {
  id: string;
  name: string;
  price: number;
  image?: string;
};

type ProductGridProps = {
  products: Product[];
  onProductClick: (product: Product) => void;
};

export default function ProductGrid({
  products,
  onProductClick,
}: ProductGridProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Products</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCardClient
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              onClick={() => onProductClick(product)}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
