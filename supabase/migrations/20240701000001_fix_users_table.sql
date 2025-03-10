-- Remove foreign key constraint if it exists
ALTER TABLE IF EXISTS public.users DROP CONSTRAINT IF EXISTS users_id_fkey;

-- Make sure the users table has the correct structure
ALTER TABLE IF EXISTS public.users
ALTER COLUMN id TYPE uuid USING id::uuid,
ALTER COLUMN id SET DEFAULT uuid_generate_v4(),
ALTER COLUMN id SET NOT NULL;

-- Enable realtime for users table
alter publication supabase_realtime add table users;
