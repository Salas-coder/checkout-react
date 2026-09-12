import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import usePagamento from "../hooks/usePagamento";
import "./CheckoutPages.css";

const normalizarCartao = (valor) => valor.replace(/[\s-]/g, "");

const pagamentoSchema = z.object({
  titular: z.string().trim().min(1, "Informe o titular do cartão."),
  cartao: z
    .string()
    .transform(normalizarCartao)
    .pipe(z.string().regex(/^\d{16}$/, "Informe os 16 dígitos do cartão.")),
  validade: z
    .string()
    .trim()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Informe a validade no formato MM/YY."),
  cvv: z.string().trim().regex(/^\d{3}$/, "Informe os 3 dígitos do CVV."),
});

function Pagamento() {
  const { finalizarPagamento } = usePagamento();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(pagamentoSchema),
    defaultValues: {
      titular: "",
      cartao: "",
      validade: "",
      cvv: "",
    },
  });

  const enviarPagamento = ({ cartao }) => {
    finalizarPagamento(cartao);
  };

  return (
    <main className="checkout-page">
      <section className="checkout-panel" aria-labelledby="payment-title">
        <p className="checkout-panel__eyebrow">Checkout</p>
        <h1 id="payment-title" className="checkout-panel__title">
          Pagamento
        </h1>
        <section className="payment-page__form-area" aria-labelledby="payment-details-title">
          <h2 id="payment-details-title">Dados de pagamento</h2>
          <form className="payment-form" noValidate onSubmit={handleSubmit(enviarPagamento)}>
            <div className="payment-form__field">
              <label htmlFor="titular">Titular do cartão</label>
              <input
                id="titular"
                autoComplete="cc-name"
                aria-describedby={errors.titular ? "titular-error" : undefined}
                aria-invalid={Boolean(errors.titular)}
                {...register("titular")}
              />
              {errors.titular && (
                <p id="titular-error" className="payment-form__error" role="alert">
                  {errors.titular.message}
                </p>
              )}
            </div>

            <div className="payment-form__field">
              <label htmlFor="cartao">Número do cartão</label>
              <input
                id="cartao"
                autoComplete="cc-number"
                inputMode="numeric"
                aria-describedby={errors.cartao ? "cartao-error" : undefined}
                aria-invalid={Boolean(errors.cartao)}
                {...register("cartao")}
              />
              {errors.cartao && (
                <p id="cartao-error" className="payment-form__error" role="alert">
                  {errors.cartao.message}
                </p>
              )}
            </div>

            <div className="payment-form__fields-row">
              <div className="payment-form__field">
                <label htmlFor="validade">Validade</label>
                <input
                  id="validade"
                  autoComplete="cc-exp"
                  inputMode="numeric"
                  placeholder="MM/YY"
                  aria-describedby={errors.validade ? "validade-error" : undefined}
                  aria-invalid={Boolean(errors.validade)}
                  {...register("validade")}
                />
                {errors.validade && (
                  <p id="validade-error" className="payment-form__error" role="alert">
                    {errors.validade.message}
                  </p>
                )}
              </div>

              <div className="payment-form__field">
                <label htmlFor="cvv">CVV</label>
                <input
                  id="cvv"
                  autoComplete="cc-csc"
                  inputMode="numeric"
                  aria-describedby={errors.cvv ? "cvv-error" : undefined}
                  aria-invalid={Boolean(errors.cvv)}
                  {...register("cvv")}
                />
                {errors.cvv && (
                  <p id="cvv-error" className="payment-form__error" role="alert">
                    {errors.cvv.message}
                  </p>
                )}
              </div>
            </div>

            <button className="payment-form__submit" type="submit">
              Finalizar compra
            </button>
          </form>
        </section>
        <Link className="checkout-page__link" to="/">
          Voltar ao carrinho
        </Link>
      </section>
    </main>
  );
}

export default Pagamento;
