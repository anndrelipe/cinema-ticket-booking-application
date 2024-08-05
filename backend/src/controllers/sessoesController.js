import retornaConexaoMysql from "../db/sqlConnection.js";
const mysql = await retornaConexaoMysql();

class SessaoController {
    static async teste (req, res) {

        res.header({
            "Access-Control-Allow-Origin": "*"
        });

        const opcoes = ["cinema_id", "dia", "filme_id"];
        const selecionadas = [];
        var query = `SELECT
                f.titulo, s.num_sala , s.tipo_sala, c.nome , c.endereco, tipo_audio, formato_exibicao, dia, horario
                FROM sessoes
                INNER JOIN filmes f
                    ON filme_id = f.id
                INNER JOIN salas s 
                    ON sala_id = s.id
                INNER JOIN cinemas c 
                    ON cinema_id = c.id
                    WHERE`;

        try {

            for (const item of opcoes) {
                if (req.body[item] === undefined) {
                    continue
                } else {
                    selecionadas.push(item);
                }
            }

            for (var n = 0; n < selecionadas.length; n++) {


                if (selecionadas[n] === "dia") {
                    query += ` ${selecionadas[n]} = "${req.body[selecionadas[n]]}"`
                } else {
                    query += ` ${selecionadas[n]} = ${req.body[selecionadas[n]]}`
                }

                if (n === (selecionadas.length - 1)) {
                    query += ';'
                } else {
                    query += ' AND'
                }
            }

            mysql.query(query, (err, result) => {
                if (err) {
                    res.status(500).json({status: 500, message : "Internal Server Error", content : "Erro ao tentar coletar dados do banco."});
                    return
                }
                res.status(200).json({status: 200, message : "Ok", content: result});
            });

        } catch (error) {
                res.status(500).json({status: 500, message : "Internal Server Error"});
        }
    }
}

export default SessaoController