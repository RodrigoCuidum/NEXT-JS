import PostCard from '@/components/PostCard'
import './posts.css'

// RSC
async function loadPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  // await new Promise((resolve) => setTimeout(resolve, 2000))

  return data;
}
async function postPage() {
  const posts = await loadPosts();
  return (
    <div className='grid'>
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
}

export default postPage;
