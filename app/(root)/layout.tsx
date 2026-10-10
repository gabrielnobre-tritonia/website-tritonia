/**
 * Layout das páginas do site. Só aplica o padding lateral: a largura máxima e
 * o espaço sob o menu bar ficam por conta de cada página, para que uma página
 * de tela cheia (como a home) possa chegar às bordas com margem negativa.
 */
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col px-(--page-gutter)">{children}</div>
  );
}
