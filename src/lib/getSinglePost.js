import blogData from "../app/data/blogData.json"
export default  function getSinglePost(id){
  
   const postId = parseInt(id,10)
   const singlePost = blogData.find(post => post.id === postId);

   return singlePost;
    
}

