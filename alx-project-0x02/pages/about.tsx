import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="p-6 flex gap-4">
        <h1 className="text-2xl font-bold">About Us</h1>
        <div className="flex gap-4 mt-4">
          <Button size="small" shape="rounded-sm" label="Small Button" />
          <Button size="medium" shape="rounded-md" label="Medium Button" />
          <Button size="large" shape="rounded-full" label="Large Button" />
        </div>
      </main>
    </>
  );
}
