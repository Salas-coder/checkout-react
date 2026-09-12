import { Link } from "react-router-dom";
import "./CheckoutPages.css";

function Falha() {
  return (
    <main className="checkout-page">
      <section className="checkout-panel checkout-panel--failure" aria-labelledby="failure-title">
        <p className="checkout-panel__eyebrow">Compra não concluída</p>
        <h1 id="failure-title" className="checkout-panel__title">
          tentativa de golpe
        </h1>
        <p className="checkout-panel__description">
          Não foi possível concluir a compra.
        </p>
        <Link className="checkout-page__link" to="/">
          Voltar ao carrinho
        </Link>
      </section>
    </main>
  );
}

export default Falha;
