import { Popcorn } from "lucide-react"

export function SessaoItem() {
  return (
      <div className="SessaoItem">
        <div className="SessaoItem-Cinema">
            <Popcorn className="popcorn-icon"/>
            <div className="SessaoItem-Cinema-text">
              <h3 className="SessaoItem-Cinema-End">Av. Washington Soares, 85 - Edson Queiroz, Fortaleza</h3>
              <h2 className="SessaoItem-Cinema-Nome">Cinema Iguatemi</h2>
            </div>
          </div>

          <div className="SessaoItem-divisao"></div>

          <div className="SessaoItem-Sessoes">
            <div className="SessaoItem-SessoesCategs">

              <div className="SessaoItem-SessoesCategs-Categoria">
                Legendado</div>

              <div className="SessaoItem-SessoesCategs-Horarios">
                <div className="SessaoItem-SessoesCategs-Horario">
                  21:00
                </div>
                <div className="SessaoItem-SessoesCategs-Horario">
                  21:45
                </div>
                <div className="SessaoItem-SessoesCategs-Horario">
                  22:00
                </div>
              </div>

            </div>

            <div className="SessaoItem-SessoesCategs">
              <div className="SessaoItem-SessoesCategs-Categoria">
                Vip Dublado</div>
              <div className="SessaoItem-SessoesCategs-Horarios">
                <div className="SessaoItem-SessoesCategs-Horario">
                  21:00
                </div>
                <div className="SessaoItem-SessoesCategs-Horario">
                  21:45
                </div>
                <div className="SessaoItem-SessoesCategs-Horario">
                  22:00
                </div>
              </div>
            </div>

            <div className="SessaoItem-SessoesCategs">
              <div className="SessaoItem-SessoesCategs-Categoria">
                Dublado</div>
              <div className="SessaoItem-SessoesCategs-Horarios">
                <div className="SessaoItem-SessoesCategs-Horario">
                  21:00
                </div>
                <div className="SessaoItem-SessoesCategs-Horario">
                  21:45
                </div>
                <div className="SessaoItem-SessoesCategs-Horario">
                  22:00
                </div>
              </div>
            </div>
          </div>
      </div>
  )
}