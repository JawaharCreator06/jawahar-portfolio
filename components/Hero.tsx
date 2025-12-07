'use client'
import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'

const MotionSection: any = motion.section
const MotionH1: any = motion.h1
const MotionP: any = motion.p
const MotionDiv: any = motion.div

export default function Hero() {
  const reduce = useReducedMotion()

  const appear = reduce
    ? {}
    : {
        initial: { y: 16, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.6 }
      }

  const appearDelay = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { y: 12, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: { delay, duration: 0.6 }
        }

  return (
    <MotionSection className="py-20 px-6 max-w-6xl mx-auto">
      <div className="hero-grid">

        <div>
          <MotionH1 {...appear} className="text-5xl font-extrabold leading-tight" style={{ lineHeight: 1.02 }}>
            <span style={{ background: 'linear-gradient(90deg,#2563eb,#7c3aed)', WebkitBackgroundClip: 'text', color:'transparent' }}>
              Jawahar T
            </span>
          </MotionH1>

          <MotionP {...appearDelay(0.12)} className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-xl">
            Blending intelligent systems with exceptional web experiences — I build fast, elegant, and highly functional web applications.
          </MotionP>

          <MotionDiv {...appearDelay(0.25)} className="mt-6 flex items-center gap-4">
            <a href="#projects" className="btn-primary">View projects</a>
            <a href="#contact" className="btn-ghost">Contact</a>
          </MotionDiv>

          <MotionDiv {...appearDelay(0.35)} className="mt-8 flex flex-wrap gap-3">
            <span className="tag">Next.js</span>
            <span className="tag">TypeScript</span>
            <span className="tag">Tailwind</span>
            <span className="tag">Framer Motion</span>
          </MotionDiv>
        </div>

        <MotionDiv {...(reduce ? {} : { initial:{ scale:0.96, opacity:0 }, animate:{ scale:1, opacity:1 }, transition:{ delay:0.18, duration:0.5 } })} className="relative">
          <div className="hero-card">
            <div style={{ width: '100%', height: 220, position: 'relative' }}>
              <Image src="/blob-1.svg" alt="decorative background" fill style={{ objectFit:'cover' }} />
            </div>

            <div className="mt-4">
              <div className="text-sm text-slate-500 dark:text-slate-400">Featured</div>
              <h3 className="text-lg font-semibold mt-2 text-slate-900 dark:text-slate-100">CineVibe</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">A smart movie-discovery app that recommends films based on your mood, genre and rating preferences.</p>

              <div className="mt-4 flex gap-3">
                <a href="https://cinevibe07.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-sm text-[rgb(var(--accent))]">Live</a>
                <a href="https://github.com/JawaharCreator06/cinevibe" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-700 dark:text-slate-300">GitHub</a>
              </div>
            </div>
          </div>

          <MotionDiv {...(reduce ? {} : { animate:{ y:[0,-4,0] }, transition:{ duration:3.5, repeat:Infinity } })} className="absolute -top-4 -right-4 w-16 h-16 rounded-xl bg-white/80 backdrop-blur shadow-lg border border-slate-200 flex items-center justify-center">
            <span className="text-slate-500 text-sm">Avatar</span>
          </MotionDiv>
        </MotionDiv>
      </div>
    </MotionSection>
  )
}
