

module.exports.allPost = async(req, res)=>{
    const page = req.params.page;
    const perPage = 5;
    const skip = (page - 1) * perPage;
    
    try {
        const count = await Post.count();
        const response = await Post.findAll({offset: skip, limit: perPage, order:[['updatedAt','DESC']]});
        return res.status(200).json({response, count, perPage});
    } catch (error) {
        return res.status(500).json({errors: [{msg: error.message}]});
    }
}