'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const active = theme === 'system' ? systemTheme : theme

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(active === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-md border"
    >
      {active === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}
