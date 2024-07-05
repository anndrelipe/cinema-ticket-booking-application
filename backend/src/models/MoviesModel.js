import mongoose from "mongoose";

const moviesSchema = new mongoose.Schema({
    id : { type : mongoose.Schema.Types.ObjectId },
    title : String,
    parental_rating : String,
    duration_time : Number,
    genres : Object,
    description : String,
    media : Object,
    datasheet : Object
}, { versionKey: false });

const Movies = mongoose.model('movies', moviesSchema);

export default Movies