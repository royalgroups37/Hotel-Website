'use client';

import dynamic from 'next/dynamic';

const MapWithAmenities = dynamic(() => import('./MapWithAmenities'), {
  ssr: false,
});

export default function ClientMapWithAmenities() {
  return <MapWithAmenities />;
}
