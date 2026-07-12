import { Link } from "react-router-dom";
import Navbar from "../components/landing/Navbar";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#09090B] text-white">

      <Navbar />

      <section className="flex min-h-screen items-center justify-center">

        <div className="text-center">

          <h1 className="text-7xl font-black leading-tight">

            Master Every Subject

            <br />

            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              One Prompt At A Time
            </span>

          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-xl text-gray-400">
            AI-powered summaries, explanations,
            flashcards, quizzes and study plans
            for every student.
          </p>

          <div className="mt-10 flex justify-center gap-6">

            <Link
  to="/dashboard"
  className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold transition hover:scale-105"
>
  Start Learning
</Link>

            <button className="rounded-xl border border-white/20 px-8 py-4 text-lg transition hover:border-blue-500">
              View Features
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}