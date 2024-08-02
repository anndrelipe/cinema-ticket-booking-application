import retornaConexaoMysql from "../db/sqlConnection.js";
const mysql = await retornaConexaoMysql();

class SessaoController {
    static async teste (req, res) {
        const query = `select
                    id_sessao, filme_id, sala_id, cinema_id, tipo_audio, formato_exibicao, dia, horario
                    FROM sessoes 
                    LIMIT 5;`;
        mysql.query(query, (err, result) => {
            if (err) {
                console.log("Deu erro", err);
                return
            }
            res.status(200).json({status: 200, message : "Ok", content: result});
        });

    }
}

export default SessaoController