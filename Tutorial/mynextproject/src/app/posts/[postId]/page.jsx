import Posts from "../page";
import { Suspense } from "react";

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}

async function Page({ params }) {
  const post = await loadPost(params.postId);

  return (
    <div>
      <h1>
        {post.id}. {post.title}
      </h1>
      <p>{post.body}</p>
      <hr />
      <h3>Otras Publicaciones</h3>
      <Suspense fallback={<h4>Cargando Publicaciones...</h4>}>
        <Posts />
      </Suspense>
    </div>
  );
}

export default Page;
