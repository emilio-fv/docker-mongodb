const { User } = require('./users.model');

// Create one
const createUser = async (data) => {
    let newUser = await User.create(data);
    return newUser;
};

// Read all
const getAllUsers = async () => {
    const allUsers = await User.find();
    return allUsers;
};

// Update one
const updateUser = async (id, data) => {
    const updatedUser = await User.findByIdAndUpdate(id, data);
    return updatedUser;
};

// Delete one
const deleteUser = async (id) => {
    const deletedUser = await User.findByIdAndDelete(id);
    return deletedUser;
};

module.exports = {
    createUser,
    getAllUsers,
    updateUser,
    deleteUser
};