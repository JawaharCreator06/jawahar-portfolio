'use client'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="sticky top-0 z-30 header backdrop-blur-sm border-b dark:border-slate-700">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/">
          <span className="font-semibold text-lg text-slate-900 dark:text-slate-100">Jawahar T</span>
        </Link>

        <nav className="flex items-center gap-4">
          <a href="#projects" className="text-sm text-slate-700 dark:text-slate-300">Projects</a>
          <a href="#about" className="text-sm text-slate-700 dark:text-slate-300">About</a>
          <a href="#contact" className="text-sm text-slate-700 dark:text-slate-300">Contact</a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
