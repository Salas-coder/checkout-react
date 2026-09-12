import { Link } from "react-router-dom";
import "./CheckoutPages.css";

function Pagamento() {
  return (
    <main className="checkout-page">
      <section className="checkout-panel" aria-labelledby="payment-title">
        <p className="checkout-panel__eyebrow">Checkout</p>
        <h1 id="payment-title" className="checkout-panel__title">
          Pagamento
        </h1>
        <section className="payment-page__form-area" aria-labelledby="payment-details-title">
          <h2 id="payment-details-title">Dados de pagamento</h2>
        </section>
        <Link className="checkout-page__link" to="/">
          Voltar ao carrinho
        </Link>
      </section>
    </main>
  );
}

export default Pagamento;
