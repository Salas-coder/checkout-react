import ItemCarrinho from "../components/ItemCarrinho";
import ResumoCompra from "../components/ResumoCompra";
import produtos from "../data/produtos";
import "./Carrinho.css";

function Carrinho() {
  return (
    <main>
      <h1>Carrinho de compras</h1>

      <section aria-label="Produtos do carrinho">
        {produtos.map((produto) => (
          <ItemCarrinho key={produto.id} produto={produto} />
        ))}
      </section>

      <section aria-label="Resumo da compra">
        <ResumoCompra produtos={produtos} />
      </section>
    </main>
  );
}

export default Carrinho;
