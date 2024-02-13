const express = require('express');
// const { v4: uuidv4 } = require('uuid');
// const {setUser} = require('../util/auth')
// const user = require('../models/user')


const {loginHandler, signupHandler} = require('../controler/user')

const userRouter = express.Router();

// userRouter.post('/signup', async (req, res, next) => {
//     const { name, email, password } = req.body;
//     try {
//         const addUser = await user.create({ name, email, password });
//         res.send(addUser)
//     }
//     catch (error) {
//         console.log(error);
//         next(error)
//     }

// });

// userRouter.post('/login', async (req, res, next) => {

//     const { email, password } = req.body;
//     try {
//         const User = await user.findOne({email, password});
//         if (!User) {
//             // User not found
//             return res.status(401).json({ message: "Invalid email or password" });
//         }
        
//         const sessionId = uuidv4();
//         console.log(sessionId);
//         setUser(User, sessionId);
//         res.cookie('uid', sessionId);
//         res.json({User,sessionId});


//     }
//     catch (error) {
//         console.log(error);
//         next(error);
//     }
   

// })


userRouter.post('/login', loginHandler);

userRouter.post('/signup', signupHandler);


module.exports = userRouter