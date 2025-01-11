import { getProperties } from '@/lib/properties';
import PropertyDetail from '@/components/PropertyDetail';
import { notFound } from 'next/navigation';

interface PropertyPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const properties = await getProperties();
  return properties.map((property) => ({
    id: property.Prop_ID.toString(),
  }));
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const properties = await getProperties();
  const property = properties.find((p) => p.Prop_ID.toString() === params.id);

  if (!property) {
    notFound();
  }

  return <PropertyDetail property={property} />;
}