import { Property } from './types';
import propertiesData from '@/data/properties.json';

export async function getProperties(): Promise<Property[]> {
  return propertiesData.properties;
}