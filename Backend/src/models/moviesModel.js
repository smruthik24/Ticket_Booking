import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            required: true
        },
        genre: {
            type: String,
            required: true
        },
        language: {
            type: String,
            required: true
        },
        releaseDate: {
            type: Date,
            required: true
        },
        actorName: {
            type: String,
            required: true
        },
        director: {
            type:String,
            required: true
        },
        description: {
            type:String,
            required: true
        },
        image: {
            type:String,
            required:true
        },
        reviews: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review', 
        }],
  },
    {timestamps: true}
);

const Movie = mongoose.model("Movie", movieSchema);

export default Movie