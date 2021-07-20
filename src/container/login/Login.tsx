import React, { useState } from "react";
import Card from "../../components/card/Card";
import ThemeContext from "../../store/CountContext";

interface Props {}

const Login = (props: Props) => {
  const [lang, setLang] = useState<"es" | "en">("es");
  const toggleLang = () => setLang(lang === "es" ? "en" : "es");
  const [count, setCount] = useState(0);

  return (
    <ThemeContext.Provider value={{count, setCount }}>
      <div>
        <Card lang={lang} toggleLang={toggleLang} />
      </div>
    </ThemeContext.Provider>
  );
};

export default Login;
