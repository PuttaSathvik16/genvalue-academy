"use client";

import { contactFormSchema, COURSE_INTEREST_OPTIONS, type ContactFormValues } from "@/lib/contact-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

function Spinner() {
  return (
    <svg
      className="h-5 w-5 animate-spin text-amber-950 motion-reduce:animate-none"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

function fieldErrorClass(hasError: boolean) {
  return hasError
    ? "border-red-500/80 focus:border-red-500 focus:ring-red-500/30"
    : "border-zinc-300 focus:border-[#2563EB]/60 focus:ring-[#2563EB]/25 dark:border-white/15";
}

export function ContactForm() {
  const [toastOpen, setToastOpen] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      courseInterest: "AI Tools Mastery",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        setSubmitError("Something went wrong. Please try again.");
        return;
      }
      reset();
      setToastOpen(true);
      window.setTimeout(() => setToastOpen(false), 5000);
    } catch {
      setSubmitError("Network error. Check your connection and try again.");
    }
  };

  return (
    <>
      <div
        className="rounded-3xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-100 p-6 shadow-xl ring-1 ring-zinc-200 sm:p-8 dark:border-white/10 dark:from-[#0D1B2A] dark:to-[#050508] dark:ring-white/5"
        aria-labelledby="contact-form-heading"
      >
        <h2 id="contact-form-heading" className="text-xl font-bold text-zinc-900 sm:text-2xl dark:text-white">
          Send a message
        </h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-slate-400">
          Fields marked <span className="text-[#FBBF24]">*</span> are required.
        </p>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-zinc-800 dark:text-slate-300">
              Full name <span className="text-[#FBBF24]">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              autoComplete="name"
              className={`mt-1.5 w-full rounded-xl border bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-600 ${fieldErrorClass(!!errors.fullName)}`}
              placeholder="Jane Doe"
              {...register("fullName")}
            />
            {errors.fullName ? (
              <p className="mt-1.5 text-sm text-red-400" role="alert">
                {errors.fullName.message}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-800 dark:text-slate-300">
              Email <span className="text-[#FBBF24]">*</span>
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              className={`mt-1.5 w-full rounded-xl border bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-600 ${fieldErrorClass(!!errors.email)}`}
              placeholder="you@company.com"
              {...register("email")}
            />
            {errors.email ? (
              <p className="mt-1.5 text-sm text-red-400" role="alert">
                {errors.email.message}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-zinc-800 dark:text-slate-300">
              Phone <span className="text-zinc-500 dark:text-slate-500">(optional)</span>
            </label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              className={`mt-1.5 w-full rounded-xl border bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-600 ${fieldErrorClass(!!errors.phone)}`}
              placeholder="+1 · ··· ···· ····"
              {...register("phone")}
            />
            {errors.phone ? (
              <p className="mt-1.5 text-sm text-red-400" role="alert">
                {errors.phone.message}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor="courseInterest" className="block text-sm font-medium text-zinc-800 dark:text-slate-300">
              Course interest <span className="text-[#FBBF24]">*</span>
            </label>
            <select
              id="courseInterest"
              className={`mt-1.5 w-full rounded-xl border bg-white px-4 py-3 text-zinc-900 focus:outline-none focus:ring-2 dark:bg-[#0a1520] dark:text-white ${fieldErrorClass(!!errors.courseInterest)}`}
              {...register("courseInterest")}
            >
              {COURSE_INTEREST_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.courseInterest ? (
              <p className="mt-1.5 text-sm text-red-400" role="alert">
                {errors.courseInterest.message}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-zinc-800 dark:text-slate-300">
              Message <span className="text-[#FBBF24]">*</span>
            </label>
            <textarea
              id="message"
              rows={5}
              className={`mt-1.5 w-full resize-y rounded-xl border bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-600 ${fieldErrorClass(!!errors.message)}`}
              placeholder="Tell us about your goals, timeline, or questions."
              {...register("message")}
            />
            {errors.message ? (
              <p className="mt-1.5 text-sm text-red-400" role="alert">
                {errors.message.message}
              </p>
            ) : null}
          </div>

          {submitError ? (
            <p className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300" role="alert">
              {submitError}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
            aria-label={isSubmitting ? "Submitting contact form" : "Submit contact form"}
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#F59E0B] px-6 text-base font-semibold text-[#0D1B2A] shadow-lg shadow-amber-500/20 transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B]"
          >
            {isSubmitting ? (
              <>
                <Spinner />
                Sending…
              </>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>

      {toastOpen ? (
        <div
          className="fixed bottom-6 left-1/2 z-[100] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-xl border border-[#10B981]/40 bg-white px-4 py-3 text-center text-sm font-medium text-zinc-900 shadow-2xl ring-1 ring-[#10B981]/30 sm:bottom-8 dark:bg-[#0D1B2A] dark:text-white"
          role="status"
          aria-live="polite"
        >
          Thanks! We&apos;ll reply within 24 hours.
        </div>
      ) : null}
    </>
  );
}
