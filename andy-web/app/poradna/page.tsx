import type { Metadata } from 'next';
import BookingForm from './BookingForm';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Poradna | Andy Web',
  description:
    'Konzultace v oblasti tvorby webů pro začínající podnikatele, freelancery a malé firmy. Vyberte si balíček a rezervujte termín.',
};

const packages = [
  {
    id: 'rychla',
    name: 'Rychlá konzultace',
    duration: '30 min',
    price: '1 500 Kč',
    tagline: 'Jedna konkrétní otázka — jasná odpověď.',
    features: [
      'Analýza vašeho dotazu předem',
      'Videohovor nebo telefonát',
      'Shrnutí s doporučeními písemně',
    ],
    highlighted: false,
  },
  {
    id: 'strategicka',
    name: 'Strategická schůzka',
    duration: '90 min',
    price: '3 500 Kč',
    tagline: 'Návrh řešení a konkrétní roadmapa pro váš web.',
    features: [
      'Audit stávajícího webu / projektu',
      'Doporučení technologie a přístupu',
      'Roadmapa dalších kroků',
      '30 min follow-up zdarma',
    ],
    highlighted: true,
  },
  {
    id: 'mentoring',
    name: 'Mentoring měsíc',
    duration: '4× 60 min',
    price: '9 900 Kč',
    tagline: 'Průvodce při budování webu po celý měsíc.',
    features: [
      'Čtyři schůzky v průběhu měsíce',
      'Přístup přes e-mail mezi setkáními',
      'Code review vybraných úseků',
      'Přizpůsobeno vašemu tempu a cíli',
    ],
    highlighted: false,
  },
];

const steps = [
  {
    number: '1',
    title: 'Vyberte balíček',
    description:
      'Zvolte rozsah konzultace podle vašich potřeb a vyplňte formulář.',
  },
  {
    number: '2',
    title: 'Potvrdím termín',
    description:
      'Ozvu se vám do 24 hodin s potvrzením nebo návrhem alternativního termínu.',
  },
  {
    number: '3',
    title: 'Setkáme se online',
    description:
      'Provedeme konzultaci přes videohovor a vy odejdete s jasným plánem.',
  },
];

export default async function PoradnaPage({
  searchParams,
}: {
  searchParams: Promise<{ balicek?: string }>;
}) {
  const { balicek } = await searchParams;

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950 dark:bg-[#090909] dark:text-zinc-100">
      <main className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-12">
        {/* Hero */}
        <section className="mx-auto max-w-4xl">
          <div className="space-y-5">
            <p className="inline-flex rounded-full bg-black/5 px-4 py-1 text-sm font-semibold text-black dark:bg-zinc-800 dark:text-zinc-200">
              Poradna
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Pomohu vám s webem.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-zinc-700 dark:text-zinc-300">
              Konzultace pro začínající podnikatele, freelancery a malé firmy —
              od strategie a výběru technologie po konkrétní technické
              rozhodnutí.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#rezervace"
                className="inline-flex items-center rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#090909]"
              >
                Rezervovat konzultaci
              </a>
              <a
                href="#kontakt"
                className="inline-flex items-center rounded-xl border border-zinc-200 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900 dark:focus-visible:ring-offset-[#090909]"
              >
                Položit dotaz
              </a>
            </div>
          </div>
        </section>

        {/* Ceník */}
        <section
          id="cenik"
          aria-labelledby="cenik-heading"
          className="mx-auto mt-20 max-w-4xl"
        >
          <div className="mb-8 space-y-2">
            <h2
              id="cenik-heading"
              className="text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              Balíčky poradenství
            </h2>
            <p className="text-base text-zinc-600 dark:text-zinc-400">
              Vyberte rozsah, který sedí vašim potřebám. Vše probíhá online.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {packages.map((pkg) => (
              <article
                key={pkg.id}
                className={`relative flex flex-col rounded-3xl border p-6 transition hover:-translate-y-1 ${
                  pkg.highlighted
                    ? 'border-indigo-500 bg-white shadow-md ring-2 ring-indigo-500 dark:bg-zinc-950'
                    : 'border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950'
                }`}
              >
                {pkg.highlighted && (
                  <span className="mb-4 inline-flex w-fit rounded-full bg-indigo-600 px-3 py-0.5 text-xs font-semibold uppercase tracking-[0.15em] text-white">
                    Doporučeno
                  </span>
                )}
                <div className="mb-1 flex items-start justify-between gap-2">
                  <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">
                    {pkg.name}
                  </h3>
                  <span className="shrink-0 rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                    {pkg.duration}
                  </span>
                </div>
                <p className="text-2xl font-bold text-zinc-950 dark:text-white">
                  {pkg.price}
                </p>
                <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                  {pkg.tagline}
                </p>
                <ul className="mt-5 flex flex-col gap-2">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-300"
                    >
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6">
                  <a
                    href={`/poradna?balicek=${pkg.id}#rezervace`}
                    className={`inline-flex w-full items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950 ${
                      pkg.highlighted
                        ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                        : 'border border-zinc-200 bg-zinc-50 text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800'
                    }`}
                  >
                    Vybrat
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Rezervace */}
        <section
          id="rezervace"
          aria-labelledby="rezervace-heading"
          className="mx-auto mt-20 max-w-4xl"
        >
          <div className="mb-8 space-y-2">
            <h2
              id="rezervace-heading"
              className="text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              Rezervace konzultace
            </h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            {/* Jak to probíhá */}
            <div className="flex flex-col gap-6">
              <p className="text-base text-zinc-600 dark:text-zinc-400">
                Rezervace je jednoduchá. Vyplňte formulář a já se vám ozvu do 24
                hodin.
              </p>
              <ol className="flex flex-col gap-6">
                {steps.map((step) => (
                  <li key={step.number} className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
                      {step.number}
                    </span>
                    <div>
                      <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                        {step.title}
                      </p>
                      <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Formulář */}
            <BookingForm defaultPackage={balicek} />
          </div>
        </section>

        {/* Kontakt */}
        <section
          id="kontakt"
          aria-labelledby="kontakt-heading"
          className="mx-auto mt-20 max-w-4xl"
        >
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              <h2
                id="kontakt-heading"
                className="text-2xl font-semibold tracking-tight sm:text-3xl"
              >
                Nevíte, který balíček zvolit?
              </h2>
              <p className="text-base text-zinc-600 dark:text-zinc-400">
                Napište mi. Rád vám poradím, co dává smysl pro váš konkrétní
                případ — bez závazku.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
    </div>
  );
}
