import Link from 'next/link';

const Home = () => {
  return (
    <div className="p-4">
    <h1 className="text-3xl font-bold mb-4">Welcome to My Blog!</h1>
    <Link  className="text-blue-500 hover:underline" href="/blog">Go to Blog</Link>
  </div>
  );
};

export default Home;

