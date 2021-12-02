/* eslint-disable consistent-return */
/* eslint-disable no-nested-ternary */
import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';
import { useImages } from '../services/hooks/images/useImages';

export default function Home(): JSX.Element {
  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useImages();

  const formattedData = useMemo(() => {
    if (data) {
      const images = data.pages
        .map(imagesData => {
          return imagesData.data.map(image => {
            return { ...image };
          });
        })
        .flat();

      return images;
    }
  }, [data]);

  return isLoading ? (
    <Loading />
  ) : isError ? (
    <Error />
  ) : (
    <>
      <Header />
      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />

        {hasNextPage ? (
          <Button
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
            mt={5}
          >
            {isFetchingNextPage
              ? 'Carregando...'
              : hasNextPage
              ? 'Carregar mais'
              : 'Nada mais para carregar'}
          </Button>
        ) : null}
      </Box>
    </>
  );
}
