import { InstructorProfile } from "@/components/sections/InstructorProfile";

export default function InstructorsPage() {
  return (
    <div className="min-h-[70vh] bg-zinc-50 px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20 dark:bg-[#050508]">
      <div className="mx-auto max-w-5xl">
        <header className="mb-10 text-center lg:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F59E0B]">
            GenValue Academy
          </p>
          <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-white">
            Instructors
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-zinc-600 sm:text-lg dark:text-slate-400">
            Learn directly from practitioners who ship with AI every week - not slides-first theorists.
          </p>
        </header>

        <InstructorProfile />
      </div>
    </div>
  );
}
