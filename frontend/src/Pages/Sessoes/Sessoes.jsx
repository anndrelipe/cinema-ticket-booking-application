import React from "react";
import "./styles.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { SessaoItem } from './SessaoItem';
import { FilmeDetalhes } from './FilmeDetalhes';
import { Conteudo } from "../../components/Conteudo/Conteudo";
import { Footer } from "../../components/Footer/Footer";
import { DiasSessoes } from "./DiasSessoes";

export function Sessoes() {

  return (
    <>
    <Navbar/>
      
      <FilmeDetalhes/>


      <Conteudo style="overflow: hidden">
        
        <DiasSessoes/>

        <SessaoItem/>
        <SessaoItem/>
        <SessaoItem/>
      </Conteudo>

      <Footer/>
    </>
  );
}



