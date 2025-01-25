
const express = require("express");
const router = express.Router();
const { signup, signin, logout, userProfile } = require("../controllers/authController");
const { isAuthenticated } = require("../middleware/auth");


//auth routes signup
router.post('/signup', signup);
//auth routes signin
router.post('/signin', signin);
// auth route me
router.get('/me', isAuthenticated, userProfile);
//auth routes log out
router.get('/logout', logout);


module.exports = router;