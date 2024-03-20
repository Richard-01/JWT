const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwt_secret = "#!€${a%%sA?s#$&13"



const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error);
    }
};

const register = async (req, res) => {
    try {
        const users = await User.find();
        const {name, email, password} = req.body;
        const userData = 
        {
            userId: users.length + 1,
            name: name,
            email: email,
            password: await bcrypt.hash(password, 10),
            id: "null"
        }
        const newUser = await User(userData);
        const user = await newUser.save();
        res.status(201).send({message: 'User registered successfully'});

    } catch (error) {
        res.status(500).send(error);
    }
}

const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email: email});
        if (!user) {
            return res.status(401).send({message: 'User not found'});
        }
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).send({message: 'Invalid password'});
        }
        const token = jwt.sign({userId: user.userId}, jwt_secret, {
            expiresIn: 3600
        });
        res.status(200).send({token: token});
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
}

module.exports = {
    getAllUsers,
    register,
    login,
}