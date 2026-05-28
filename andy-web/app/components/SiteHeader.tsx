'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Domů' },
  { href: '/poradna', label: 'Poradna' },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-zinc-50/80 backdrop-blur-md dark:border-zinc-800/60 dark:bg-[#090909]/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10 lg:px-12">
        <Link
          href="/"
          className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-zinc-950 dark:text-zinc-100"
        >
          ANDRYSEK.DEV
        </Link>

        <nav className="flex items-center gap-6">
          {links.map(({ href, label }) => {
            const isActive =
              href === '/'
                ? pathname === '/'
                : pathname === href || pathname.startsWith(href + '/');

            return (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-zinc-950 dark:text-zinc-100'
                    : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200'
                }`}
              >
                {label}
                {isActive && (
                  <span className="ml-1 inline-block h-1 w-1 rounded-full bg-indigo-500 align-middle" />
                )}
              </Link>
            );
          })}
        </nav>

        <a
          href="https://helpdesk.andy-it.cz"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 inline-flex items-center rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#090909]"
        >
          Helpdesk
        </a>
      </div>
    </header>
  );
}
