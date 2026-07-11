export default function Header() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8">
      <div>
        <h2 className="text-2xl font-semibold">
          Dashboard
        </h2>
      </div>

      <input
        type="text"
        placeholder="Search..."
        className="rounded-xl border border-slate-300 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
      />
    </header>
  );
}