const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            min: 5,
            max: 20
        },
        description: {
            type: String,
            require: true,

        },
        releaseDate: {
            type: String
        },
        rating: {
            type: Number,
            // required: true
        },
        ticketPrice: {
            type: Number,
            required: true
        },
        country: {
            type: String,
            required: true
        },

        genre: {
            type: String,

        },
        photo: {
            photo: String
        },
        slug: {
            type: String,
            unique: true
        }
    }
)
module.exports = mongoose.model('Movie', MovieSchema)



module.exports