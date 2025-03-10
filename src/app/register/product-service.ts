import { createClient } from "../../../supabase/client";
import { Product } from "@/types/product";

export async function getProducts(): Promise<Product[]> {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("name");

  if (error) {
    console.error("Error fetching products:", error);
    return [];
  }

  return data as Product[];
}
