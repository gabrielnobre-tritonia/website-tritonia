"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getClientYear = () => new Date().getFullYear();

/**
 * Ano atual, lido no navegador. Num site estático o servidor só conhece o ano
 * do build; ao hidratar, o React troca esse valor pelo do cliente, então o
 * ano fica certo mesmo sem novo deploy.
 */
export function CurrentYear() {
  const year = useSyncExternalStore(subscribe, getClientYear, getClientYear);

  return <>{year}</>;
}
