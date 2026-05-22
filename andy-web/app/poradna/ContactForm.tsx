'use client';

import { useActionState } from 'react';
import { askQuestion, type ActionState } from './actions';

const initialState: ActionState = { status: 'idle' };

export default function ContactForm() {
  const [state, action, isPending] = useActionState(askQuestion, initialState);

  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950">
      {state.status === 'success' ? (
        <div className="flex flex-col items-center gap-4 py-6 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30">
            <svg
              className="h-6 w-6 text-indigo-600 dark:text-indigo-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <p className="text-base font-medium text-zinc-900 dark:text-zinc-100">
            {state.message}
          </p>
        </div>
      ) : (
        <form action={action} className="flex flex-col gap-5">
          {state.status === 'error' && (
            <p
              role="alert"
              className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400"
            >
              {state.message}
            </p>
          )}

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="contact-email"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Váš e-mail <span aria-hidden="true">*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="vas@email.cz"
              className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-600"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="contact-question"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Váš dotaz <span aria-hidden="true">*</span>
            </label>
            <textarea
              id="contact-question"
              name="question"
              rows={4}
              required
              placeholder="Na co se chcete zeptat?"
              className="resize-none rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-600"
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:opacity-60 dark:focus-visible:ring-offset-zinc-950"
          >
            {isPending ? 'Odesílám…' : 'Odeslat dotaz'}
          </button>
        </form>
      )}
    </div>
  );
}
