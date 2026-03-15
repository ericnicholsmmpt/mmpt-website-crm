create extension if not exists pgcrypto;

create table if not exists public.website_visitors (
  id uuid primary key,
  first_seen_at timestamptz not null default now(),
  last_seen_at timestamptz not null default now(),
  first_path text,
  first_referrer text,
  user_agent text
);

create table if not exists public.website_sessions (
  id uuid primary key,
  visitor_id uuid not null references public.website_visitors(id) on delete cascade,
  started_at timestamptz not null default now(),
  last_seen_at timestamptz not null default now(),
  landing_path text,
  landing_referrer text,
  user_agent text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  utm_content text
);

create index if not exists website_sessions_visitor_id_idx
  on public.website_sessions(visitor_id);

create table if not exists public.website_events (
  id uuid primary key default gen_random_uuid(),
  visitor_id uuid not null references public.website_visitors(id) on delete cascade,
  session_id uuid not null references public.website_sessions(id) on delete cascade,
  event_type text not null,
  intent text,
  label text,
  path text,
  referrer text,
  viewport text,
  current_url text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  utm_content text,
  ip_address text,
  user_agent text,
  metadata jsonb not null default '{}'::jsonb,
  occurred_at timestamptz not null default now()
);

create index if not exists website_events_session_id_idx
  on public.website_events(session_id);

create index if not exists website_events_event_type_idx
  on public.website_events(event_type);

create index if not exists website_events_occurred_at_idx
  on public.website_events(occurred_at desc);

create table if not exists public.website_leads (
  id uuid primary key,
  visitor_id uuid references public.website_visitors(id) on delete set null,
  session_id uuid references public.website_sessions(id) on delete set null,
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,
  goal text not null,
  interests jsonb not null default '[]'::jsonb,
  source text,
  path text,
  current_url text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  utm_content text,
  ip_address text,
  user_agent text,
  submitted_at timestamptz not null default now()
);

create index if not exists website_leads_submitted_at_idx
  on public.website_leads(submitted_at desc);

create index if not exists website_leads_source_idx
  on public.website_leads(source);
