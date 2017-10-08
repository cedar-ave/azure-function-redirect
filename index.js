module.exports = context => {
  context.res.status(302)
  context.res.header('Location', 'https://URL TO REDIRECT TO')
  context.done()
}
