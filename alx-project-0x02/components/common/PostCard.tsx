import { type PostProps } from "@/interfaces";

export default function PostCard({ title, body, userId }: PostProps) {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <h2 className="font-bold text-lg mb-2">{title}</h2>
      <p className="mb-2">{body}</p>
      <span className="text-sm text-gray-500">User ID: {userId}</span>
    </div>
  );
}
