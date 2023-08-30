import Cabecalho from "./components/Cabecalho";
import Conteudo from "./components/Conteudo";
import Rodape from "./components/Rodape";
import viteLogo from "./assets/vite.svg";
import { Outlet } from "react-router-dom";

export default function App() {
  //Área declarativa
  let viteLogoAlt = "Vite Logo";
  return (
    <>
      {/* Área imperativa */}

      <Cabecalho />
      <Outlet/>
      <Conteudo viteLogoProps={viteLogo} viteLogoAlt={viteLogoAlt}/>
      <Rodape />
    </>
  );
}
