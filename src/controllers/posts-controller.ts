export function getPostById(req, res, next) {
    if (req.params.postId) {
        req.post = {};
        next();
    } else {
        res.send(404)
    }


}

export function getPost(req, res) {
    res.json(req.post);
}

export function getPostComments(req, res) {
    res.json([]);
}

export function getPostLikes(req, res) {
    res.json([]);
}

export function like() {

}

export function unLike() {
}




