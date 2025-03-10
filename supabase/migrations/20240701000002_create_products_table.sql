-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  image TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert sample products
INSERT INTO products (name, price, image) VALUES
('Coffee', 3.99, NULL),
('Sandwich', 8.99, NULL),
('Muffin', 4.01, NULL),
('Bagel', 3.50, NULL),
('Salad', 9.99, NULL),
('Smoothie', 5.99, NULL),
('Cookie', 2.50, NULL),
('Croissant', 3.75, NULL)
ON CONFLICT (id) DO NOTHING;

-- Enable realtime for products table
alter publication supabase_realtime add table products;
