'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { routeConfig } from '@/shared/config/router/routerConfig';

export default function NotFoundPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace(routeConfig.home);
  }, [router]);

  return <></>;
}
