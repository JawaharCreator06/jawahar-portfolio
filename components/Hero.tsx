'use client'
import { motion } from 'framer-motion'

// Simpler, safe aliases for motion elements (use `any` to avoid strict prop typing issues)
const MotionH1: any = motion.h1
const MotionP: any = motion.p
const MotionDiv: any = motion.div

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-5xl mx-auto px-6 py-20 flex items-center gap-8">
        <div className="flex-1">
          <MotionH1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-bold"
          >
            Jawahar T
          </MotionH1>

          <MotionP
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl text-slate-600"
          >
            Blending intelligent systems with exceptional web experiences
          </MotionP>

          <MotionDiv
            className="mt-6 flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <a
              href="#projects"
              className="inline-flex items-center px-4 py-2 rounded-md bg-[rgb(var(--accent))] text-white"
            >
              View projects
            </a>
            <a href="#contact" className="inline-flex items-center px-4 py-2 rounded-md border">
              Contact
            </a>
          </MotionDiv>
        </div>

        <MotionDiv
          className="w-40 h-40 rounded-xl bg-slate-100 flex items-center justify-center"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.35 }}
        >
          <div className="text-slate-500">Avatar</div>
        </MotionDiv>
      </div>
    </section>
  )
}
