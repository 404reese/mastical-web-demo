'use client';

import { Property } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, MapPin, Home, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });

  return (
    <Link href={`/property/${property.Prop_ID}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-48 w-full">
          <Image
            src={property.Image}
            alt={property.Prop_name}
            fill
            className="object-cover"
          />
          <Badge variant="secondary" className="absolute top-2 right-2">
            {property.status}
          </Badge>
        </div>
        <CardHeader>
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold">{property.Prop_name}</h3>
            <Badge variant="secondary" className="text-lg">
              {formatter.format(property.Price)}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center text-muted-foreground mb-2">
            <MapPin className="h-4 w-4 mr-2" />
            {property.region} Region
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Home className="h-4 w-4 mr-2" />
              {property.bhk} BHK
            </div>
            <div className="flex items-center">
              <Building2 className="h-4 w-4 mr-2" />
              {property.prop_type}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between text-muted-foreground">
          <div className="flex items-center text-sm">
            <Clock className="h-4 w-4 mr-1" />
            {property.AGE > 0 ? `${property.AGE} years old` : 'New Construction'}
          </div>
          <Badge variant="outline">{property.sell_type}</Badge>
        </CardFooter>
      </Card>
    </Link>
  );
}