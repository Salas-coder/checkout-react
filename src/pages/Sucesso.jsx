import { Link } from "react-router-dom";
import "./CheckoutPages.css";

function Sucesso() {
  return (
    <main className="checkout-page">
      <section className="checkout-panel checkout-panel--success" aria-labelledby="success-title">
        <p className="checkout-panel__eyebrow">Compra confirmada</p>
        <h1 id="success-title" className="checkout-panel__title">
          Compra concluída
        </h1>
        <p className="checkout-panel__description">
          Seu pedido foi confirmado com sucesso.
        </p>
        <Link className="checkout-page__link" to="/">
          Voltar ao carrinho
        </Link>
      </section>
    </main>
  );
}

export default Sucesso;
