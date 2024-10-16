import { Title } from "./components/Title/title";
import { Quadrado } from "./components/Quadrado/quadrado";
import { ButtonPrincipal } from "./components/ButtonPrincipal/button";
import { ListaItens } from "./components/ListaItens/ListaItens";
import Imagem from "./components/Imagem/imagem"
import Paragrafo from "./components/Paragrafo/paragrafo";
import Cabecalho from "./components/Cabecalho/cabecalho";
import Rodape from "./components/Rodape/rodape";



export default function Home() {
  return (
    <div>
      <Cabecalho/>
      <Title/>
      <h1>Willian Gabriel</h1>
      <Quadrado/> 
      <br />
      <ButtonPrincipal/>  
      <br /><br />
      <ListaItens/>
      <br /><br />
      <Imagem/>
      <br /><br />
      <Paragrafo/>
      <br />
      <Rodape/>
    </div>
  );
}
