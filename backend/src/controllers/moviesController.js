import Movies from "../models/MoviesModel.js";

class movieController {
    static async getAllMovies (req, res) {
        try {
            const listaFilmes = await Movies.find({});

            res.header({
                "Access-Control-Allow-Origin": "*"
            });
            
            res.status(200).json({status : 200, content : listaFilmes})
        } catch (error) {
            console.log(error);
            res.status(500).json({status : 500, message : "Erro ao tentar adquirir filmes no banco de dados."});
            return
        }
    }
}

export default movieController