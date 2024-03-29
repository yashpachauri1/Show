const user = require('../models/user');
const User = require('../models/user')
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
    try {
       return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '1d' });
    } catch (error) {
       // Handle the error, e.g., log it or throw a custom error
       console.error('JWT signing error:', error);
       throw new Error('Failed to create token');
    }
 };

const loginHandler = async(req, res) =>{

    const {email, password} = req.body;
     
    try{
        const user = await User.login(email, password);
        
        // create a token
        const token = createToken(user._id);

        res.status(200).json({email, token})
    }
    catch(error)
    {
        res.status(400).json({error:error.message})

    }

}

//signup user

const signupHandler = async(req, res) =>{

    const {email, password} = req.body;

    try{
        const addUser = await User.signup(email, password)
     //create a token
        const token = createToken(addUser._id);
        
        res.status(200).json({email, token})
    }
    catch(error)
    {
       res.status(400).json({error:error.message})
    }

}

module.exports ={
    loginHandler,
    signupHandler
}