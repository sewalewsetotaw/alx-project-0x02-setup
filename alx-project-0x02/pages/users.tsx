import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { type UserProps } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
}

export default function UsersPage({ users }: UsersPageProps) {
  return (
    <>
      <Header />
      <main className="p-6 space-y-4">
        <h1 className="text-2xl font-bold">Users</h1>
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users?_limit=5");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}
