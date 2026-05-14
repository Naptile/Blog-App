const Post = require("../models/Post");

//READ

exports.getPosts =async(req , res)=>{

    try{
        const keyword = req.query.keyword;
        let query = {};
        if (keyword){
            query.title ={$regex:keyword, $options: 'i'}
        }
        const posts =await Post.find();
        res.json(posts);

    }catch(error){
        res,status(500).json({message:error.message});
    }

};


//getById

exports.getPostById = async (req ,res)=>{
    try{
        const post = await Post.findById(req.params.id);

        if(!post){
            return res.status(404).json({message:"Post not found"});
        
        }
        res.json(post);

    }catch(error){
        res.status(500).json({message:error.message});  
    }
}



//CREATE

exports.createPost = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
        res.status(400).json({error: "Title and body are required",
      });
    }

    const post = new Post({ title, description});
    const savedPost = await post.save();

    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


//Put

exports.updatePost = async(req ,res)=>{
   try{
    const {title, description } = req.body;

    const updatedPost = await Post.findByIdAndUpdate(
        req.params.id,
        { title, description },
        { new: true }
    );
    if(!updatedPost){
        return res.status(404).json({message:"Post not found"});
    
    }
    res.json(updatedPost);

   }catch(error){
    res.status(500).json({message:error.message});

   }
};




//Delete

exports.deletePost = async(req ,res)=>{
    const {id}= req.params;
    try {
        const deletedPost = await Post.findByIdAndDelete(id);
      res.json(deletedPost);
    }catch(error){
        res.status(400).json({message:error.message});
    }

    };