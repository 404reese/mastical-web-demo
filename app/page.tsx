import PropertyList from '@/components/PropertyList';
import { getProperties } from '@/lib/properties';

export default async function Home() {
  const properties = await getProperties();
  
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Discover Your Dream Property
        </h1>
        <PropertyList initialProperties={properties} />
      </div>
    </main>
  );
}