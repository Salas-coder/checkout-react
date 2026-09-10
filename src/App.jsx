import { Route, Routes } from "react-router-dom";
import Carrinho from "./pages/Carrinho";
import Falha from "./pages/Falha";
import Pagamento from "./pages/Pagamento";
import Sucesso from "./pages/Sucesso";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Carrinho />} />
      <Route path="/pagamento" element={<Pagamento />} />
      <Route path="/sucesso" element={<Sucesso />} />
      <Route path="/falha" element={<Falha />} />
    </Routes>
  );
}

export default App;
