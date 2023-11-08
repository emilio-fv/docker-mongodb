const { 
    createUser,
    getAllUsers,
    updateUser,
    deleteUser
} = require('./users.services');

const handleCreateUser = async (req, res) => {
    try {
        const newUser = await createUser(req.body);
        res.status(200).json(newUser).send();
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

const handleGetAllUsers = async (req, res) => {
    try {
    
        const allUsers = await getAllUsers();
        res.status(200).json({allUsers, message: 'hello' }).send();
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
};

const handleUpdateUser = async (req, res) => {
    try {
        console.log();
        const updatedUser = await updateUser(req.params.id, req.body);
        res.status(200).json(updatedUser).send();
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
};

const handleDeleteUser = async (req, res) => {
    try {
        const deletedUser = await deleteUser(req.params.id);
        res.status(200).json(deletedUser);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
};

module.exports = {
    handleCreateUser,
    handleGetAllUsers,
    handleUpdateUser,
    handleDeleteUser
};