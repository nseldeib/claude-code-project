# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js TypeScript web application with Supabase for authentication and database functionality. It uses the App Router architecture introduced in Next.js 13+.

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Architecture

The project follows Next.js 13+ App Router structure:

```
src/
├── app/              # App Router pages and layouts
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Home page
│   └── globals.css   # Global styles
├── components/       # Reusable React components
├── hooks/           # Custom React hooks
│   └── useAuth.ts   # Authentication hook
├── lib/             # Utility libraries and configurations
│   ├── supabase.ts  # Client-side Supabase client
│   └── supabase-server.ts # Server-side Supabase client
└── types/           # TypeScript type definitions
    └── supabase.ts  # Database type definitions
```

## Supabase Configuration

The app uses Supabase for:
- Authentication (via `@supabase/supabase-js` and `@supabase/ssr`)
- Database operations
- Real-time subscriptions

Environment variables needed (see `.env.example`):
- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anonymous key

## Key Files

- `src/lib/supabase.ts` - Client-side Supabase configuration
- `src/lib/supabase-server.ts` - Server-side Supabase configuration with cookie handling
- `src/hooks/useAuth.ts` - Authentication state management
- `src/types/supabase.ts` - Database type definitions (update based on your schema)

## Development Notes

- Uses TypeScript with strict mode enabled
- Configured for Tailwind CSS (add tailwind.config.js if needed)
- ESLint configured with Next.js rules
- Path aliases configured (`@/*` maps to `src/*`)
- Server and client components properly separated for Supabase SSR