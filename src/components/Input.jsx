import searchIcon from "../assets/images/icon-search.svg";

export default function Input({ word, onSetWord, isInvalid, handleSubmit }) {
  return (
    <>
      <form onSubmit={handleSubmit} className="mt-[clamp(1.25rem,0.9419rem+1.3146vw,2.125rem)] relative ">
        <input
          value={word}
          onChange={(e) => onSetWord(e.target.value)}
          type="text"
          className={`${
            isInvalid ? "outline-[1.5px] outline-10 " : ""
          } bg-7 w-full dark:placeholder:text-white/40 dark:bg-2 dark:text-white txt-3 rounded-xl p-4 font-bold text-3 placeholder:text-3/20 placeholder:font-bold`}
          placeholder="Search for any word..."
        />
        <img
          src={searchIcon}
          onClick={handleSubmit}
          className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-4"
        />
      </form>
      <p className={`text-10 txt-4 mt-1 ${isInvalid ? "opacity-100" : "opacity-0"}`}>Whoops, can't be empty...</p>
    </>
  );
}
