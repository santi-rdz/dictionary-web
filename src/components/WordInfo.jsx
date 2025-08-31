import playIcon from "../assets/images/icon-play.svg";
import LinkIcon from "../assets/images/icon-new-window.svg";
import { fontClasses } from "../utils";

export default function WordInfo({ wordOBJ, font }) {
  if (!wordOBJ) return null;

  const { word, phonetic, meanings, sourceUrls, phonetics } = wordOBJ;
  const audioURL = phonetics.find((p) => p.audio.endsWith("-us.mp3"))?.audio || phonetics[0]?.audio;

  function handleAudio() {
    const audio = new Audio(audioURL);
    if (audioURL) return audio.play();

    const utterence = new SpeechSynthesisUtterance(word);
    speechSynthesis.speak(utterence);
  }

  return (
    <main className="mt-[clamp(0.375rem, 0.1549rem + 0.939vw, 1rem)]">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="txt-1 font-bold">{word}</h1>
          <p className="text-9 txt-3">{phonetic}</p>
        </div>
        <button onClick={handleAudio} className="cursor-pointer">
          <img src={playIcon} alt="" />
        </button>
      </header>
      <section className={`mt-[clamp(1.25rem,0.9419rem+1.3146vw,2.125rem)] ${fontClasses[font]}`}>
        <Meanings meanings={meanings} />
        <Divide className="mt-8" />
        <div className="flex flex-col md:flex-row md:items-end md:gap-4">
          <p className="underline text-5 mt-8">Source</p>
          <div className="flex gap-4 mt-2">
            <a href={sourceUrls?.[0]} target="_blank" className="underline  dark:text-white text-3">
              {sourceUrls?.[0]}
            </a>
            <img src={LinkIcon} alt="" />
          </div>
        </div>
      </section>
    </main>
  );
}

function Meanings({ meanings = [] }) {
  return (
    <ul className="space-y-8">
      {meanings.map((meaning, i) => (
        <MeaningItem meaning={meaning} key={i} />
      ))}
    </ul>
  );
}

function MeaningItem({ meaning }) {
  const { partOfSpeech, definitions, synonyms } = meaning;

  return (
    <li>
      <Divide>{partOfSpeech}</Divide>
      <p className="text-5 txt-4 mt-5 font-sans">Meaning</p>
      <Definitions definitions={definitions} />
      {synonyms.length > 0 && (
        <p className="txt-4 text-5 mt-4 ">
          Synonyms <span className="font-bold text-9 ml-5">{synonyms[0]}</span>
        </p>
      )}
    </li>
  );
}

function Definitions({ definitions }) {
  return (
    <ul className="space-y-5 mt-4">
      {definitions.map((def, i) => (
        <Definition def={def} key={i} />
      ))}
    </ul>
  );
}
function Definition({ def }) {
  const { definition, example } = def;
  return (
    <li className="flex items-start gap-4">
      <span className="size-1.5  bg-9 rounded-full shrink-0 mt-2.5"></span>
      <div className="flex flex-col ">
        <span>{definition}</span>
        {example && <p className="mt-2 text-5">"{example}"</p>}
      </div>
    </li>
  );
}

function Divide({ children, className }) {
  return (
    <div className={`flex items-center gap-10 ${className}`}>
      {children && <p className="font-bold txt-3 basis-1/12">{children}</p>}
      <p className="w-full h-[1px] bg-[#979797]"></p>
    </div>
  );
}
