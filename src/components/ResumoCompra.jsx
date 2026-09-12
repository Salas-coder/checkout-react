import { Link } from "react-router-dom";

function ResumoCompra({ produtos }) {
  const total = produtos.reduce(
    (soma, produto) => soma + produto.preco * produto.quantidade,
    0,
  );
  const totalFormatado = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(total);

  return (
    <div className="cart-summary">
      <p className="cart-summary__label">Total da compra</p>
      <p className="cart-summary__total">{totalFormatado}</p>
      <Link className="cart-summary__checkout" to="/pagamento">
        Continuar para pagamento
      </Link>
    </div>
  );
}

export default ResumoCompra;
