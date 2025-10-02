import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

export default function PostsPage({ posts }: PostsPageProps) {
  return (
    <>
      <Header />
      <main className="p-6 space-y-4">
        <h1 className="text-2xl font-bold">Posts</h1>
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
