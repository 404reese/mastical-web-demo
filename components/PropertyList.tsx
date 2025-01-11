'use client';

import { useState, useMemo } from 'react';
import { Property } from '@/lib/types';
import PropertyCard from './PropertyCard';
import { Select } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface PropertyListProps {
  initialProperties: Property[];
}

export default function PropertyList({ initialProperties }: PropertyListProps) {
  const [sortBy, setSortBy] = useState('price-asc');
  const [regionFilter, setRegionFilter] = useState('');

  const regions = useMemo(() => {
    return Array.from(new Set(initialProperties.map(p => p.region)));
  }, [initialProperties]);

  const filteredAndSortedProperties = useMemo(() => {
    let result = [...initialProperties];
    
    // Apply region filter
    if (regionFilter) {
      result = result.filter(p => 
        p.region.toLowerCase().includes(regionFilter.toLowerCase())
      );
    }
    
    // Apply sorting
    result.sort((a, b) => {
      if (sortBy === 'price-asc') return a.Price - b.Price;
      if (sortBy === 'price-desc') return b.Price - a.Price;
      return 0;
    });
    
    return result;
  }, [initialProperties, sortBy, regionFilter]);

  return (
    <div>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Filter Properties</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Input
              placeholder="Filter by region..."
              value={regionFilter}
              onChange={(e) => setRegionFilter(e.target.value)}
              className="w-full"
            />
          </div>
          <Select
            value={sortBy}
            onValueChange={setSortBy}
          >
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </Select>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAndSortedProperties.map((property) => (
          <PropertyCard key={property.Prop_ID} property={property} />
        ))}
      </div>
    </div>
  );
}