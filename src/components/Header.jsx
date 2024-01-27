export default function Header() {
  return (
    <>
      <h1 className="text-[2rem] font-bold text-black dark:text-white">Notes</h1>
      <button className="rounded-lg bg-gray-300 px-3 py-1 text-black hover:shadow-lg">
        Toggle dark mode
      </button>
    </>
  );
}
