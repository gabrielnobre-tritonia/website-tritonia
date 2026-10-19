"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type ExpandableCardGroupContext = {
  openId: string | null;
  toggle: (id: string) => void;
};

const GroupContext = createContext<ExpandableCardGroupContext | null>(null);

/** Estado do acordeão a que o `ExpandableCard` pertence; `null` fora de um grupo. */
export const useExpandableCardGroup = () => useContext(GroupContext);

type ExpandableCardGroupProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Fileira dos cards da seção "Por que a Tritonia". Guarda qual card está aberto
 * no mobile, onde eles viram um acordeão (um aberto por vez, clicando no aberto
 * ele fecha). Em telas maiores o estado não é usado: os cards expandem por
 * hover e foco, só com CSS.
 */
export function ExpandableCardGroup({
  children,
  className,
}: ExpandableCardGroupProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = useCallback(
    (id: string) => setOpenId((current) => (current === id ? null : id)),
    [],
  );

  const value = useMemo(() => ({ openId, toggle }), [openId, toggle]);

  return (
    <GroupContext.Provider value={value}>
      <div className={className}>{children}</div>
    </GroupContext.Provider>
  );
}
