const menuItems = [
  "Dashboard",
  "Upload Notes",
  "Summarize",
  "Explain",
  "Quiz",
  "Flashcards",
  "Study Planner",
  "Settings",
];

export default function Sidebar() {
  return (
    <aside className="w-72 border-r border-slate-200 bg-white">
      <div className="border-b border-slate-200 p-6">
        <h1 className="text-2xl font-bold text-blue-600">
          AI StudyMate
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          AI Powered Learning
        </p>
      </div>

      <nav className="p-4">
        {menuItems.map((item) => (
          <button
            key={item}
            className="mb-2 w-full rounded-xl px-4 py-3 text-left transition hover:bg-slate-100"
          >
            {item}
          </button>
        ))}
      </nav>
    </aside>
  );
}