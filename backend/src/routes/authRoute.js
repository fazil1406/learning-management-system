import express from 'express';
import { verifyToken } from '../middlewares/verifyToken.js';
import { login } from '../middlewares/auth.js';

const router = express.Router();

router.use('/login', login);


router.get('/admin/:id',verifyToken, (req,res) => {
    if (req.user.type !== 'Admin'){
        return res.status(403).json({success : false, message : "Access Denied"});
    }
    res.json({message : 'Welcome Admin'});
})

router.get('/teacher/:id',verifyToken, (req,res) => {
    if (req.user.type !== 'Teacher'){
        return res.status(403).json({success : false, message : "Access Denied"});
    }
    res.json({message : 'Welcome Teacher'});
})

router.get('/student/:id',verifyToken, (req,res) => {
    if (req.user.type !== 'Student'){
        return res.status(403).json({success : false, message : "Access Denied"});
    }
    res.json({message : 'Welcome Student'});
})

export default router;