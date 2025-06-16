import React from 'react';
import { ModalOverlay, ModalContent, CloseIcon, Icon } from './styled';
import Button from '../Button';
import Flex from '../Flex';
import Text from '../Text';
import { MESSAGES } from '@/constants/messages';
import { BUTTONS } from '@/constants/buttons';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message?: string;
}

const DeleteConfirmationModal: React.FC<Props> = ({ isOpen, onClose, onConfirm, message }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <Flex flexDirection="column" minHeight="50px">
          <Flex justify="space-between" align="center">
            <Text variant="title-delete">{MESSAGES.CONFIRM_DELETION}</Text>
            <CloseIcon onClick={onClose} />
          </Flex>
        </Flex>
        <Flex justify="center">
          <Icon>
            <span />
          </Icon>
        </Flex>
        <Text>{message || MESSAGES.DELETE_CONFIRMATION}</Text>
        <Flex justify="flex-end" gap="1rem" pt="20px">
          <Button onClick={onClose} backgroundColor="gray">
            {BUTTONS.CANCEL}
          </Button>
          <Button onClick={onConfirm} backgroundColor="red" color="white">
            {BUTTONS.DELETE}
          </Button>
        </Flex>
      </ModalContent>
    </ModalOverlay>
  );
};

export default DeleteConfirmationModal;
