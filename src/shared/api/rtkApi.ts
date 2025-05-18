import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

import { apiRoutesConfig } from '../config/router/routeConfig';
import { ApiRoutes } from '../const/router';
import { getCookie } from '../lib/utils/cookies';
import { BaseQueryArgs } from '../types/api/rtkTypes';

import initCustomFetch from './customFetch';

const baseQuery: BaseQueryFn<BaseQueryArgs> = (...baseQueryArgs) => {
  const [args] = baseQueryArgs;

  const api = args.api || ApiRoutes.SELF;
  const { isNeedCustomQuery, baseUrl } = apiRoutesConfig[api];

  const useCustomFetch =
    args.customFetch !== undefined ? args.customFetch : isNeedCustomQuery;

  if (useCustomFetch) {
    return initCustomFetch(baseUrl)(...baseQueryArgs);
  }

  return fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      const access_token = getCookie('access_token');
      if (access_token) headers.set('authorization', `Bearer ${access_token}`);
      return headers;
    },
  })(...baseQueryArgs);
};

export const rtkApi = createApi({
  reducerPath: 'api',
  baseQuery,

  tagTypes: [
    'courses',
    'employees',
    'course-users',
    'reviews',
    'comments',
    'root-structure',
    'block-structure',
    'section-structure',
    'lesson',
    'homeworks',
    'notes',
    'completion-requests',
    'faq',
  ],
  endpoints: (_) => ({}),
});
