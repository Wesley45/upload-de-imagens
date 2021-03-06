import { AxiosError } from 'axios';
import { useInfiniteQuery, UseInfiniteQueryResult } from 'react-query';

import { api } from '../../api';

interface Image {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

type ResponseImages = {
  data: Image[];
  after?: string;
};

type RequestImage = {
  pageParam?: number;
};

export async function getImages({
  pageParam = 0,
}: RequestImage): Promise<ResponseImages> {
  const response = await api.get<ResponseImages>('/api/images', {
    params: {
      after: pageParam,
    },
  });

  return response.data;
}

export function useImages(): UseInfiniteQueryResult<
  ResponseImages,
  AxiosError
> {
  return useInfiniteQuery('images', getImages, {
    getNextPageParam: lastPage => lastPage.after || null,
  });
}
