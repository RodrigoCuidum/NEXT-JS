"use client";

import { useRouter } from "next/navigation";

// export const metadata = {
//   title: "Sobre Nosotros...",
// };

function AboutPage() {
  const router = useRouter();
  return (
    <section>
      <h1 className="font-bold text-3xl text-center my-7">About</h1>
      <p>
        Somos una empresa comprometida con la excelencia, dedicada a ofrecer
        soluciones innovadoras que transformen la manera en que las personas
        interactúan con la tecnología. Desde nuestros inicios, hemos trabajado
        incansablemente para construir una marca basada en la confianza, la
        calidad y la creatividad. <br /> <br />
        Nuestra misión es empoderar a nuestros
        clientes a través de servicios y productos que marcan la diferencia,
        mientras fomentamos un entorno inclusivo y colaborativo para nuestro
        equipo. Creemos que el éxito se logra cuando las ideas innovadoras se
        combinan con una pasión genuina por hacer el bien. <br /> <br />
        Estamos aquí no solo
        para alcanzar metas, sino para superar expectativas, dejando un impacto
        positivo en cada proyecto que emprendemos. Agradecemos tu interés en
        conocernos mejor y esperamos que formes parte de nuestra historia.
      </p> <br />
      <button
        className="bg-black px-3 py-2 rounded-xl hover:bg-white hover:text-black"
        onClick={() => {
          router.push("/");
        }}
      >
        Volver
      </button>
    </section>
  );
}

export default AboutPage;
