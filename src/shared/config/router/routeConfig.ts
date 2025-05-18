import { selfBackendUrl } from '@/shared/const/system';

import { ApiRoutes, AppRoutes } from '../../const/router';

export const routeConfig: Record<AppRoutes, string> = {
  [AppRoutes.NOT_FOUND]: '/not-found',
  [AppRoutes.HOME]: '/',
};

export const apiRoutesConfig: Record<
  ApiRoutes,
  { baseUrl: string; isNeedCustomQuery: boolean }
> = {
  [ApiRoutes.NEXT_SELF]: {
    baseUrl: '',
    isNeedCustomQuery: false,
  },
  [ApiRoutes.SELF]: {
    baseUrl: selfBackendUrl,
    isNeedCustomQuery: true,
  },
};
