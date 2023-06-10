const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

module.exports.allPost = async(req, res)=>{
    const page = req.params.page;
    const perPage = 5;
    const skip = (page - 1) * perPage;
    
    try {
        const count = await prisma.post.count();
        const response = await prisma.post.findMany({skip: skip, take: perPage, orderBy:[{updatedAt:'desc'}]});
        return res.status(200).json({response, count, perPage});
    } catch (error) {
        return res.status(500).json({errors: [{msg: error.message}]});
    }
}

module.exports.createPost = async(req, res) =>{
    const {title, image, content} = req.body;
    const errors = [];
    if(title === ''){
        errors.push({msg: 'Title is required'});
    }
    if(image === ''){
        errors.push({msg:'Image is required'});
    }
    if(content === ''){
        errors.push({msg:'Content is required'});
    }
    const checkPost = await prisma.post.findFirst({where:{title:title}});
    if(checkPost){
        errors.push({msg:'Post is already exists'});
    }

    if(errors.length !== 0){
        return res.status(400).json({errors});
    }else{
        try {
            const response = await prisma.post.create({
              data:{
                title,
                image,
                content
            }});
            return res.status(200).json({message: "Post added Successfully"});
        } catch (error) {
            return res.status(500).json({errors: [{msg: error.message}]});
        }
    }
}

module.exports.editPost = async(req, res)=>{
    const id = Number(req.params.id);
    try {
        const response = await prisma.post.findUnique({where:{id}});
        return res.status(200).json({response});
    } catch (error) {
        return res.status(500).json({errors: [{msg: error.message}]});
    }
}

module.exports.updatePost = async(req, res)=>{
    const id = Number(req.params.id);
    const {title, image, content} = req.body;
    const errors = [];
    if(title === ''){
        errors.push({msg: 'Title is required'});
    }
    if(image === ''){
        errors.push({msg:'Image is required'});
    }
    if(content === ''){
        errors.push({msg:'Content is required'});
    }

    if(errors.length !== 0){
        return res.status(400).json({errors});
    }else{
        try {
            const response = await prisma.post.update({
                where:{id},
                data:{
                    title,
                    image,
                    content
                }
            });
            return res.status(200).json({message: "Post updated Successfully"});
        } catch (error) {
            return res.status(500).json({errors: [{msg: error.message}]});
        }
    }
}

module.exports.deletePost = async(req, res)=>{
    const id = Number(req.params.id);
    try {
        const response = await prisma.post.delete({where:{id}});
        return res.status(200).json({message: "Post deleted Successfully"});
    } catch (error) {
        return res.status(500).json({errors: [{msg: error.message}]});
    }
}