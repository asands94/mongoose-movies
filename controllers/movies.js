const Movie = require('../models/movie')

module.exports = {
  new: newMovie,
  create,
  index,
  show,
}

function newMovie(req, res) {
  res.render('movies/new', { errorMsg: '', title: 'Add Movie' })
}

async function create(req, res) {
  req.body.nowShowing = !!req.body.nowShowing
  req.body.cast = req.body.cast.trim()
  if (req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/)
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  try {
    await Movie.create(req.body)
    res.redirect('/movies')
  } catch (err) {
    console.log(err)
    res.render('movies/new', { errorMsg: err.message })
  }
}

async function index(req, res) {
  const movies = await Movie.find({})
  res.render('movies/index', { movies, title: 'All Movies' })
}

async function show(req, res) {
  const movie = await Movie.findById(req.params.id)
  res.render('movies/show', { movie, title: 'Movie Details' })
}
