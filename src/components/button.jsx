export default function Button({ text, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="
        px-7 py-3
        rounded-full
        font-semibold
        tracking-wide

        transition-all duration-300 ease-in-out
        transform

        /* BASE */
        bg-transparent
        text-white
        border border-sky-300
        shadow-md

        /* HOVER */
        hover:scale-105
        hover:bg-gray-900
        hover:text-white
        hover:border-sky-400
        hover:opacity-90

        /* ACTIVE */
        active:scale-95

        /* DARK MODE */
        dark:bg-slate-900
        dark:text-sky-400
        dark:border-sky-500
        dark:hover:bg-slate-800
        dark:hover:text-sky-300
      "
    >
      {text}
    </button>
  );
}
