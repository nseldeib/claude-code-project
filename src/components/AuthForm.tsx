'use client'

import { useState } from 'react'
import { authService } from '@/lib/auth'
import { useRouter } from 'next/navigation'

interface AuthFormProps {
  type: 'login' | 'signup'
  onSuccess?: () => void
}

export default function AuthForm({ type, onSuccess }: AuthFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setMessage(null)

    if (!email || !password) {
      setError('Please fill in all fields')
      setLoading(false)
      return
    }

    try {
      let result
      if (type === 'signup') {
        result = await authService.signUp(email, password)
        if (!result.error) {
          setMessage('Check your email for confirmation link!')
        }
      } else {
        result = await authService.signIn(email, password)
        if (!result.error) {
          onSuccess?.()
          router.push('/dashboard')
        }
      }

      if (result.error) {
        setError(result.error.message)
      }
    } catch (err) {
      setError('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-8 bg-white rounded-lg shadow-lg border border-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">
        {type === 'login' ? 'Sign In' : 'Sign Up'}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white placeholder-gray-500 disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed transition-colors"
            placeholder="Enter your email"
            disabled={loading}
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white placeholder-gray-500 disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed transition-colors"
            placeholder="Enter your password"
            disabled={loading}
          />
        </div>
        
        {error && (
          <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}
        
        {message && (
          <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded">
            {message}
          </div>
        )}
        
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Loading...
            </div>
          ) : (
            type === 'login' ? 'Sign In' : 'Sign Up'
          )}
        </button>
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          {type === 'login' ? "Don't have an account? " : "Already have an account? "}
          <a
            href={type === 'login' ? '/signup' : '/login'}
            className="text-blue-600 hover:underline"
          >
            {type === 'login' ? 'Sign up' : 'Sign in'}
          </a>
        </p>
      </div>
    </div>
  )
}