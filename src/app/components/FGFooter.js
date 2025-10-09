import React from "react";
import Image from "next/image";

const FGFooter = () => {
  return (
    <footer className='bg-fuchsia-900 py-10 px-10 text-center'>
      <section className='flex justify-between items-center'>
        <button className='bg-fuchsia-950 text-white p-2 px-4 rounded-2xl font-bold text-2xl'>Boton de Arrepentimiento</button>
        <div className='flex gap-2 items-center'>
          <a alt="tiktok"><Image
          src={'assets/tiktok.svg'}
          height={20}
          width={20}
          alt={'Tiktok logo'}
          /></a>
          <a><Image
          src={'assets/ig.svg'}
          height={20}
          width={20}
          alt={'Instagram logo'}
          /></a>
          <a><Image
          src={'assets/x.svg'}
          height={20}
          width={20}
          alt={'X logo'}
          /></a>
        </div>
      </section>
      <section className="flex gap-2 justify-center mt-3">
        <p>Copyright 2025 - Sueldo & Mobilia - </p>
        <a className="font-bold underline cursor-pointer">Sobre Nosostros</a>
        <a className="font-bold underline cursor-pointer">Ayuda</a>
        <a className="font-bold underline cursor-pointer">Privacidad</a>
        <a className="font-bold underline cursor-pointer">Accesibilidad</a>
      </section>
    </footer>
  );
};

export default FGFooter;
