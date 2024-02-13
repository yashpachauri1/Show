const jwt = require('jsonwebtoken');
const User= require('../models/user')

async function checkAuthMiddleware(req, res, next) {
    const { authorization } = req.headers;
  
    if (req.method === 'OPTIONS') {
      return next();
    }
  
    if (!authorization) {
      console.log('NOT AUTH. AUTH HEADER MISSING.');
      return res.status(401).json({ error: 'Authorization token required.' });
    }
  
    const authFragments = authorization.split(' ');
  
    if (authFragments.length !== 2) {
      console.log('NOT AUTH. AUTH HEADER INVALID.');
      return res.status(401).json({ error: 'Not authenticated.' });
    }
  
    const authToken = authFragments[1];
  
    try {
      const { _id } = jwt.verify(authToken, process.env.SECRET);

      req.user = await User.findOne({ _id }).select('_id');

      next(); // Move this line inside the try block
    } catch (error) {
      console.log('NOT AUTH. TOKEN INVALID.');
      return res.status(401).json({ error: 'Request is not authorized' });
    }
    
  }
  

  
  module.exports = checkAuthMiddleware;