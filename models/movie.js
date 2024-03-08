const mongoose = require('mongoose')

const Schema = mongoose.Schema

const movieSchema = new Schema(
  {
    title: String,
    releaseYear: { type: Number, default: 2000 },
    mpaaRating: String,
    cast: [String],
    nowShowing: { type: Boolean, default: false },
  },
  {
    timeStamps: true,
  }
)

module.exports = mongoose.model('Movie', movieSchema)
