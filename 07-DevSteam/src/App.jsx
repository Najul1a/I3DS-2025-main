
import { use } from 'react';
import './App.css'
import Header from './components/Header'
import Promotion from './components/Promotion'

function App() {
  const[carrinhoItems, setCarrinhoItems] = useState([]);
 const[mostraCarrinho,setMostraCarrinho] = useState(false);

 useEffect(() => {
  const salvaCarrinho = localStorage.getItem('carrinho-devSteam');
  if (carrinho) {
    setCarrinhoItems(JSON.parse(salvaCarrinho));
  }

const adicionarCarrinho = (produto) => {
  setCarrinhoItems((produtosAnteriores) => {
    const existing = produtosAnteriores.find((item) => item.id === produto.id);
    if (existing) {
      return produtosAnteriores.map((item) =>
        item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item
      );

    }else {
      return [...produtosAnteriores, { ...produto, quantidade: 1 }];
    }
});

  return (
    <>
      <Header contadorJogos={2} />
      <Promotion/>
    </>
  )
}

export default App
