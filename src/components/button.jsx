 export default function Button({ text, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="
        px-6 py-2.5
        rounded-md
        font-semibold
        tracking-wide
        transition-all duration-200

        /* LIGHT MODE (cream background safe) */
        bg-slate-900
        text-white
        border border-slate-900
        shadow-sm
        hover:bg-slate-800

        /* DARK MODE */
        dark:bg-slate-200
        dark:text-slate-900
        dark:border-slate-300
        dark:hover:bg-white
      "
    >
      {text}
    </button>
  );
}
