import { useState } from 'react';
import hashtauranteImg from './assets/hashtaurante.webp';
import './App.css';
import { Navegacao } from './Navegacao';
import { ItemCardapio } from './ItemCardapio';
import { pratosPrincipais, sobremesas, bebidas } from './cardapio';

function App() {
  const paginasMenu = [pratosPrincipais, sobremesas, bebidas];
  const [paginaSelecionada, atualizarPaginaSelecionada] = useState(0);

  return (
    <>
      <img src={hashtauranteImg} className="capa" />
      <Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecionada} />
      <div className="menu">
        {paginasMenu[paginaSelecionada].map((item) => (
          <ItemCardapio
            nome={item.nome}
            preco={item.preco}
            descricao={item.descricao}
            imagem={item.imagem}
          />
        ))}
      </div>
    </>
  );
}

export default App;
