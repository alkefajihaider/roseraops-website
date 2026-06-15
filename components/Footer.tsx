import { COMPANY, FOOTER_LINKS, MAILTO } from '@/lib/constants';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink/10 bg-ivory">
      <div className="container-px py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr] lg:grid-cols-[1.5fr_1fr_auto]">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <svg width="26" height="26" viewBox="0 0 32 32" fill="none" aria-hidden>
                <path d="M16 17v11" stroke="#2F6F5E" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M16 24c-4 0-7-2-8-5 4-1 7 1 8 5Z" fill="#AFC7B5" />
                <circle cx="16" cy="11" r="7.5" fill="#FBEDED" stroke="#B86F6F" strokeWidth="1.1" />
                <path d="M16 5.5c2.4 1.6 3.8 3.4 3.8 5.5S18.4 15 16 16.5C13.6 15 12.2 13.1 12.2 11S13.6 7.1 16 5.5Z" fill="#D8A7A7" />
              </svg>
              <span className="font-display text-lg font-semibold tracking-tight text-ink">
                Rosera<span className="text-emerald">Ops</span>
              </span>
            </div>
            <p className="mt-4 font-display text-base italic text-ink/70">
              {COMPANY.tagline}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink/65">
              Enterprise AI consulting and training for cost discipline, workflow
              quality, and human-first productivity.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="text-[11px] font-semibold uppercase tracking-eyebrow text-ink/65">
              Explore
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2.5">
              {FOOTER_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="link-quiet">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-eyebrow text-ink/65">
              Contact
            </p>
            <a
              href={`mailto:${COMPANY.email}`}
              className="mt-4 block text-sm font-medium text-ink/80 transition-colors hover:text-emerald"
            >
              {COMPANY.email}
            </a>
            <a href={MAILTO} className="btn-primary mt-5 text-xs">
              Start a conversation
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-ink/8 pt-6 text-xs text-ink/65 sm:flex-row sm:items-center">
          <p>
            © {year} {COMPANY.name}. {COMPANY.domain}
          </p>
          <p>Prune AI waste. Let human intelligence bloom.</p>
        </div>
      </div>
    </footer>
  );
}
