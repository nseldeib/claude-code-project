'use client'

import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function DashboardPage() {
  const { user, loading, signOut } = useAuth()
  const router = useRouter()
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [user, loading, router])

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString())
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleSignOut = async () => {
    try {
      await signOut()
      router.push('/')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  // Demo startup ideas data
  const demoIdeas = [
    { id: 1, title: 'AI Recipe Generator', stage: 'PROTOTYPE', priority: 'high' },
    { id: 2, title: 'Local Farmer Marketplace', stage: 'TESTING', priority: 'medium' },
    { id: 3, title: 'Mobile Pet Tracker', stage: 'IDEA', priority: 'low' }
  ]

  if (loading) {
    return (
      <div className="min-h-screen bg-terminal-bg flex items-center justify-center terminal-scanlines">
        <div className="text-center space-y-4">
          <div className="text-terminal-text font-mono">
            <div className="text-2xl mb-4">
              [████████████████████] 100%
            </div>
            <p className="animate-pulse">Initializing startup_tracker v2.1.0...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-terminal-bg text-terminal-text terminal-scanlines relative">
      {/* Terminal Header */}
      <header className="border-b border-terminal-border bg-terminal-card">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <h1 className="text-xl font-mono">
                <span className="text-terminal-accent">$</span> startup_tracker v2.1.0
              </h1>
              <p className="text-sm text-terminal-muted">
                Session: {user.email} | {currentTime} | PID: {user.id.slice(0, 8)}
              </p>
            </div>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 bg-terminal-error text-white rounded border border-terminal-error hover:bg-red-600 transition-colors font-mono text-sm"
            >
              [q] quit
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Terminal Prompt */}
        <div className="bg-terminal-card border border-terminal-border rounded p-4">
          <div className="space-y-2 font-mono text-sm">
            <div className="text-terminal-accent">startup_tracker:~$ status</div>
            <div className="ml-4 space-y-1">
              <div className="flex justify-between">
                <span>Active Ideas:</span>
                <span className="text-terminal-secondary">[{demoIdeas.length}/5 slots]</span>
              </div>
              <div className="flex justify-between">
                <span>In Progress:</span>
                <span className="text-terminal-accent">[2]</span>
              </div>
              <div className="flex justify-between">
                <span>Validated:</span>
                <span className="text-terminal-success">[0]</span>
              </div>
              <div className="flex justify-between">
                <span>System Status:</span>
                <span className="text-terminal-success animate-terminal-blink">● ONLINE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ideas Pipeline */}
        <div className="bg-terminal-card border border-terminal-border rounded p-4">
          <div className="mb-4">
            <h2 className="text-terminal-secondary font-mono text-lg">
              ░░░ STARTUP IDEAS PIPELINE ░░░
            </h2>
          </div>
          
          <div className="space-y-3">
            {demoIdeas.map((idea, index) => (
              <div key={idea.id} className="bg-terminal-bg border border-terminal-muted rounded p-3 hover:border-terminal-text transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-terminal-accent">►</span>
                    <span className="font-mono">{idea.title}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className={`px-2 py-1 text-xs rounded border font-mono ${
                      idea.stage === 'PROTOTYPE' ? 'border-terminal-accent text-terminal-accent' :
                      idea.stage === 'TESTING' ? 'border-terminal-secondary text-terminal-secondary' :
                      'border-terminal-muted text-terminal-muted'
                    }`}>
                      [{idea.stage}]
                    </span>
                    <span className={`w-2 h-2 rounded-full ${
                      idea.priority === 'high' ? 'bg-terminal-error' :
                      idea.priority === 'medium' ? 'bg-terminal-secondary' :
                      'bg-terminal-muted'
                    }`}></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Commands */}
        <div className="bg-terminal-card border border-terminal-border rounded p-4">
          <h3 className="text-terminal-secondary font-mono mb-3">QUICK COMMANDS:</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2 font-mono text-sm">
              <div className="text-terminal-accent">$ new-idea</div>
              <div className="ml-4 text-terminal-muted">Create new startup idea</div>
              
              <div className="text-terminal-accent">$ list-ideas</div>
              <div className="ml-4 text-terminal-muted">Show all ideas with status</div>
            </div>
            <div className="space-y-2 font-mono text-sm">
              <div className="text-terminal-accent">$ show-goals</div>
              <div className="ml-4 text-terminal-muted">Display validation goals</div>
              
              <div className="text-terminal-accent">$ demo-mode</div>
              <div className="ml-4 text-terminal-muted">Switch to demo account</div>
            </div>
          </div>
        </div>

        {/* Progress Tracking */}
        <div className="bg-terminal-card border border-terminal-border rounded p-4">
          <h3 className="text-terminal-secondary font-mono mb-3">VALIDATION PROGRESS:</h3>
          <div className="space-y-3 font-mono text-sm">
            <div>
              <div className="flex justify-between mb-1">
                <span>AI Recipe Generator</span>
                <span>65%</span>
              </div>
              <div className="bg-terminal-bg border border-terminal-muted rounded p-1">
                <div className="text-terminal-accent">████████████░░░░░░░░</div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span>Local Farmer Marketplace</span>
                <span>40%</span>
              </div>
              <div className="bg-terminal-bg border border-terminal-muted rounded p-1">
                <div className="text-terminal-secondary">████████░░░░░░░░░░░░</div>
              </div>
            </div>
          </div>
        </div>

        {/* Terminal Input */}
        <div className="bg-terminal-card border border-terminal-border rounded p-4">
          <div className="flex items-center space-x-2 font-mono">
            <span className="text-terminal-accent">startup_tracker:~$</span>
            <span className="terminal-cursor"></span>
            <span className="text-terminal-muted text-sm ml-auto">Type &apos;help&apos; for commands</span>
          </div>
        </div>
      </main>
    </div>
  )
}