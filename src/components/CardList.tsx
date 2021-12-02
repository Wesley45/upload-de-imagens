import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface CardProps {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: CardProps[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [imgUrl, setImgUrl] = useState('');

  // TODO FUNCTION HANDLE VIEW IMAGE
  const viewImage = (url: string): void => {
    onOpen();
    setImgUrl(url);
  };

  return (
    <>
      {/* TODO CARD GRID */}
      <SimpleGrid columns={3} spacing="40px">
        {cards.map(card => (
          <Card key={card.id} data={card} viewImage={viewImage} />
        ))}
      </SimpleGrid>

      {/* TODO MODALVIEWIMAGE */}
      <ModalViewImage isOpen={isOpen} onClose={onClose} imgUrl={imgUrl} />
    </>
  );
}
