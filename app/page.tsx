import PropertyList from "@/components/PropertyList";
import { getProperties } from "@/lib/properties";
import Link from "next/link";

export default async function Home() {
  const properties = await getProperties();

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Propstical Demo Website
        </h1>
        <div className="text-center mb-8">
          <Link href="/view" className="text-blue-500 hover:underline">
            See Proposed Design
          </Link>
        </div>
        <PropertyList initialProperties={properties} />
      </div>
    </main>
  );
}
