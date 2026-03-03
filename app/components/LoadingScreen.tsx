'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

export default function LoadingScreen() {
  const [isDone, setIsDone] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = 'unset'
        setIsDone(true)
      },
    })

    tl.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.92 },
      { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out' }
    )
    .fromTo(
      lineRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 1, ease: 'power3.inOut' },
      '-=0.3'
    )
    .to({}, { duration: 0.4 })
    .to(logoRef.current, {
      scale: 1.15,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.in',
    })
    .to(lineRef.current, { opacity: 0, duration: 0.4, ease: 'power2.in' }, '-=0.6')
    .to(overlayRef.current, {
      yPercent: -100,
      duration: 0.9,
      ease: 'power4.inOut',
    })

    return () => {
      tl.kill()
      document.body.style.overflow = 'unset'
    }
  }, [])

  if (isDone) return null

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{ backgroundColor: '#F5F0EB' }}
    >
      <div ref={logoRef} className="flex flex-col items-center opacity-0">
        <Image
          src="/italialogo.png"
          alt="IJssalon Italia Logo"
          width={300}
          height={150}
          className="w-48 md:w-64 lg:w-72 h-auto"
          priority
        />
      </div>
      <div className="mt-8 w-24 md:w-32 overflow-hidden">
        <div
          ref={lineRef}
          className="h-[2px] bg-gold origin-left"
          style={{ transform: 'scaleX(0)' }}
        />
      </div>
    </div>
  )
}
