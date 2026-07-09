'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Shared scroll-reveal wrapper: opacity + translateY + blur, matching the
 * signature used across the site's GSAP sections (ToGo, NewsSection, etc.)
 * but implemented with a plain CSS transition since the motion is
 * predetermined (not gesture-driven) and this keeps it interruptible/cheap.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className = '',
  id,
}: {
  children: React.ReactNode
  delay?: number
  y?: number
  className?: string
  id?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          obs.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      id={id}
      className={className}
      style={{
        transitionProperty: 'opacity, transform, filter',
        transitionDuration: '900ms',
        transitionTimingFunction: 'var(--ease-out-strong)',
        transitionDelay: `${delay}ms`,
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : `translateY(${y}px)`,
        filter: shown ? 'blur(0px)' : 'blur(6px)',
        willChange: 'opacity, transform, filter',
      }}
    >
      {children}
    </div>
  )
}
