const userAuth = async (req, res, next) => {
  try {
    next()
  } catch (err) {
    console.log(err)
    res.status(401).json({
      error: 'Unauthorized access',
      messege: err
    })
  }
}

module.exports = userAuth
