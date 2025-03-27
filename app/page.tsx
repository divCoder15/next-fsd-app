import { Metadata } from 'next';

import { HomePage } from '@/pages/HomePage';
import { pagesMetadata } from '@/shared/config/metadata/pagesMetadata';

export const metadata: Metadata = pagesMetadata.home;

export default function Home() {
  return <HomePage />;
}
