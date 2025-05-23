const notFound = (req, res, next) => {
  res.status(404).json({ code: 404, status: false, message: "api not found" })
};

module.exports = notFound;
