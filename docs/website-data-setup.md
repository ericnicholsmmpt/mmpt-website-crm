# Website Data Setup

This project now supports first-party lead capture and traffic/event storage in Supabase.

## Required environment variables

Add these in Vercel:

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

## Database setup

1. Open your Supabase project.
2. Go to the SQL editor.
3. Run the SQL in:

`docs/supabase-website-tracking.sql`

That creates:

- `website_visitors`
- `website_sessions`
- `website_events`
- `website_leads`

## What gets stored

### Lead form

The contact/goal form stores:

- name
- email
- phone
- goal
- interests
- source
- visitor/session ids
- IP/user agent
- current page URL + UTM values when available

### Site tracking

The tracking endpoint stores:

- page views
- CTA clicks
- intent + label
- path/referrer
- viewport
- visitor/session ids
- IP/user agent
- current page URL + UTM values when available

## Current fallback behavior

If Supabase environment variables are not set, the site still works and falls back to server logs.

## Recommended next step

After the tables are live, build a simple dashboard around:

- top pages
- top CTA clicks
- service interest by source
- lead volume by source
- page-to-lead conversion by service
