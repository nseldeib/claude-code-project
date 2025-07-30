'use client'

import { useAuth } from '@/hooks/useAuth'
import Link from 'next/link'

export default function Home() {
  const { user, loading } = useAuth()

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8 text-gray-900">
            Welcome to Claude Code Project
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            This is a Next.js TypeScript application with Supabase authentication.
          </p>
          
          {loading ? (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          ) : user ? (
            <div className="space-y-4">
              <p className="text-green-600 font-medium">
                Welcome back, {user.email}!
              </p>
              <div className="space-x-4">
                <Link
                  href="/dashboard"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Go to Dashboard
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-gray-600">
                Get started by creating an account or signing in.
              </p>
              <div className="space-x-4">
                <Link
                  href="/signup"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Sign Up
                </Link>
                <Link
                  href="/login"
                  className="inline-block bg-gray-200 text-gray-900 px-6 py-3 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Sign In
                </Link>
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">Authentication</h3>
            <p className="text-gray-600">
              Secure email/password authentication with Supabase.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">TypeScript</h3>
            <p className="text-gray-600">
              Full TypeScript support for better development experience.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">Next.js 14</h3>
            <p className="text-gray-600">
              Built with the latest Next.js App Router architecture.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}