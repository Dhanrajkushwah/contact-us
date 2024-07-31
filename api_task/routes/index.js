const express = require("express");
const userRoute = require("../routes/user.route")
const router = express.Router();
router.use('/user', userRoute);
module.exports = router;

// Example API route
router.get('/example', (req, res) => {
  res.json({ message: 'This is an example API response' });
});

