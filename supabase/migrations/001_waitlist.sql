-- Waitlist table
-- Run this in your Supabase SQL editor or via supabase db push

create table if not exists public.waitlist (
  id            uuid primary key default gen_random_uuid(),
  email         text not null unique,
  referral_source text,
  signed_up_at  timestamptz not null default now()
);

-- Index for analytics queries
create index if not exists waitlist_signed_up_at_idx on public.waitlist (signed_up_at desc);

-- RLS: restrict read/write to service role only (no public access)
alter table public.waitlist enable row level security;

-- No policies = no access except service role (which bypasses RLS)
-- To allow admin reads, add a policy tied to a role:
-- create policy "Service role reads all" on public.waitlist
--   for select using (auth.role() = 'service_role');
