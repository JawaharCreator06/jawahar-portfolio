'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

/**
 * TS-friendly alias for motion.div so common props like className/style work
 * without fighting framer-motion's strict intrinsic types.
 */
const MotionDiv: any = motion.div

export type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  distance?: number
  duration?: number
  ease?: string
}

/**
 * Reveal - simple scroll-reveal wrapper that respects prefers-reduced-motion.
 * Usage: <Reveal delay={0.12}><YourElement/></Reveal>
 */
export default function Reveal({
  children,
  className = '',
  delay = 0,
  distance = 12,
  duration = 0.6,
  ease = 'easeOut'
}: RevealProps) {
  const shouldReduce = useReducedMotion()

  // If user prefers reduced motion, render children without motion wrapper
  if (shouldReduce) {
    return <div className={className}>{children}</div>
  }

  const variants = {
    hidden: { opacity: 0, y: distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay, duration, ease }
    }
  }

  return (
    <MotionDiv
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={variants}
    >
      {children}
    </MotionDiv>
  )
}
