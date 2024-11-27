import Link from "next/link"
import React from "react";

const notFound = () => {
  return (
    <div>
      <h1>404 NOT-FOUND</h1>
      <p>Página no encontrada</p>
      <Link href="/">Volver</Link>
    </div>
  );
};

export default notFound;
