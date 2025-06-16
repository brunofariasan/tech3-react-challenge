import React from 'react';
import Head from 'next/head';
import PostDetail from '@/components/PostDetail';

export default function PostDetailPage() {
  return (
    <>
      <Head>
        <title>Detalhes do Post</title>
      </Head>
      <PostDetail />
    </>
  );
}
