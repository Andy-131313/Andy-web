import type { Metadata } from 'next';
import ContactForm from '../poradna/ContactForm';

export const metadata: Metadata = {
  title: 'Helpdesk | Andy Web',
  description:
    'Helpdesk pro technické dotazy a rychlou podporu ohledně webů, nasazení a úprav.' ,
};

export default function HelpdeskPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950 dark:bg-[#090909] dark:text-zinc-100">
      <main className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-12">
        <section className="mx-auto max-w-4xl">
          <div className="space-y-5">
            <p className="inline-flex rounded-full bg-black/5 px-4 py-1 text-sm font-semibold text-black dark:bg-zinc-800 dark:text-zinc-200">
              Helpdesk
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Potřebujete technickou pomoc?
            </h1>
            <p className="max-w-2xl text-base leading-8 text-zinc-700 dark:text-zinc-300">
              Napište svůj dotaz sem — řešíme technické potíže, chyby nasazení a
              rychlé úpravy webů.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#kontakt"
                className="inline-flex items-center rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#090909]"
              >
                Napsat dotaz
              </a>
            </div>
          </div>
        </section>

        <section id="kontakt" aria-labelledby="kontakt-heading" className="mx-auto mt-12 max-w-4xl">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              <h2 id="kontakt-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Rychlá technická pomoc
              </h2>
              <p className="text-base text-zinc-600 dark:text-zinc-400">
                Popište problém co nejdetailněji (chybové hlášky, kroky,
                očekávané chování). Odezva obvykle do 24 hodin.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
    </div>
  );
}
