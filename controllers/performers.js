const Performer = require('../models/performer')

module.exports = {
  new: newPerformer,
  create,
}

async function newPerformer(req, res) {
  const performers = await Performer.find({}).sort('name')
  res.render('performers/new', { title: 'Add Performer', performers })
}

async function create(req, res) {
  req.body.born += 'T00:00'
  try {
    await Performer.create(req.body)
  } catch (err) {
    console.log(err)
  }
  res.redirect('/performers/new')
}
