'use client'
import { motion } from 'framer-motion'

const MotionArticle: any = motion.article

export const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

export default function ProjectCard({ title, description, tags, github, live }: any) {
  return (
    <MotionArticle
      variants={cardVariants}
      whileHover={{ y: -8, boxShadow: '0 18px 40px rgba(2,6,23,0.08)' }}
      className="card cursor-pointer transition-transform bg-white dark:bg-slate-800 border dark:border-slate-700"
    >
      <div className="flex items-start gap-4">
        <div style={{ width: 84, height: 64, background: '#f8fafc', borderRadius: 8, flexShrink: 0 }} />

        <div className="flex-1">
          <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100">{title}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{description}</p>

          <div className="mt-3 flex flex-wrap gap-2">
            {tags?.map((t: string) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>

          <div className="mt-3 flex gap-3">
            <a href={live} target="_blank" rel="noopener noreferrer" className="text-sm text-[rgb(var(--accent))]">Live</a>
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-700 dark:text-slate-300">GitHub</a>
          </div>
        </div>
      </div>
    </MotionArticle>
  )
}
