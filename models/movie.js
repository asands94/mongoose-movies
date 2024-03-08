const mongoose = require('mongoose')

const schema = mongoose.Schema

const movieSchema = new Schema({
    title: String,
    releaseYear: Number,
    mpaaRating: String,
    cast: [String],
    nowShowing: Boolean
}, {
    timeStamps: true
})

module.exports = mongoose.models('Movie', movieSchema)