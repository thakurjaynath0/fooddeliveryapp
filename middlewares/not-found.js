// if user request route that doesn't exits
const notFound = (req, res) => {
  res.status(404).send('Route does not exist');
};

module.exports = notFound;
