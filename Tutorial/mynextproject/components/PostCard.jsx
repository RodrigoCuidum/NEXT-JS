"use client";
import Link from "next/link";

// RCC
function PostCard({ post }) {
  return (
    <div className="bg-black p-10 rounded-2xl">
      <Link href={`/posts/${post.id}`}>
        <h3 className="text-xl font-bold mb-4">
          {post.id}. {post.title}
        </h3>
      </Link>
      <p className="text-slide-300 text-gray-400">{post.body}</p>
      <button
        className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-600 hover:text-black"
        onClick={() => {
          alert("click funcionando");
        }}
      >
        Click
      </button>
    </div>
  );
}

export default PostCard;
