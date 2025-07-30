# Claude Code Project

A Next.js TypeScript web application with Supabase authentication.

## Features

- ✅ Next.js 14 with App Router
- ✅ TypeScript with strict mode
- ✅ Tailwind CSS for styling
- ✅ Supabase authentication (email/password)
- ✅ Protected routes with middleware
- ✅ Responsive design

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your Supabase credentials to `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Authentication Flow

- **Home** (`/`) - Landing page with auth navigation
- **Sign Up** (`/signup`) - Create new account
- **Sign In** (`/login`) - Login with existing credentials
- **Dashboard** (`/dashboard`) - Protected page for authenticated users

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking