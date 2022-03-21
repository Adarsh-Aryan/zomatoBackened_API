const jwt = require('jsonwebtoken')

const fetchUserEmail = (req, res, next) => {

    const token = req.headers['auth-token']

    if (!token) {
        res.status(422).json({ token: 'Please Provide Token', auth: false })
        return;
    }

    try {

        const userData = jwt.verify(token, 'Zomato')

        req.email = userData.email

        next()

    } catch (error) {
        res.status(400).json({token:'Invalid Token',auth:false})
        
    }



}

module.exports = { fetchUserEmail }