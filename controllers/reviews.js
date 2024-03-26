const Movie = require('../models/movie')

module.exports = {
  create,
}

async function create(req, res) {
  const movie = await Movie.findById(req.params.id)

  req.body.user = req.user._id
  req.body.userName = req.user.name
  req.body.userAvatar = req.user.avatar

  movie.reviews.push(req.body)
  try {
    await movie.save()
  } catch (err) {
    console.log(err)
  }
  res.redirect(`/movies/${movie._id}`)
}
