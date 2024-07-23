import mysql from "mysql"

const conexaoMysql = mysql.createConnection({
    database : process.env.DB_NAME,
    user : process.env.DB_USER,
    password : process.env.DB_ROOT_PASSWORD,
    host : process.env.DB_HOST
});

const retornaConexaoMysql = async () => {
    return conexaoMysql
}

export default retornaConexaoMysql