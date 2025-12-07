'use client'
import { motion } from 'framer-motion'

// Alias for motion.article as any to avoid strict prop typing issues
const MotionArticle: any = motion.article

export default function ProjectCard({ title, description, tags, github, live }: any) {
  return (
    <MotionArticle
      whileHover={{ y: -6, boxShadow: '0 10px 30px rgba(2,6,23,0.08)' }}
      className="p-6 border rounded-lg bg-white"
    >
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-slate-600 mt-2">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t: string) => (
          <span key={t} className="text-xs px-2 py-1 border rounded">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4 flex gap-3">
        <a href={live} target="_blank" rel="noreferrer" className="text-sm">
          Live
        </a>
        <a href={github} target="_blank" rel="noreferrer" className="text-sm">
          GitHub
        </a>
      </div>
    </MotionArticle>
  )
}
