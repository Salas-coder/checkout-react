import { useNavigate } from "react-router-dom";

const cartaoComDigitosIguais = /^(\d)\1{15}$/;

function usePagamento() {
  const navigate = useNavigate();

  const finalizarPagamento = (cartaoNormalizado) => {
    const destino = cartaoComDigitosIguais.test(cartaoNormalizado)
      ? "/falha"
      : "/sucesso";

    navigate(destino);
  };

  return { finalizarPagamento };
}

export default usePagamento;
