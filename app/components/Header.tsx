'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const sentinelRef = useRef<HTMLDivElement>(null)

  // IntersectionObserver instead of scroll events — zero layout thrashing
  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting)
      },
      { threshold: 0, rootMargin: '-100px 0px 0px 0px' }
    )

    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'unset'
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  const navLinkClass = `transition-colors duration-300 font-medium tracking-wide whitespace-nowrap text-sm ${
    scrolled ? 'text-black hover:text-gold' : 'text-white hover:text-gold'
  }`

  const mobileLink = "flex items-center px-8 py-4 text-black hover:bg-gold/10 hover:text-gold transition-colors duration-200 font-medium"

  const navItems = [
    { href: '#over-ons', label: 'Over Ons', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { href: '#galerij', label: 'Galerij', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { href: '#ijssoorten', label: 'IJssmaken', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
    { href: '#openingstijden', label: 'Openingstijden', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    { href: '#geschiedenis', label: 'Geschiedenis', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
  ]

  return (
    <>
      {/* Invisible sentinel placed at bottom of hero viewport for IntersectionObserver */}
      <div ref={sentinelRef} className="absolute top-[100svh] left-0 h-px w-px pointer-events-none" aria-hidden />

      <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 lg:px-8 pt-4 md:pt-6">
        <div
          className={`transition-all duration-500 ease-out rounded-full px-6 md:px-8 py-3 md:py-4 max-w-7xl mx-auto ${
            scrolled
              ? 'bg-white/95 backdrop-blur-xl shadow-2xl'
              : 'bg-white/10 backdrop-blur-md shadow-lg'
          }`}
        >
          <div className="flex items-center justify-between">
            <a href="#home" className="flex items-center flex-shrink-0">
              <Image
                src="/italialogo.png"
                alt="IJssalon Italia Logo"
                width={140}
                height={70}
                className={`h-8 md:h-10 w-auto transition-all duration-500 hover:scale-105 ${
                  scrolled ? 'brightness-100' : 'brightness-0 invert'
                }`}
                priority
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-5 lg:space-x-6">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className={navLinkClass}>
                  {item.label}
                </a>
              ))}
              <a
                href="tel:+31611318094"
                className="bg-gold hover:bg-gold-dark text-white px-5 py-2 rounded-full transition-all duration-300 font-semibold text-xs shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap"
              >
                Contact
              </a>
            </nav>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden p-2 -m-2 transition-colors duration-300 ${
                scrolled ? 'text-black' : 'text-white'
              }`}
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeMenu} />

        <div
          className={`absolute top-24 right-4 left-4 bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 ${
            menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <nav className="py-6">
            <a href="#home" onClick={closeMenu} className={mobileLink}>
              <svg className="w-5 h-5 mr-3 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </a>

            {navItems.map((item, i) => (
              <div key={item.href}>
                <div className="h-px bg-gray-100 mx-6" />
                <a href={item.href} onClick={closeMenu} className={mobileLink}>
                  <svg className="w-5 h-5 mr-3 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                  {item.label}
                </a>
              </div>
            ))}

            <div className="h-px bg-gray-100 mx-6 mb-4" />
            <div className="px-6">
              <a
                href="tel:+31611318094"
                onClick={closeMenu}
                className="flex items-center justify-center w-full bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-full transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Bel Ons
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
