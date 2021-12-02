import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        w="max"
        maxWidth="900px"
        h="max"
        maxHeight="600px"
        bg="pGray.800"
        borderTopRightRadius="none"
      >
        <ModalBody p="0">
          <Image
            src={imgUrl}
            height="calc(600px - 32px)"
            objectFit="cover"
            w="100%"
          />
        </ModalBody>
        <ModalFooter h="32px" justifyContent="start" pl="2.5" pt="2" pb="2">
          <Link
            fontSize="sm"
            lineHeight="1rem"
            fontWeight="normal"
            textAlign="left"
            color="pGray.50"
            href={imgUrl}
            target="_blank"
          >
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
