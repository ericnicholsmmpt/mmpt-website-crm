# MMPT Website CRM

Marketing site and lead capture flow for Movement Medicine Performance Therapy.

## Local development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment

Copy `.env.example` into `.env.local` and fill in the variables you need.

Key integrations:

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `RESEND_API_KEY`
- `LEAD_NOTIFICATION_TO`
- `LEAD_NOTIFICATION_FROM`

## Contact form notifications

The `/contact` lead form stores submissions and can also send an email notification through Resend.

Recommended setup:

- Use `MMPT Website <notifications@mmptperformance.com>` for `LEAD_NOTIFICATION_FROM`.
- Set `LEAD_NOTIFICATION_TO` to one or many inboxes separated by commas.
- Redeploy after adding the env vars in Vercel.

More setup notes live in [docs/website-data-setup.md](/Users/ericnichols/mmpt-website-crm/docs/website-data-setup.md).

## Scripts

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`
