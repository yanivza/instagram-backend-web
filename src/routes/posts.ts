import express from 'express';
import verifyUser from "../middleware/verify-user";
import {getFeed} from "../controllers/feed-controller";
import {getPost, getPostById, getPostComments, getPostLikes, like, unLike} from "../controllers/posts-controller";

const router = express.Router();

function sendResponse(req, res) {
    res.json({avi: '1'})
}

// router.use(verifyUser) less secure then
// router.get('/api/feed', verifyUser ,sendResponse);

router.get('/api/feed', getFeed);
router.get('/api/posts/:postId',getPostById, getPost);
router.get('/api/posts/:postId/comments',getPostById, getPostComments);
router.get('/api/posts/:postId/likes',getPostById, getPostLikes);


router.post('/api/posts/:postId/like',getPostById, like);
router.post('/api/posts/:postId/unlike',getPostById, unLike);

export default router;