const { handleGetAllUsers, handleCreateUser, handleUpdateUser, handleDeleteUser } = require('./users.handlers');
const express = require('express');

const router = express.Router();

router.post('/create', handleCreateUser); // ✅
router.get('/all', handleGetAllUsers); // ✅
router.put('/:id/update', handleUpdateUser);
router.delete('/:id/delete', handleDeleteUser);

module.exports = {
    usersRouter: router
}