import React from 'react';
import { PageContainer } from '@/styles/styled';
import Head from 'next/head';
import { useEditPost } from '@/hooks/useEditPost';
import Text from '@/components/micro/Text';
import Spinner from '@/components/micro/Spinner';
import BreadcrumbNav from '@/components/micro/Breadcrumb';
import PostForm from '@/components/PostForm';
import { MESSAGES } from '@/constants/messages';

export default function EditPostPage() {
  const { post, loading, handleUpdate } = useEditPost();

  if (loading) return <Spinner size={40} color="#fff" />;
  if (!post) return <Text>{MESSAGES.POST_NOT_FOUND}</Text>;

  return (
    <PageContainer>
      <Head>
        <title>{MESSAGES.EDIT_POST}</title>
      </Head>
      <BreadcrumbNav crumbs={[{ label: 'Início', href: '/' }, { label: 'Editar Post' }]} />
      <Text variant="title">{MESSAGES.EDIT_POST}</Text>
      <PostForm initialData={post} onSubmit={handleUpdate} />
    </PageContainer>
  );
}
