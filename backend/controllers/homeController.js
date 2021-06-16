module.exports = {
  indexView: (req, res) => {
    res.render('index', { title: 'Express' })
  },
}
