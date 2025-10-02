import { type UserProps } from "@/interfaces";

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <h2 className="font-bold text-lg">{name}</h2>
      <p>{email}</p>
      <p>{address.street}, {address.city}</p>
    </div>
  );
}
