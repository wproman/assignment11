import getSinglePost from "@/lib/getSinglePost";
import Link from "next/link";




export default async function singleBlog({params}){
  const id = params.postId;
  const post = await getSinglePost(id);

  return (

    <>

      <div className="p-4">
      
      <h2 className="text-2xl font-bold mb-2 text-red-300">{post.title}</h2>
      <p className="mb-4 text-sky-600">Posted on: {post.date}</p>
      <p className=" mb-4">{post.content}</p>
      <Link  className="text-green-500 hover:underline" href="/blog">Go to Blog</Link>
    </div>
    </>
  )
}