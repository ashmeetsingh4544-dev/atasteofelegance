/*
# Create reservations table for cafe & restaurant website

1. New Tables
- `reservations`
  - `id` (uuid, primary key)
  - `name` (text, not null) — guest's full name
  - `email` (text, not null) — guest's email for confirmation
  - `phone` (text, not null) — guest's phone number
  - `party_size` (int, not null) — number of guests
  - `reservation_date` (date, not null) — date of reservation
  - `reservation_time` (time, not null) — time of reservation
  - `message` (text, nullable) — special requests / notes
  - `status` (text, default 'pending') — pending / confirmed / cancelled
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `reservations`.
- Allow anon + authenticated to INSERT (guests book without signing in).
- Allow anon + authenticated to SELECT only (so the site could display bookings if needed).
- No UPDATE or DELETE from the anon key — staff manage reservations server-side.

3. Notes
- This is a single-tenant, no-auth app. No user_id column.
- All policies use `TO anon, authenticated` so the anon-key frontend can operate.
*/

CREATE TABLE IF NOT EXISTS reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  party_size int NOT NULL DEFAULT 2,
  reservation_date date NOT NULL,
  reservation_time time NOT NULL,
  message text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_reservations" ON reservations;
CREATE POLICY "anon_select_reservations" ON reservations FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_reservations" ON reservations;
CREATE POLICY "anon_insert_reservations" ON reservations FOR INSERT
TO anon, authenticated WITH CHECK (true);
