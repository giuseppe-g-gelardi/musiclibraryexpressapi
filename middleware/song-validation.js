exports.validateSong = (req, res, next) => {
  const data = req.body
  if (
    (data.hasOwnProperty('title') && typeof(data.title) === 'string') &&
    (data.hasOwnProperty('album') && typeof(data.album) === 'string') &&
    (data.hasOwnProperty('artist') && typeof(data.artist) === 'string') &&
    (data.hasOwnProperty('genre') && typeof(data.genre) === 'string') &&
    (data.hasOwnProperty('releseDate') && typeof(data.releaseDate) === 'string') 
  ) {
    return next()
  } else {
    return res.status(404).send({error: 'Missing required properties.'})
  }
}
