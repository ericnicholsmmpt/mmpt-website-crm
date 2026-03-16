# Website Data Setup

This project now supports first-party lead capture and traffic/event storage in Supabase.

## Required environment variables

Add these in Vercel:

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

For contact lead email notifications, also add:

- `RESEND_API_KEY`
- `LEAD_NOTIFICATION_TO`
- `LEAD_NOTIFICATION_FROM`

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

If `RESEND_API_KEY` is set, the same submission also triggers an email notification for the inboxes in `LEAD_NOTIFICATION_TO`.

## Contact email setup

Use Resend for the contact form notification.

Example values:

- `RESEND_API_KEY`
- `LEAD_NOTIFICATION_TO=eric@mmptperformance.com`
- `LEAD_NOTIFICATION_TO=ops@mmptperformance.com,eric@mmptperformance.com`
- `LEAD_NOTIFICATION_FROM=MMPT Website <notifications@mmptperformance.com>`

Notes:

- `LEAD_NOTIFICATION_TO` supports one or many recipients separated by commas.
- `LEAD_NOTIFICATION_FROM` should use a sender from a verified Resend domain in production.
- If `RESEND_API_KEY` is missing, form submissions still succeed and fall back to storage/server logs without sending email.

## Quick verification

1. Add the notification env vars locally or in Vercel.
2. Restart the app or redeploy after saving env changes.
3. Submit the form on `/contact`.
4. Confirm the lead lands in Supabase or server logs and the notification email reaches the configured inbox.

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

If Resend environment variables are not set, the site still works and skips the email notification.

## Recommended next step

After the tables are live, build a simple dashboard around:

- top pages
- top CTA clicks
- service interest by source
- lead volume by source
- page-to-lead conversion by service
