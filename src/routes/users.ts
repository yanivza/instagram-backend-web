import express from 'express';

const router = express.Router();

function sendResponse(req, res) {
    res.json({avi: '1'})
}


router.get('/api/users/:username', sendResponse); //my propile --> get 
router.get('/api/users/:username/followers', sendResponse);
router.get('/api/users/:username/following', sendResponse);

export default router;