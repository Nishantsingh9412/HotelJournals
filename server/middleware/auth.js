import jwt from 'jsonwebtoken'

const auth = async (req, res, next ) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
                                //  token , secret (given in controllers/auth.js)
        let decodeData = jwt.verify(token,process.env.JWT_SECRET);
        req.userID = decodeData?.id;
        
        next();
    } catch (error) {
        console.log("from auth middleware " +  error.message);
    }
}

export default auth;     // imported in routes/Questions , routes/Answers