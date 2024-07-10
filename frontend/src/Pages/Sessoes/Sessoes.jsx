import React from "react";
import "./styles.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { SessaoItem } from './SessaoItem';
import { FilmeDetalhes } from './FilmeDetalhes';

export function Sessoes() {

  return (
    <>
    <Navbar/>
      
      <FilmeDetalhes/>

      <SessaoItem/>
      <SessaoItem/>
      <SessaoItem/>
    </>
  );
}



