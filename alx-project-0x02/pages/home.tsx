import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { useState } from "react";

interface Post {
  title: string;
  content: string;
}

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([]);

  const addPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <>
      <Header />
      <main className="p-6 space-y-4">
        <h1 className="text-2xl font-bold mb-4">Home Page</h1>
        <PostModal onAddPost={addPost} />
        {posts.map((post, i) => (
          <Card key={i} title={post.title} content={post.content} />
        ))}
      </main>
    </>
  );
}
