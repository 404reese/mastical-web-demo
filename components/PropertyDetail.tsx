'use client';

import { Property } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, MapPin, Home, Clock, ArrowLeft, Sofa } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface PropertyDetailProps {
  property: Property;
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Listings
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative h-[400px] lg:h-[600px] w-full rounded-lg overflow-hidden">
            <Image
              src={property.Image}
              alt={property.Prop_name}
              fill
              className="object-cover"
            />
            <Badge variant="secondary" className="absolute top-4 right-4 text-lg">
              {property.status}
            </Badge>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{property.Prop_name}</h1>
              <div className="flex items-center text-muted-foreground mb-4">
                <MapPin className="h-4 w-4 mr-2" />
                {property.region} Region
              </div>
              <Badge variant="secondary" className="text-xl">
                {formatter.format(property.Price)}
              </Badge>
            </div>

            <Card>
              <CardContent className="grid grid-cols-3 gap-4 p-6">
                <div className="text-center">
                  <Home className="h-6 w-6 mx-auto mb-2" />
                  <div className="font-semibold">{property.bhk} BHK</div>
                  <div className="text-sm text-muted-foreground">Size</div>
                </div>
                <div className="text-center">
                  <Building2 className="h-6 w-6 mx-auto mb-2" />
                  <div className="font-semibold">{property.prop_type}</div>
                  <div className="text-sm text-muted-foreground">Type</div>
                </div>
                <div className="text-center">
                  <Sofa className="h-6 w-6 mx-auto mb-2" />
                  <div className="font-semibold">{property.Furnished}</div>
                  <div className="text-sm text-muted-foreground">Furnished</div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <span>
                  {property.AGE > 0 ? `${property.AGE} years old` : 'New Construction'}
                </span>
              </div>
              <div>
                <Badge variant="outline" className="text-base">
                  {property.sell_type}
                </Badge>
              </div>
            </div>

            <Button size="lg" className="w-full">
              Contact Agent
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}