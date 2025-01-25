const express = require("express");
const router = express.Router();
const { allUsers, singleUser, editUser, deleteUser } = require("../controllers/userController");
const { isAuthenticated, isAdmin } = require("../middleware/auth");


// all users route
router.get('/allusers', isAuthenticated,isAdmin, allUsers);
// single user route
router.get('/user/:id', isAuthenticated, singleUser);
// edit user route
router.put('/user/edit/:id', isAuthenticated, isAdmin, editUser);
// delete user route
router.delete('/user/admin/delete/:id', isAuthenticated, isAdmin, deleteUser);
module.exports = router;