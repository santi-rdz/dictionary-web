import { useState } from "react";
import Header from "./components/Header";
import DropMenu from "./components/DropMenu";
import Logo from "./assets/images/logo.svg";
import ToggleButton from "./components/ToggleButton";
import Input from "./components/Input";
import WordInfo from "./components/WordInfo";
import Error from "./components/Error";
import Loading from "./components/Loading";
function App() {
  const [font, setFont] = useState("Sans Serif");
  const [word, setWord] = useState("");
  const [wordOBJ, setWordOBJ] = useState(null);
  const [isInvalid, setIsInvalid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  function hanldeSubmit(e) {
    e.preventDefault();
    if (word === wordOBJ?.word) return;
    if (word === "") return setIsInvalid(true);
    setIsInvalid(false);

    setError(false);
    setIsLoading(true);
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.toLocaleLowerCase()}`)
      .then(async (res) => {
        if (!res.ok) {
          const errorM = await res.json();

          throw errorM;
        }
        return res.json();
      })
      .then((data) => setWordOBJ(data[0]))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }

  return (
    <div className="my-container pb-14 pt-[clamp(1.125rem,0.9489rem+0.7512vw,1.625rem)]">
      <Header className="flex justify-between items-start gap-4">
        <img src={Logo} alt="" />
        <div className="flex divide-x  divide-[#E9E9E9] gap-4">
          <DropMenu className="" font={font} onSetFont={setFont} />
          <ToggleButton />
        </div>
      </Header>
      <Input word={word} onSetWord={setWord} isInvalid={isInvalid} handleSubmit={hanldeSubmit} />
      {isLoading && <Loading />}
      {!isLoading && !error && <WordInfo wordOBJ={wordOBJ} font={font} />}
      {error && <Error error={error} />}
    </div>
  );
}

export default App;
