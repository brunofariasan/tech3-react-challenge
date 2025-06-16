import React from 'react';
import * as S from './styled';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Post } from '../../types/post';
import Spinner from '../micro/Spinner';
import Button from '../micro/Button';
import { BUTTONS } from '@/constants/buttons';

type Props = {
  initialData?: Post;
  onSubmit: (data: Partial<Post>) => void | Promise<void>;
};

export default function PostForm({ initialData, onSubmit }: Props) {
  const [title, setTitle] = useState(initialData?.title || '');
  const [html, setHtml] = useState(initialData?.html || '');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    if (loading) return;
    setLoading(true);
    try {
      await onSubmit({ title, html });
      router.push('/');
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Spinner size={28} color="#fff" />
      ) : (
        <S.FormContainer>
          <S.TopRightButtonContainer>
            <Button backgroundColor="green" color="white" height="40px" onClick={handleSubmit}>
              {BUTTONS.SAVE}
            </Button>
          </S.TopRightButtonContainer>

          <S.Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Título"
            disabled={loading}
          />
          <S.TextArea
            value={html}
            onChange={(e) => setHtml(e.target.value)}
            placeholder="Conteúdo"
            disabled={loading}
          />
        </S.FormContainer>
      )}
    </>
  );
}
