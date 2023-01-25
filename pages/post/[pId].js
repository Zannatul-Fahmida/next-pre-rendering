import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = async (...args) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${args}`
  );
  const data = await response.json();
  return data;
};

const Posts = () => {
  const router = useRouter();
  const postId = router.query.pId;
  const { data, error } = useSWR(`${postId}`, fetcher);
    if (error) return "An error has occured";
    if (!data) return "Loading...";
  return (
    <div>
      <h2>{data.id}</h2>
      <p>{data.title}</p>
      <p>{data.body}</p>
    </div>
  );
};

export default Posts;
