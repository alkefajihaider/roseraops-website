'use client';

import { useEffect, useState } from 'react';
import { COMPANY, MAILTO, NAV_LINKS } from '@/lib/constants';

function RoseMark() {
  // Minimal rose-on-a-stem mark: a bloom built from petal arcs over a stem + leaf.
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <path d="M16 17v11" stroke="#2F6F5E" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M16 24c-4 0-7-2-8-5 4-1 7 1 8 5Z"
        fill="#AFC7B5"
        stroke="#2F6F5E"
        strokeWidth="0.8"
      />
      <circle cx="16" cy="11" r="7.5" fill="#FBEDED" stroke="#B86F6F" strokeWidth="1.1" />
      <path
        d="M16 5.5c2.4 1.6 3.8 3.4 3.8 5.5S18.4 15 16 16.5C13.6 15 12.2 13.1 12.2 11S13.6 7.1 16 5.5Z"
        fill="#D8A7A7"
      />
      <path d="M16 7.5v8" stroke="#B86F6F" strokeWidth="0.8" />
      <path d="M12.6 9.4 19.4 12.6M19.4 9.4 12.6 12.6" stroke="#B86F6F" strokeWidth="0.7" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled ? 'glass shadow-soft' : 'bg-transparent'
        }`}
      >
        <nav
          className="container-px flex h-16 items-center justify-between sm:h-[72px]"
          aria-label="Primary"
        >
          <a
            href="#home"
            className="flex items-center gap-2.5 rounded-lg"
            aria-label={`${COMPANY.name} home`}
          >
            <RoseMark />
            <span className="font-display text-xl font-semibold tracking-tight text-ink">
              Rosera<span className="text-emerald">Ops</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            <ul className="flex items-center gap-7">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="link-quiet">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a href={MAILTO} className="btn-primary">
              Start Conversation
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-ink/10 bg-card/60 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 h-0.5 w-5 bg-ink transition-all ${
                  open ? 'top-1.5 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-5 bg-ink transition-all ${
                  open ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 bg-ink transition-all ${
                  open ? 'top-1.5 -rotate-45' : 'top-3'
                }`}
              />
            </span>
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`glass absolute inset-x-0 top-full origin-top overflow-hidden border-t border-ink/5 shadow-soft transition-all duration-300 lg:hidden ${
          open ? 'visible max-h-[80vh] opacity-100' : 'invisible max-h-0 opacity-0'
        }`}
      >
        <ul className="container-px flex flex-col gap-1 py-4">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 text-base font-medium text-ink/80 transition-colors hover:bg-mist hover:text-emerald"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="px-1 pt-2">
            <a
              href={MAILTO}
              onClick={() => setOpen(false)}
              className="btn-primary w-full"
            >
              Start Conversation
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
