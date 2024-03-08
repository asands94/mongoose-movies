const Movie = require('../models/movie')

module.exports = {
    new: newMovie,
    create
}

function newMovie(req, res) {
    res.render('movies/new', {errorMsg:''})
}

async function create(req, res){
    req.body.nowShowing = !!req.body.nowShowing
    req.body.cast = req.body.cast.trim();
    if (req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/);
    try {
      await Movie.create(req.body);
      res.redirect('/movies');
    } catch (err) {
      console.log(err);
      res.render('movies/new', { errorMsg: err.message });
    }
}