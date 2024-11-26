import Link from 'next/link'

export const metadata = {
  title: "Official Shop",
  description: "Página principal de mi tienda",
};

export default function TiendaLayout({ children }) {
  return (
    <>
      <nav>
        <h2>Seccion Tienda</h2>
        <ul>
          <li>
            <Link href="/tienda/categorias">Categorias</Link>
          </li>
          <li>
            <Link href="/tienda/computadoras">Computadoras</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
}
