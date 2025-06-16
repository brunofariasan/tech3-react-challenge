'use client';

import React from 'react';
import { useEffect, useState } from 'react';
import { Container, ToastBox } from './styled';
import Text from '../Text';
import { ErrorIcon, SuccessIcon, InfoIcon } from '../Icons';

type ToastType = 'error' | 'success' | 'info';

let showToastFn: (message: string, type?: ToastType) => void;

export function ToastContainer() {
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState<ToastType>('info');

  useEffect(() => {
    showToastFn = (msg, toastType = 'info') => {
      setMessage(msg);
      setType(toastType);
      setVisible(true);
      setTimeout(() => setVisible(false), 3000);
    };
  }, []);

  const getIcon = () => {
    switch (type) {
      case 'error':
        return <ErrorIcon />;
      case 'success':
        return <SuccessIcon />;
      default:
        return <InfoIcon />;
    }
  };

  return (
    <Container>
      {visible && (
        <ToastBox type={type}>
          {getIcon()}
          <Text variant="small-title-post">{message}</Text>
        </ToastBox>
      )}
    </Container>
  );
}

export function showToast(message: string, type?: ToastType) {
  if (showToastFn) {
    showToastFn(message, type);
  } else {
    console.warn('Toast');
  }
}
