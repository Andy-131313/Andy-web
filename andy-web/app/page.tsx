import Image from 'next/image';
import { HeroSection } from './components/ui/experience-hero';
import OrbitingSkills from './components/ui/orbiting-skills';

const projects = [
  {
    title: 'Osobní portfolio',
    description:
      'Responzivní web s přehledem mých dovedností a předchozích projektů vytvořených pro klienty i vlastní potřebu.',
    url: 'https://example.com/portfolio',
    role: 'Design, vývoj, nasazení',
    span: 'col-span-1 md:col-span-2 md:row-span-2',
    featured: true,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
  {
    title: 'E-shop pro místní značku',
    description:
      'Moderní obchodní stránka s katalogem produktů, košíkem a jednoduchou správou obsahu.',
    url: 'https://example.com/shop',
    role: 'Front-end a UX design',
    span: 'col-span-1',
    featured: false,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
  },
  {
    title: 'Rezervační systém',
    description:
      'Webová aplikace pro rezervace služeb s kalendářem, upozorněními a administrací.',
    url: 'https://example.com/booking',
    role: 'Vývoj interaktivního uživatelského rozhraní',
    span: 'col-span-1',
    featured: false,
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80',
  },
];

export default function Home() {
  return (
    <>
      <HeroSection />

      <OrbitingSkills />

      <div
        id="projekty"
        className="bg-zinc-50 dark:bg-[#090909] text-zinc-950 dark:text-zinc-100"
      >
        <main className="mx-auto flex max-w-6xl flex-col px-6 py-16 sm:px-10 lg:px-12">
          <section className="mx-auto flex max-w-4xl flex-col gap-8 w-full">
            <div className="space-y-4">
              <p className="inline-flex rounded-full bg-black/5 px-4 py-1 text-sm font-semibold text-black dark:bg-zinc-800 dark:text-zinc-200">
                Webové portfolio
              </p>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Vítejte na mém portfoliu.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-zinc-700 dark:text-zinc-300">
                Jmenuji se Andy a vytvářím moderní webové stránky. Tady najdete
                výběr projektů, které jsem navrhl a zrealizoval pro klienty i
                vlastní značky.
              </p>
              <a
                href="/poradna"
                className="inline-flex items-center text-sm font-semibold text-indigo-600 transition hover:text-indigo-500 dark:text-indigo-400"
              >
                Potřebujete poradit s webem? Navštivte poradnu →
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(180px,auto)]">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className={`group relative rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950 overflow-hidden ${project.span}`}
                >
                  {/* Background image */}
                  <div className="absolute inset-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover opacity-20 dark:opacity-10 group-hover:opacity-30 dark:group-hover:opacity-20 transition-opacity duration-500 scale-105 group-hover:scale-100"
                      sizes={project.featured ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/40 dark:from-zinc-950 dark:via-zinc-950/80 dark:to-zinc-950/40" />
                  </div>

                  {/* Gradient accent on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <h2 className={`font-semibold text-zinc-950 dark:text-white ${project.featured ? 'text-2xl' : 'text-lg'}`}>
                            {project.title}
                          </h2>
                          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                            {project.role}
                          </p>
                        </div>
                        <span className="shrink-0 rounded-full bg-indigo-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                          Web
                        </span>
                      </div>
                      <p className={`mt-4 leading-7 text-zinc-600 dark:text-zinc-300 ${project.featured ? 'text-base' : 'text-sm'}`}>
                        {project.description}
                      </p>
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 transition group-hover:gap-2 hover:text-indigo-500 dark:text-indigo-400"
                    >
                      Zobrazit projekt
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
                        <path d="M7 17L17 7M17 7H8M17 7V16" />
                      </svg>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
