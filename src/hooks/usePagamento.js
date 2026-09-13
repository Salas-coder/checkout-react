import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const cartaoComDigitosIguais = /^(\d)\1{15}$/;
const normalizarCartao = (valor) => String(valor ?? "").replace(/[\s-]/g, "");
const aguardarProcessamento = () => new Promise((resolve) => setTimeout(resolve, 1000));

function usePagamento() {
  const navigate = useNavigate();
  const [processando, setProcessando] = useState(false);
  const processandoRef = useRef(false);

  const finalizarPagamento = async (cartao) => {
    if (processandoRef.current) {
      return;
    }

    processandoRef.current = true;
    setProcessando(true);

    try {
      await aguardarProcessamento();

      const cartaoLimpo = normalizarCartao(cartao);
      const destino = cartaoComDigitosIguais.test(cartaoLimpo)
        ? "/falha"
        : "/sucesso";

      navigate(destino);
    } finally {
      processandoRef.current = false;
      setProcessando(false);
    }
  };

  return { finalizarPagamento, processando };
}

export default usePagamento;
