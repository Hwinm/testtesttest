"use client";

import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type CartItemProps = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
};

export default function CartItem({
  id,
  name,
  price,
  quantity,
  onUpdateQuantity,
  onRemove,
}: CartItemProps) {
  return (
    <div className="flex justify-between items-center border-b pb-3">
      <div>
        <h4 className="font-medium">{name}</h4>
        <p className="text-sm text-gray-500">${price.toFixed(2)} each</p>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={() => onUpdateQuantity(id, quantity - 1)}
        >
          <Minus size={14} />
        </Button>
        <Input
          type="number"
          value={quantity}
          onChange={(e) => onUpdateQuantity(id, parseInt(e.target.value) || 1)}
          className="w-16 h-8 text-center"
          min="1"
        />
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={() => onUpdateQuantity(id, quantity + 1)}
        >
          <Plus size={14} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-red-500"
          onClick={() => onRemove(id)}
        >
          <Trash2 size={14} />
        </Button>
      </div>
    </div>
  );
}
