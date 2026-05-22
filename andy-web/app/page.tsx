const projects = [
  {
    title: 'Osobní portfolio',
    description:
      'Responzivní web s přehledem mých dovedností a předchozích projektů vytvořených pro klienty i vlastní potřebu.',
    url: 'https://example.com/portfolio',
    role: 'Design, vývoj, nasazení',
  },
  {
    title: 'E-shop pro místní značku',
    description:
      'Moderní obchodní stránka s katalogem produktů, košíkem a jednoduchou správou obsahu.',
    url: 'https://example.com/shop',
    role: 'Front-end a UX design',
  },
  {
    title: 'Rezervační systém',
    description:
      'Webová aplikace pro rezervace služeb s kalendářem, upozorněními a administrací.',
    url: 'https://example.com/booking',
    role: 'Vývoj interaktivního uživatelského rozhraní',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950 dark:bg-[#090909] dark:text-zinc-100">
      <main className="mx-auto flex min-h-[calc(100vh-65px)] max-w-6xl flex-col justify-center px-6 py-16 sm:px-10 lg:px-12">
        <section className="mx-auto flex max-w-4xl flex-col gap-8">
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

          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold text-zinc-950 dark:text-white">
                      {project.title}
                    </h2>
                    <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                      {project.role}
                    </p>
                  </div>
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                    Web
                  </span>
                </div>
                <p className="mt-5 text-base leading-7 text-zinc-600 dark:text-zinc-300">
                  {project.description}
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center text-sm font-semibold text-indigo-600 transition hover:text-indigo-500 dark:text-indigo-400"
                >
                  Zobrazit projekt →
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
