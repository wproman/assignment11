import getAllPosts from '@/lib/getAllpost';
import Link from 'next/link';


export default async function Blog(){
  const posts = await getAllPosts();
 
  return (

    <>

    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className=" p-2 hover:bg-gray-600 transition duration-1000 ease-in-out">
          <Link className="text-gray-200 " href={`/posts/${post.id}`}>{post.id}-{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}
