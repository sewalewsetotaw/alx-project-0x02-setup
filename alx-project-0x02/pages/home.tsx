import Card from "@/components/common/Card";
export default function HomePage() {
  return (
    <div className="space-y-4 p-6">
      <h1 className="text-2xl font-bold">This is the Home Page</h1>
      <Card title="Card 1" content="This is the first card." />
      <Card title="Card 2" content="This is another card with different content." />
    </div>
  )
}