'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<null | { ok: boolean; error?: string }>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      })
      const json = await res.json()
      if (res.ok && json.ok) {
        setStatus({ ok: true })
        setName(''); setEmail(''); setMessage('')
      } else {
        setStatus({ ok: false, error: json?.error || 'Unknown error' })
      }
    } catch (err: any) {
      setStatus({ ok: false, error: err?.message || String(err) })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl">
      <div className="grid grid-cols-1 gap-4">
        <label className="flex flex-col">
          <span className="text-sm font-medium">Name</span>
          <input required value={name} onChange={e => setName(e.target.value)} className="mt-1 p-2 border rounded" />
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium">Email</span>
          <input required type="email" value={email} onChange={e => setEmail(e.target.value)} className="mt-1 p-2 border rounded" />
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium">Message</span>
          <textarea required value={message} onChange={e => setMessage(e.target.value)} className="mt-1 p-2 border rounded h-32" />
        </label>
      </div>

      <div className="mt-4 flex items-center gap-4">
        <button type="submit" className="px-4 py-2 rounded bg-[rgb(var(--accent))] text-white" disabled={loading}>
          {loading ? 'Sending...' : 'Send message'}
        </button>

        {status && !status.ok && <div className="text-sm text-red-600">Error: {status.error}</div>}
        {status && status.ok && <div className="text-sm text-green-600">Message sent — thank you!</div>}
      </div>
    </form>
  )
}
