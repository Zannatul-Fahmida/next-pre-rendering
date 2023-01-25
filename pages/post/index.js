import Link from "next/link";

function Posts({ posts }) {
  return (
    <>
      <h1>Post page</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`post/${post.id}`} passHref>
              <h2>
                {post.id} {post.title}
              </h2>
            </Link>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default Posts;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: {
      posts: data,
    },
  };
}
