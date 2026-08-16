# FLYMN — Demo Website (Next.js)

Clickable ordering demo for FLYMN Ticketing and Travel Agency:
flights-first booking flow (price calendar, sorting, airline filters,
passenger details, extras), tours, Mongolian/English toggle, mock
QPay/SocialPay/card checkout. No real payments are processed.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Deploy to Vercel

```bash
npm i -g vercel
vercel             # answer the prompts, then:
vercel --prod
```

Or push to GitHub and import at vercel.com/new.
No env vars or special settings needed — Next.js defaults work.
